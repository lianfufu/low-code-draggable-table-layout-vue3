<template>
  <div class="wrap" :style="{paddingBottom:padding+'px',paddingTop:padding+'px'}" @click="sourceTargetClickIsTD">
    <!--    <div style="opacity: 0;height: 0">{{writableIsClickTD}}-{{isShowOperationBar}}-{{isClickedTD}}</div>-->
    <div>{{ reactiveData.writableIsClickTD }}-{{ reactiveData.isShowOperationBar }}-{{ isClickedTD }}</div>
    <cell-operation-bar v-show="reactiveData.isClickedAtOperationBar||(reactiveData.isShowOperationBar&&reactiveData.writableIsClickTD)"
                        @updateCurCellSplitInfo="doSplitRowOrColumn" @doMergeCells="doMergeRowOrColumn"
                        @doDeleteRow="doDeleteLocatedRow" @doDeleteCol="doDeleteLocatedCol"
                        :isClickedAtOperationBar="reactiveData.isClickedAtOperationBar" @update:isClickedAtOperationBar="(value)=>{reactiveData.isClickedAtOperationBar=value}" :positionVal="reactiveData.operationBarPosition"/>
    <table ref="mytable" class="table" :border="isShowBorder?1:0">
      <col v-for="(item,index) in reactiveData.columnWidths" :key="index" :style="{width:item+'%'}"/>
      <tbody>
        <tr v-for="(item,index) in tableDataArr2 || [[]]" :style="{height:reactiveData.rowHeights[index]+'px'}" :key="index">
          <template v-for="(item2,index2) in item" :key="index2" >
            <td :data-rowIndex="index" :data-colIndex="index2" :data-colSpan="item2[0]?item2[0].colSpan:1"
                :data-rowSpan="item2[0]?item2[0].rowSpan:1" :colspan="item2[0]?item2[0].colSpan:1"
                :rowspan="item2[0]?item2[0].rowSpan:1"
                :class="[isShowBorder?'':'no-border',isSelectedCell(index,index2)?'selected-cell':'']"
                v-if="item2 && item2.length > 0" @mousedown="tdMouseDown" @mousemove="tdMouseMove"
                @mouseup="tdMouseUp" :valign="model"
                @click.stop="showTableConfig(item2,index,index2,item2[0]?item2[0].rowSpan:1,item2[0]?item2[0].colSpan:1)"
                class="resizable-cell flex-td" :style="getCellStyle(reactiveData.columnWidths,item2,index2)">
              <McTableItemContainer>
                <ControlNestWidget :cellColSpan="item2[0]?item2[0].colSpan:1" :cellRowSpan="item2[0]?item2[0].rowSpan:1"
                                   :cell-col-index="index2" :cell-row-index="index" :isWidget="true"
                                   @updateTableChildData="doUpdateWidgetsForDel(index,index2)"
                                   @update:list="doUpdateWidgets" :list="item2"/>
              </McTableItemContainer>
              <RowResizer :index="index" :rowHeights="reactiveData.rowHeights"/>
              <ColumnResizer :index="index" :index2="index2" :item2="item2" :colCount="colCount"
                             :columnWidths="reactiveData.columnWidths" :parentWidth="reactiveData.parentWidth"/>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {lcm} from "@/utils/mathUtils";
import {computed, onMounted, reactive, ref, watch} from "vue";
import {useStore} from "@/store";
import {getRandomCode} from "@/utils/globalMethods";

const store=useStore();
const reactiveData=reactive({
  tabData: [],//绑定到页面的二维数组
  columnWidths: [],//所有列的列宽数组
  rowHeights: [],//所有行的行高数组
  myColCount: 3,//列数
  myRowCount: 2,//行数
  parentWidth: 430,//当前画布宽度
  cellIsMouseMove: false,//用于控制计算鼠标移过的矩形范围的单元格被选择
  selectedMinRowIndex: Number.NaN,//选择框的左上角点的RowIndex
  selectedMaxRowIndex: Number.NaN,//选择框的右下角点的RowIndex
  selectedMinColIndex: Number.NaN,//选择框的左上角点的ColIndex
  selectedMaxColIndex: Number.NaN,//选择框的右下角点的ColIndex
  pickedRowIndex: Number.NaN,//按下第一次鼠标时的行索引
  pickedColIndex: Number.NaN,//按下第一次鼠标时的列索引
  pickedRowSpan: Number.NaN,//按下第一次鼠标时的单元格的行跨数
  pickedColSpan: Number.NaN,//按下第一次鼠标时的单元格的列跨数
  operationBarPosition: {
    left: 0,
    top: 0,
  },//操作栏相对于table的左上角点的位置
  isToChangeRowByNoneUI: false,//是否修改了行数是由于合并、拆分、删除单元格所导致的，而非右侧配置区的行数number slider导致的
  isToChangeColByNoneUI: false,//是否修改了列数是由于合并、拆分、删除单元格所导致的，而非右侧配置区的行数number slider导致的
  isShowOperationBar: false,//为了控制单元格操作栏的显隐
  writableIsClickTD: false,//为了控制单元格操作栏的显隐
  isClickedAtOperationBar: false,//判断是否点击了操作柄内部的元素
});
// const writableColCount=ref<number>(0);
// const writableRowCount=ref<number>(0);
// const writableChildren=ref<any>(null);
const props=defineProps({
  children: {
    type: Array,
    default: () => []
  },
  padding: {
    type: Number,
    default: 0
  },
  colCount: {
    type: Number,
    default: 3
  },
  rowCount: {
    type: Number,
    default: 2
  },
  model: {
    type: String,
    default: "top"//内部单元格对齐方式
  },
  isShowBorder: {
    type: Boolean,
    default: true//是否显示表格及cell的边界线
  },
  globalCellBgc: {
    type: String,
    default: "#fff"//全局单元格样式
  }
});
// const emits=defineEmits(["update:colCount","update:rowCount","update:children"]);


onMounted(()=>{
  console.log(store.curComponent);
  for (let i = 0; i < props.colCount; i++) {
    reactiveData.columnWidths.push(100 / props.colCount);
  }
  for (let j = 0; j < props.rowCount; j++) {
    reactiveData.rowHeights.push(40);
  }
});
const curComponent=computed(()=>{
  return store.curComponent;
});
const tableDataArr2=ref([[]]);
const isNeedUpateTableDataArr2=ref(true);
watch(()=>[props.rowCount,props.colCount,reactiveData.tabData],(value)=>{
  if(isNeedUpateTableDataArr2.value){
    console.log("[][]后",mytable);

    const isHasYouZhi=reactiveData.tabData.filter(item=>item.rowIndex==13&&item.colIndex==0&&item.rowSpan==1&&item.colSpan==4);
    if(isHasYouZhi&&isHasYouZhi.length>0){
      console.log(isHasYouZhi,isHasYouZhi[0].rowIndex,isHasYouZhi[0].colIndex,isHasYouZhi[0].rowSpan,isHasYouZhi[0].colSpan,"isHasYouZhi");
    }

    const res = [];
    const tdRowColIndexToRemove = [];
    for (let i = 0; i < props.rowCount; i++) {
      res[i] = [];
      for (let j = 0; j < props.colCount; j++) {
        // 初始化 res[i][j] 为一个空数组
        res[i][j] = [];
        //判断当前遍历的i，j是否属于被覆盖的单元格索引
        const matched = tdRowColIndexToRemove.findIndex(item => item.rowIndex === i && item.colIndex === j);
        if (matched !== -1) {
          res[i][j] = [];
          tdRowColIndexToRemove.splice(matched, 1);
          continue;
        }
        //获取component.json中预定义的匹配rowindex和colindex的项
        const matchedChild = reactiveData.tabData.filter(item => item.rowIndex === i && item.colIndex === j);
        if (matchedChild && matchedChild.length > 0) {
          if (matchedChild.length === 1) {
            const first = matchedChild[0];
            // first.id = getRandomCode(8);
            res[i][j] = [first];
          } else {
            res[i][j] = matchedChild;
          }
          const rowSpan = matchedChild[0].rowSpan;//认为多个同index的单元格的rowSpan数据一致
          const colSpan = matchedChild[0].colSpan;//认为多个同index的单元格的colSpan数据一致
          if (rowSpan !== 1 || colSpan !== 1) {
            for (let k = i; k < rowSpan + i; k++) {
              for (let l = j; l < colSpan + j; l++) {
                if (k === i && l === j) {
                  continue;
                }
                tdRowColIndexToRemove.push({
                  rowIndex: k,
                  colIndex: l
                });
              }
            }
          }
        } else {
          res[i][j] = [{
            id: getRandomCode(8),
            component: "MCTextContainer",
            rowIndex: i,
            colIndex: j,
            rowSpan: 1,
            colSpan: 1,
          }];
        }
      }
    }
    console.log("最新的tableDataArr2",res);
    tableDataArr2.value=res;
  }
},{
  deep:true,
  immediate:true
});
// const tableDataArr3=computed(()=>{
//   // if(!mytable||!mytable.value){
//   //   console.log("[][]前",mytable);
//   //   return [[]];
//   // }
//   console.log("[][]后",mytable);
//
//   const isHasYouZhi=reactiveData.tabData.filter(item=>item.rowIndex==13&&item.colIndex==0&&item.rowSpan==1&&item.colSpan==4);
//   if(isHasYouZhi&&isHasYouZhi.length>0){
//     console.log(isHasYouZhi,isHasYouZhi[0].rowIndex,isHasYouZhi[0].colIndex,isHasYouZhi[0].rowSpan,isHasYouZhi[0].colSpan,"isHasYouZhi");
//   }
//
//   const res = [];
//   const tdRowColIndexToRemove = [];
//   for (let i = 0; i < props.rowCount; i++) {
//     res[i] = [];
//     for (let j = 0; j < props.colCount; j++) {
//       // 初始化 res[i][j] 为一个空数组
//       res[i][j] = [];
//       //判断当前遍历的i，j是否属于被覆盖的单元格索引
//       const matched = tdRowColIndexToRemove.findIndex(item => item.rowIndex === i && item.colIndex === j);
//       if (matched !== -1) {
//         res[i][j] = [];
//         tdRowColIndexToRemove.splice(matched, 1);
//         continue;
//       }
//       //获取component.json中预定义的匹配rowindex和colindex的项
//       const matchedChild = reactiveData.tabData.filter(item => item.rowIndex === i && item.colIndex === j);
//       if (matchedChild && matchedChild.length > 0) {
//         if (matchedChild.length === 1) {
//           const first = matchedChild[0];
//           first.id = getRandomCode(8);
//           res[i][j] = [first];
//         } else {
//           res[i][j] = matchedChild;
//         }
//         const rowSpan = matchedChild[0].rowSpan;//认为多个同index的单元格的rowSpan数据一致
//         const colSpan = matchedChild[0].colSpan;//认为多个同index的单元格的colSpan数据一致
//         if (rowSpan !== 1 || colSpan !== 1) {
//           for (let k = i; k < rowSpan + i; k++) {
//             for (let l = j; l < colSpan + j; l++) {
//               if (k === i && l === j) {
//                 continue;
//               }
//               tdRowColIndexToRemove.push({
//                 rowIndex: k,
//                 colIndex: l
//               });
//             }
//           }
//         }
//       } else {
//         res[i][j] = [{
//           id: getRandomCode(8),
//           component: "MCTextContainer",
//           rowIndex: i,
//           colIndex: j,
//           rowSpan: 1,
//           colSpan: 1,
//         }];
//       }
//     }
//   }
//   console.log("最新的tableDataArr2",res);
//   return res;
// });
watch(()=>tableDataArr2.value,(value)=>{
  console.log("最新的tableDataArr2",value);
})
const isClickedTD=computed(()=>{
  if (!curComponent.value) {
    console.log("这里curComponent不存在才给的false");
    return false;
  }
  if (!curComponent.value.component || curComponent.value.component === "McTable" || curComponent.value.component === "MCTextContainer") {
    return true;//因为设定过当点击td，这个时候没有设置component属性
  }
  console.log("其他情况才给的false", curComponent.value, curComponent.value.component === "McTable");
  return false;
});

const emits=defineEmits(["update:rowCount","update:colCount","update:children"]);
watch(()=>reactiveData.myRowCount,(value)=>{
  console.log("行数变了myRowCount");
  emits("update:rowCount", value);
},{
  immediate: true,
});
watch(()=>reactiveData.myColCount,(value)=>{
  emits("update:colCount", value);
},{
  immediate: true,
});
watch(()=>props.children,(value)=>{
  reactiveData.tabData = value;
  console.log("看下传入的children的值",reactiveData.tabData);
},{
  deep:true,
  immediate:true
});
watch(()=>reactiveData.tabData,(value)=>{
  emits("update:children", value);
},{
  deep:true,
  immediate:true
});
watch(()=>props.colCount,(value)=>{
  reactiveData.myColCount = value;
  if (!reactiveData.isToChangeColByNoneUI) {
    // 只要修改了列的个数，先前的列的宽度设置都将被重置
    reactiveData.columnWidths = [];
    for (let i = 0; i < props.colCount; i++) {
      reactiveData.columnWidths.push(100 / props.colCount);
    }
  } else {
    reactiveData.isToChangeColByNoneUI = false;
  }
});
watch(()=>props.rowCount,(value,oldValue)=>{
  console.log("行数变了rowCount");
  reactiveData.myRowCount = value;
  if (value > oldValue) {//原有的高度值不要被改变
    for (let i = oldValue; i < props.rowCount; i++) {
      reactiveData.rowHeights.push(40);
    }
  } else {
    if (!reactiveData.isToChangeRowByNoneUI) {
      for (let i = 0; i < oldValue - props.rowCount; i++) {
        reactiveData.rowHeights.pop();
      }
    } else {
      reactiveData.isToChangeRowByNoneUI = false;
    }
  }
});
watch(isClickedTD,(value)=>{
  if (!value) {
    clearCurSelectedCells();
    console.log(value, "最后没有执行清空操作？");
  }
},{
  deep:true
});
watch(()=>reactiveData.isShowOperationBar,(value)=>{
  if (!value && !reactiveData.isClickedAtOperationBar) {
    clearCurSelectedCells();
  }
},{
  deep:true
});
function getCellStyle(columnWidths:any, list:any, index:number) {
  const colSpan = list[0] ? list[0].colSpan : 1;
  let cellWidth = 0;
  for (let i = index; i < index + colSpan; i++) {
    cellWidth += columnWidths[i];
  }

  //todo 这种区别对待的，最好要做一个统一处理
  if (!list || list.length === 0) {
    return {
      width: cellWidth + "%",
      backgroundColor: props.globalCellBgc
    };
  }
  // console.log(list[0].cellFieldsVal?.contentBgc || props.globalCellBgc);
  let cellBgc="#ffffff00";//新创建的mcContainer组件的颜色都设置为透明色。fff颜色也是一种默认色，也就是component.json中定义的色彩，界面拾取的颜色，如果是白色都是6个ffffff的，因此不会面临被全局色覆盖的问题
  if(list[0].cellFieldsVal?.contentBgc&&(list[0].cellFieldsVal?.contentBgc==="#ffffff00"||list[0].cellFieldsVal?.contentBgc==="#fff")){
    cellBgc=props.globalCellBgc;
  }else{
    if(list[0].cellFieldsVal?.contentBgc){
      cellBgc=list[0].cellFieldsVal?.contentBgc;
    }
  }
  return {
    width: cellWidth + "%",
    padding: list[0].cellFieldsVal?.padding + 'px',
    backgroundColor: cellBgc
  }
}

//#region 物料对应实际数据的添加删除逻辑
//当点击物料的删除按钮时，执行此方法
function doUpdateWidgetsForDel(rowIndex:number, colIndex:number, delValue:any) {
  const target = reactiveData.tabData.findIndex(item => item.rowIndex === rowIndex && item.colIndex === colIndex);
  if (target !== -1) {
    // this.tabData.splice(target,1);//初始版本写法
    //下面是优化，针对当删除到最后一个内容时，并不真正删除，而是将其变成MCTextContainer
    const allMatchedItems = reactiveData.tabData.filter(item => item.rowIndex === rowIndex && item.colIndex === colIndex);
    const colSpan = allMatchedItems[0].colSpan;
    const rowSpan = allMatchedItems[0].rowSpan;
    reactiveData.tabData.splice(target, 1);
    if (allMatchedItems.length === 1) {
      console.log(allMatchedItems, "进来了计算allMatchedItems");
      reactiveData.tabData.push({
        id: getRandomCode(8),
        component: "MCTextContainer",
        rowIndex: rowIndex,
        colIndex: colIndex,
        rowSpan: rowSpan,
        colSpan: colSpan,
      });
    }
  }
}
//当拖入新的物料数据时，执行此方法
function doUpdateWidgets(newValue:any) {
  const newItems = [];//加入新对象的逻辑
  if (newValue && Array.isArray(newValue)) {
    for (const item of newValue) {
      if (item.id) {
        const target = reactiveData.tabData.find(item2 => item2.id === item.id);
        if (!target) {
          newItems.push(item);
        }
      }
    }
  }
  newItems.length > 0 && newItems.forEach(item => {
    reactiveData.tabData.push(item);
  })
  console.log("监听item2的改变", newValue, newItems);
}
//#endregion 物料对应实际数据的添加删除逻辑

//和显示修改、配置单元格颜色有关的
function showTableConfig(item:any, rowIndex:any, colIndex:any, rowSpan:any, colSpan:any) {
  reactiveData.selectedMinColIndex = colIndex;
  reactiveData.selectedMaxColIndex = colIndex + colSpan - 1;
  reactiveData.selectedMinRowIndex = rowIndex;
  reactiveData.selectedMaxRowIndex = rowIndex + rowSpan - 1;
  reactiveData.pickedColIndex = colIndex;
  reactiveData.pickedRowIndex = rowIndex;
  reactiveData.pickedRowSpan = rowSpan;
  reactiveData.pickedColSpan = colSpan;
  if (!item || item.length === 0) {
    return;
  }
  //todo 如果item[0]为空，则不允许调摄颜色。
  console.log("dds",item[0], item[0].cellFields, item[0].cellFieldsVal);
  store.curComponent=item[0].cellFieldsVal;
  store.curStateFields=item[0].cellFields;//字段定义
}

//#region UI交互单元格：选择单元格、清空选择单元格、添加/减少选择单元格
//管理选中的单元格
function isSelectedCell(rowIndex:number, colIndex:number) {
  if (Number.isNaN(reactiveData.selectedMinColIndex)) {
    return false;
  }
  return reactiveData.selectedMinRowIndex <= rowIndex && reactiveData.selectedMaxRowIndex >= rowIndex && reactiveData.selectedMinColIndex <= colIndex && reactiveData.selectedMaxColIndex >= colIndex;
}
//清除所有选择的单元格和隐藏操作栏
function clearCurSelectedCells() {
  reactiveData.selectedMinColIndex = Number.NaN;
  reactiveData.selectedMaxColIndex = Number.NaN;
  reactiveData.selectedMinRowIndex = Number.NaN;
  reactiveData.selectedMinRowIndex = Number.NaN;
  reactiveData.pickedColIndex = Number.NaN;
  reactiveData.pickedRowIndex = Number.NaN;
  reactiveData.pickedRowSpan = Number.NaN;
  reactiveData.pickedColSpan = Number.NaN;
  console.log("执行了清理单元格所有的，为何？");
  reactiveData.isShowOperationBar = false;
}
//鼠标按下事件处理器，控制是否按下移动td能否拖拽单元格。只有当按下的位置是td元素时，而非td元素内部的其他元素时，才允许触发移动鼠标更新选择范围的事件处理器
function tdMouseDown() {
  if (event.target.nodeName === "TD") {
    reactiveData.cellIsMouseMove = true;
    reactiveData.isShowOperationBar = false;//按下鼠标，隐藏操作栏
    // reactiveData.pickedCellX = event.clientX;
    // reactiveData.pickedCellY = event.clientY;
    event.stopPropagation(); // 阻止事件冒泡到draggable组件
    event.preventDefault();  // 阻止默认行为，以防万一
  }
}
//根据鼠标最新移入的单元格的行列索引及跨数，计算更新选择范围
function pushCurSelectCell(rowIndex:number, colIndex:number, rowSpan:number, colSpan:number) {
  if (Number.isNaN(reactiveData.selectedMinRowIndex)) {
    reactiveData.selectedMinRowIndex = rowIndex;
    reactiveData.selectedMaxRowIndex = rowIndex;
    reactiveData.selectedMinColIndex = colIndex;
    reactiveData.selectedMaxColIndex = colIndex;
    reactiveData.pickedColIndex = colIndex;
    reactiveData.pickedRowIndex = rowIndex;
    reactiveData.pickedRowSpan = rowSpan;
    reactiveData.pickedColSpan = colSpan;
    return;
  }
  reactiveData.selectedMinRowIndex = Math.min(rowIndex, reactiveData.pickedRowIndex);
  reactiveData.selectedMaxRowIndex = Math.max(rowIndex + rowSpan - 1, reactiveData.pickedRowIndex);
  reactiveData.selectedMinColIndex = Math.min(colIndex, reactiveData.pickedColIndex);
  reactiveData.selectedMaxColIndex = Math.max(colIndex + colSpan - 1, reactiveData.pickedColIndex);
  //然后考虑初始选择的如果是跨行列的对象效应，将会这么处理
  if (reactiveData.pickedRowSpan !== 1 || reactiveData.pickedColSpan !== 1) {
    reactiveData.selectedMaxRowIndex = Math.max(reactiveData.selectedMaxRowIndex, reactiveData.pickedRowIndex + reactiveData.pickedRowSpan - 1);
    reactiveData.selectedMaxColIndex = Math.max(reactiveData.pickedColIndex + reactiveData.pickedColSpan - 1, reactiveData.selectedMaxColIndex);
  }

  console.log(reactiveData.pickedRowIndex, reactiveData.selectedMinRowIndex, reactiveData.selectedMaxRowIndex, "--", reactiveData.pickedColIndex, reactiveData.selectedMinColIndex, reactiveData.selectedMaxColIndex);
}
//鼠标移入核心逻辑，只有当移入的元素的最内层根本的元素是TD单元格时，才更新选择范围
function handleMouseMove(event:any) {
  const target = document.elementFromPoint(event.clientX, event.clientY);
  if (target && target.tagName === 'TD') {
    console.log(target);
    const rowIndex = target.dataset.rowindex;
    const colIndex = target.dataset.colindex;
    pushCurSelectCell(Number(rowIndex), Number(colIndex), Number(target.dataset.rowspan), Number(target.dataset.colspan));
  }
}
//鼠标移入事件的事件处理器
function tdMouseMove() {
  if (reactiveData.cellIsMouseMove) {
    console.log("移动了", event.clientX, event.clientY);
    handleMouseMove(event);
    event.stopPropagation(); // 阻止事件冒泡到draggable组件
    event.preventDefault();
  }
}
//计算单元格操作栏的位置
const mytable=ref<any>(null);
function calculateCellOperationBarLocation(event:any) {
  const rect = mytable.value.valueOf().getBoundingClientRect();
  const refLeft = rect.x;
  const refTop = rect.y - props.padding;
  reactiveData.operationBarPosition.left = (event.clientX - refLeft + 50) + 'px';
  reactiveData.operationBarPosition.top = (event.clientY - refTop - 50) + 'px';
  console.log(reactiveData.operationBarPosition);
  reactiveData.isShowOperationBar = true;
}
//采用事件委托的方式，控制点击cell-operation-bar组件内部的哪些元素以后，不再去显示操作栏，即点击删除行/列按钮后，不再显示操作栏。
function sourceTargetClickIsTD() {
  const isClickTDViewFromWrapperDiv = event.target.nodeName === "TD" || event.target.nodeName === "TR" || event.target.nodeName === "TBODY";//如果是false，才有可能选择的是来自于cell-operation-bar组件内部的哪些元素
  if (!isClickTDViewFromWrapperDiv) {
    const isFromChild = event.target.closest('.cell-operation-bar') && !event.target.closest('.delete-row') && !event.target.closest('.delete-col');
    if (!isFromChild) {
      reactiveData.isShowOperationBar = false;
      reactiveData.isClickedAtOperationBar = false;
      console.log("点击了target的类型为", event.target);
    } else {
      console.log("dianle来自cell-operation-bar类");
    }

  }
}
//抬起鼠标的事件处理器，取消当前所处于的选择单元格状态（cellIsMouseMove）
function tdMouseUp() {
  // if (reactiveData.cellIsMouseMove) {
  //   reactiveData.pickedCellX = 0;
  //   reactiveData.pickedCellY = 0;
  // }
  reactiveData.cellIsMouseMove = false;
  reactiveData.writableIsClickTD = true;
  calculateCellOperationBarLocation(event);
}
//#endregion UI交互单元格：选择单元格、清空选择单元格、添加/减少选择单元格

//拆分合并、删除行、删除列相关的
//#region 控制单元格的宽高，当由于拆分合并、删除行、删除列所导致单元格的行列宽/高尺寸发生变化时
//要求索引从小到大传入，确保合并单元格前后的总高度保持不变
function mergeCellHeight(allMergeIndices:any) {
  let totalHeight = 0;
  allMergeIndices.forEach(item => {
    totalHeight += reactiveData.rowHeights[item];
  });
  reactiveData.rowHeights[allMergeIndices[0]] = totalHeight;
  console.log(totalHeight, "totalHeight", allMergeIndices, reactiveData.rowHeights[allMergeIndices[0]], reactiveData.rowHeights);
  allMergeIndices.splice(0, 1);
  const reverseIndices = allMergeIndices.reverse();
  console.log(reverseIndices, "reverseIndices");
  reverseIndices.forEach(item => {
    reactiveData.rowHeights.splice(item, 1);
  });
  console.log(reactiveData.rowHeights);
}
//要求索引从小到大传入，合并单元格，涉及到列的合并时。行贯通，而导致的列数减少的情况，确保合并单元格前后的总宽度保持不变
function mergeCellWidth(allMergeIndices:any) {
  let totalWidth = 0;
  allMergeIndices.forEach(item => {
    totalWidth += reactiveData.columnWidths[item];
  });
  reactiveData.columnWidths[allMergeIndices[0]] = totalWidth;
  // console.log(totalHeight,"totalHeight",allMergeIndices,this.rowHeights[allMergeIndices[0]],this.rowHeights);
  allMergeIndices.splice(0, 1);
  const reverseIndices = allMergeIndices.reverse();
  console.log(reverseIndices, "reverseIndices");
  reverseIndices.forEach(item => {
    reactiveData.columnWidths.splice(item, 1);
  });
}
//删除所选单元格的高度，确保删除某行单元格时，对应位置的行高也要跟着删除（未被删除的单元格高度保持不变）。
function removeCellHeight(allIndiceToRemove:any) {
  const reverseIndices = allIndiceToRemove.reverse();
  reverseIndices.forEach(item => {
    reactiveData.rowHeights.splice(item, 1);
  });
}
//删除所选单元格的宽度，确保删除某列单元格时，对应位置的列宽也要跟着删除（被删除的宽度，平均附加到未被删除的单元格宽度上）。
function removeCellWidth(allIndiceToRemove:any) {
  let removeTotalWidths = 0;
  const reverseIndices = allIndiceToRemove.reverse();
  reverseIndices.forEach(item => {
    removeTotalWidths += reactiveData.columnWidths[item];
    reactiveData.columnWidths.splice(item, 1);
  });
  const evenlyAddWidth = removeTotalWidths / reactiveData.columnWidths.length;
  for (let i = 0; i < reactiveData.columnWidths.length; i++) {
    reactiveData.columnWidths[i] += evenlyAddWidth;
  }
}
//拆分单元格前后的总高度保持不变，被拆分出来的单元格高度保持一致
function splitCellHeight(splitEveryCellHeight:any, addRowCount:any) {
  for (let i = reactiveData.selectedMinRowIndex; i <= reactiveData.selectedMaxRowIndex; i++) {
    reactiveData.rowHeights[i] = splitEveryCellHeight;
  }
  if (addRowCount === 0) {
    return;
  }
  if (reactiveData.selectedMaxRowIndex + 1 < reactiveData.rowHeights.length) {
    reactiveData.rowHeights.splice(reactiveData.selectedMaxRowIndex + 1, 0, ...new Array(addRowCount).fill(splitEveryCellHeight));
  } else {
    reactiveData.rowHeights.push(...new Array(addRowCount).fill(splitEveryCellHeight));
  }
  console.log(splitEveryCellHeight, reactiveData.rowHeights);
}
//拆分单元格前后的总宽度保持不变，被拆分出来的单元格高度保持一致
function splitCellWidth(splitEveryCellWidth:any, addColCount:any) {
  for (let i = reactiveData.selectedMinColIndex; i <= reactiveData.selectedMaxColIndex; i++) {
    reactiveData.columnWidths[i] = splitEveryCellWidth;
  }
  if (addColCount === 0) {
    return;
  }
  if (reactiveData.selectedMaxColIndex + 1 < reactiveData.columnWidths.length) {
    reactiveData.columnWidths.splice(reactiveData.selectedMaxColIndex + 1, 0, ...new Array(addColCount).fill(splitEveryCellWidth));
  } else {
    reactiveData.columnWidths.push(...new Array(addColCount).fill(splitEveryCellWidth));
  }
  console.log(splitEveryCellWidth, reactiveData.columnWidths);
}
//#endregion 控制单元格的宽高，由于拆分合并、删除行、删除列所导致单元格的行列宽/高尺寸发生变化时

//#region 具体实现拆分合并、删除行、删除列
//合并单元格
function doMergeRowOrColumn() {
  console.log("合并单元格");
  if (reactiveData.selectedMaxColIndex === reactiveData.selectedMinColIndex && reactiveData.selectedMaxRowIndex === reactiveData.selectedMinRowIndex) {
    return;
  }

  const mergeRowSpan = reactiveData.selectedMaxRowIndex - reactiveData.selectedMinRowIndex + 1;
  const mergeColSpan = reactiveData.selectedMaxColIndex - reactiveData.selectedMinColIndex + 1;
  const mergeRowIndex = reactiveData.selectedMinRowIndex;
  const mergeColIndex = reactiveData.selectedMinColIndex;
  let allMatchedItems = [];
  for (let i = reactiveData.selectedMinRowIndex; i <= reactiveData.selectedMaxRowIndex; i++) {//合并后，让他不再被选中，因为之前的selectedMinRowIndex会自动更新，也不要有操作柄
    for (let j = reactiveData.selectedMinColIndex; j <= reactiveData.selectedMaxColIndex; j++) {
      // const curMatchedItems=this.
      //todo 已经合并过的单元格，现在不支持嵌套合并。已解决
      //todo 合并导致的行数减少，需要更新后续数据。已解决

      //搜集获取此范围内的全部cells。是从tableData中进行搜寻。如果被搜寻的对象是跨单元格的，即已经合并后的对象，这个时候的交叉碰撞逻辑是，如果左上角的角点等于当前的i和j就被收集进来
      const curMatchedItems = reactiveData.tabData.filter(item => item.rowIndex === i && item.colIndex === j);
      if (curMatchedItems && curMatchedItems.length > 0) {
        curMatchedItems.forEach(item => {
          item.rowIndex = mergeRowIndex;
          item.colIndex = mergeColIndex;
          item.colSpan = mergeColSpan;
          item.rowSpan = mergeRowSpan;
        });
        console.log("合并后的curMatchedItems", curMatchedItems);
        allMatchedItems.push(...curMatchedItems);
      }
    }
  }
  //如果合并导致列数或行数发生了改变，除了要修改总的列数和行数信息外，还要先修改各个单元格的索引号
  //由于列贯通，需要减少单元格行数的情况。
  console.log(reactiveData.selectedMaxColIndex - reactiveData.selectedMinColIndex + 1 === props.colCount && reactiveData.selectedMaxRowIndex !== reactiveData.selectedMinRowIndex, "由于列贯通，需要减少单元格行数的情况。");
  if (reactiveData.selectedMaxColIndex - reactiveData.selectedMinColIndex + 1 === props.colCount && reactiveData.selectedMaxRowIndex !== reactiveData.selectedMinRowIndex) {
    //需要减少的行数
    const rowCountToSubtract = reactiveData.selectedMaxRowIndex - reactiveData.selectedMinRowIndex;
    //计算从哪个位置开始减少
    const startRowIndexToSubtract = reactiveData.selectedMaxRowIndex + 1;
    console.log(rowCountToSubtract, startRowIndexToSubtract, props.rowCount - rowCountToSubtract);
    //减少后的实际行数
    const restRowCount = props.rowCount - rowCountToSubtract;
    const map = new Map();
    for (let k = startRowIndexToSubtract; k < props.rowCount; k++) {
      const matchedCurRowCells = reactiveData.tabData.filter(item => item.rowIndex === k);
      if (matchedCurRowCells && matchedCurRowCells.length > 0) {
        map.set(k - rowCountToSubtract, matchedCurRowCells);
      }
    }
    console.log(map, '此处的map');
    map.forEach((value, key) => {
      console.log(value, "value");
      value.forEach(item => {
        item.rowIndex = key;
      });
    });

    //如果构成造成行数减小，那么行的rowSpan将设置为1
    if (allMatchedItems && allMatchedItems.length > 0) {
      allMatchedItems.forEach(item => {
        item.rowSpan = 1;
      });
      console.log("行span设置为1无效？", allMatchedItems);
    }

    const mergeIndices = [];
    for (let s = reactiveData.selectedMinRowIndex; s <= reactiveData.selectedMaxRowIndex; s++) {
      mergeIndices.push(s);
    }
    mergeCellHeight(mergeIndices);

    reactiveData.isToChangeRowByNoneUI = true;
    reactiveData.myRowCount = restRowCount;
    //reactiveData更新选择框
    reactiveData.selectedMaxRowIndex = reactiveData.selectedMaxRowIndex - rowCountToSubtract;
    // console.log(this.itemComponent.rowCount,restRowCount);

  }

  //todo 列操作
  //由于行贯通选择【纵向选择】，导致的列数减少的情况
  if (reactiveData.selectedMaxRowIndex - reactiveData.selectedMinRowIndex + 1 === props.rowCount && reactiveData.selectedMaxColIndex !== reactiveData.selectedMinColIndex) {
    //需要减少的列数
    const colCountToSubtract = reactiveData.selectedMaxColIndex - reactiveData.selectedMinColIndex;
    //计算从哪个位置开始减少
    const startColIndexToSubtract = reactiveData.selectedMaxColIndex + 1;
    console.log(colCountToSubtract, startColIndexToSubtract, props.colCount - colCountToSubtract);
    //减少后的实际列数
    const restColCount = props.colCount - colCountToSubtract;
    const map = new Map();
    for (let k = startColIndexToSubtract; k < restColCount; k++) {
      const matchedCurRowCells = reactiveData.tabData.filter(item => item.colIndex === k);
      if (matchedCurRowCells && matchedCurRowCells.length > 0) {
        map.set(k - colCountToSubtract, matchedCurRowCells);
      }
    }

    map.forEach((value, key) => {
      console.log(value, "value");
      value.forEach(item => {
        item.colIndex = key;
      });
    });

    //如果构成造成行数减小，那么行的rowSpan将设置为1
    if (allMatchedItems && allMatchedItems.length > 0) {
      allMatchedItems.forEach(item => {
        item.colSpan = 1;
      });
      console.log("行span设置为1无效？", allMatchedItems);
    }

    const mergeIndices = [];
    for (let s = reactiveData.selectedMinColIndex; s <= reactiveData.selectedMaxColIndex; s++) {
      mergeIndices.push(s);
    }
    mergeCellWidth(mergeIndices);

    reactiveData.isToChangeColByNoneUI = true;
    reactiveData.myColCount = restColCount;
    //计算更新选择框
    reactiveData.selectedMaxColIndex = reactiveData.selectedMaxColIndex - colCountToSubtract;
    // console.log(this.itemComponent.rowCount,restRowCount);
  }
}
//拆分单元格用的小逻辑，批量更新单元格的列索引和列跨数
function changeItemColIndexAndSpan(items:any) {
  if (items?.size > 0) {
    items.forEach((value, key) => {
      key.colIndex = value.colIndex;
      key.colSpan = value.colSpan;
    });
  }
}
//拆分单元格用的小逻辑，批量更新单元格的行索引和行跨数
function changeItemRowIndexAndSpan(items:any) {
  if (items?.size > 0) {
    items.forEach((value, key) => {
      key.rowIndex = value.rowIndex;
      key.rowSpan = value.rowSpan;
    });
  }
}
//拆分单元格，总体思路是先拆分列，再拆分行。doSplitRowOrColumn方法执行拆分列的逻辑，如果行也要拆分在doSplitRowOrColumn方法中调用doSplitRow的逻辑
function doSplitRowOrColumn(splitRowCount:any, splitColCount:any) {
  isNeedUpateTableDataArr2.value=false;
  console.log(splitRowCount, splitColCount, "要拆分单元格了", reactiveData.tabData);
  if (Number.isNaN(splitColCount) || Number.isNaN(splitRowCount)) {
    //todo 都没有一些错误提示框，可采用el-modal实现
    isNeedUpateTableDataArr2.value=true;
    return;
  }

  if (splitRowCount === 1 && splitColCount === 1) {
    //本身选择一个，拆分目标为1行1列，相当于不用做拆分
    isNeedUpateTableDataArr2.value=true;
    return;
  }

  //判断是选中了1个单元格还是多个，如果选择多个，则不支持拆分
  //原理：点击的那个单元格，会出现在最终选择区域的四个角点之一的位置处。
  const isSelectedMultiCells = reactiveData.selectedMaxRowIndex > reactiveData.pickedRowIndex + reactiveData.pickedRowSpan || reactiveData.selectedMaxColIndex > reactiveData.pickedColIndex + reactiveData.pickedColSpan || reactiveData.selectedMinRowIndex < reactiveData.pickedRowIndex || reactiveData.selectedMinColIndex < reactiveData.pickedColIndex;
  if (isSelectedMultiCells) {
    console.warn("选择了多个单元格,无法拆分");
    isNeedUpateTableDataArr2.value=true;
    return;
  }

  //计算由于拆分当前单元格，由于列拆分，而制造的总的单元格数。例如，当前单元格跨3列，被拆分为了2列，此时的制造总单元格为其最小公倍数6
  const newSelectedColSpanCount = lcm(reactiveData.pickedColSpan, splitColCount);
  const newSelectedRowSpanCount = lcm(reactiveData.pickedRowSpan, splitRowCount);

  const addColCount = newSelectedColSpanCount - reactiveData.pickedColSpan;//如果跨3列，被拆分成了3列，最小公倍数是3。因此，此时无需新增列
  const addRowCount = newSelectedRowSpanCount - reactiveData.pickedRowSpan;

  const everyNewCreateDataColSpan = newSelectedColSpanCount / splitColCount;
  if (!Number.isInteger(everyNewCreateDataColSpan)) {
    isNeedUpateTableDataArr2.value=true;
    throw new Error("最小公倍数逻辑异常，因为没有被整除" + everyNewCreateDataColSpan);
  }

  //计算拆分出来的内容的宽度
  let selectedTotalColWidth = 0;
  for (let i = reactiveData.selectedMinColIndex; i <= reactiveData.selectedMaxColIndex; i++) {
    selectedTotalColWidth += reactiveData.columnWidths[i];
  }
  const splitEveryCellWidth = selectedTotalColWidth / newSelectedColSpanCount;

  //最后需要统一处理的对象，放置频繁触发响应式，且避免索引和跨数变更，导致的参照改变，而引发的潜在异常。
  let curCellData;//需要将colSpan设置为everyNewCreateDataColSpan
  const newCreatedData = [];
  const cellRecordsForFullIn = new Map();
  const cellRecordsForLeftIntersectedWith = new Map();
  const cellRecordsForRightIntersectedWith = new Map();
  const cellRecordsForFullOuter = new Map();
  const cellRecordsForFullRight = new Map();

  if (splitColCount > 1) {
    //先处理列拆分吧，暂不处理行拆分。
    for (let i = 0; i < props.rowCount; i++) {
      //无论哪次都要进行执行的，收集完全右侧的内容
      //当列数发生变化的时候才执行下面的调整右侧的colIndex
      // const rightCells=this.tabData.filter(item=>item.rowIndex===i&&item.colIndex>this.selectedMaxColIndex&&item.colIndex<this.colCount);
      //采用这种方式，目的是：必须右侧看不到的内容既然存在，必须也跟着更新，不然会看到内容区会多出来非视觉区的其他对象了。
      if (newSelectedColSpanCount > reactiveData.pickedColSpan) {
        const rightCells = reactiveData.tabData.filter(item => item.rowIndex === i && item.colIndex > reactiveData.selectedMaxColIndex);
        if (rightCells && rightCells.length > 0) {
          rightCells.forEach(item => {
            if (!cellRecordsForFullRight.has(item)) {
              const newColIndex = item.colIndex + addColCount;
              cellRecordsForFullRight.set(item, {
                colSpan: item.colSpan,
                colIndex: newColIndex,
              });
            }
          })
        }
      }

      //i在选择的水平段范围时，只执行初次。此时selectedMinRowIndex就等于pickedRowIndex了，pickedMaxRowIndex等于this.pickedRowIndex+this.pickedRowSpan-1
      if (i === reactiveData.pickedRowIndex) {
        //获取该陀合并后的数据item
        curCellData = reactiveData.tabData.filter(item => item.rowIndex === reactiveData.pickedRowIndex && item.colIndex === reactiveData.pickedColIndex);
        for (let m = reactiveData.pickedColIndex; m < reactiveData.pickedColIndex + newSelectedColSpanCount; m += everyNewCreateDataColSpan) {
          if (m === reactiveData.pickedColIndex) {
            continue;
          }
          newCreatedData.push({
            id: getRandomCode(8),
            component: "MCTextContainer",
            rowIndex: i,
            colIndex: m,
            rowSpan: reactiveData.pickedRowSpan,
            colSpan: everyNewCreateDataColSpan
          });
        }
        continue;
      }
      if (i > reactiveData.pickedRowIndex && i <= reactiveData.pickedRowIndex + reactiveData.pickedRowSpan - 1) {
        continue;//为了确保该范围内只执行1次。
      }

      //执行非水平选择段的处理逻辑
      //步骤1：先处理完全落入，minColIndex和maxColIndex之间的对象
      //当列数发生变化的时候才执行下面的调整涉及到的列信息
      if (newSelectedColSpanCount > reactiveData.pickedColSpan) {
        for (let j = reactiveData.selectedMinColIndex; j <= reactiveData.selectedMaxColIndex; j++) {
          const curCellsFullInSelectedColRange = reactiveData.tabData.filter(item => item.rowIndex === i && item.colIndex === j && (item.colSpan === 1 || item.colIndex + item.colSpan - 1 <= reactiveData.selectedMaxColIndex));

          if (curCellsFullInSelectedColRange && curCellsFullInSelectedColRange.length > 0) {
            const curNewColIndex = (j - reactiveData.pickedColIndex) * newSelectedColSpanCount / reactiveData.pickedColSpan + reactiveData.pickedColIndex;

            curCellsFullInSelectedColRange.forEach(item => {
              //其实如果正确逻辑的话，这里的每次循环的结果curNewColSpan的值都是一样的
              const curNewColSpan = item.colSpan * newSelectedColSpanCount / reactiveData.pickedColSpan;
              if (!cellRecordsForFullIn.has(item)) {
                cellRecordsForFullIn.set(item, {
                  colIndex: curNewColIndex,
                  colSpan: curNewColSpan,
                });
                if(i===4&&j===0){
                  console.log("完全处于列宽范围内的数据",curNewColIndex,curNewColSpan,curCellsFullInSelectedColRange);
                }
              }
            });
          }
        }
        //左侧存在部分相交的cells
        const cellsLeftIntersectedWithSelectedRange = reactiveData.tabData.filter(item => (item.colSpan !== 1 && item.rowIndex === i && item.colIndex < reactiveData.selectedMinColIndex) && (item.colIndex + item.colSpan - 1 >= reactiveData.selectedMinColIndex && item.colIndex + item.colSpan - 1 <= reactiveData.selectedMaxColIndex));
        if (cellsLeftIntersectedWithSelectedRange && cellsLeftIntersectedWithSelectedRange.length > 0) {
          //cellRecordsForLeftIntersectedWith
          cellsLeftIntersectedWithSelectedRange.forEach(item => {
            const colSpanCountToJustify = (item.colSpan + item.colIndex - 1) - reactiveData.pickedColIndex + 1;
            const restColSpan = item.colSpan - colSpanCountToJustify;
            if (restColSpan < 1) {
              throw new Error("逻辑异常，左侧的非选择区域的长度小于1，但仍被归为左侧存在相交");
            }
            const curNewSpan = restColSpan + colSpanCountToJustify * newSelectedColSpanCount / reactiveData.pickedColSpan;
            if (!cellRecordsForLeftIntersectedWith.has(item)) {
              cellRecordsForLeftIntersectedWith.set(item, {
                colIndex: item.colIndex,
                colSpan: curNewSpan,
              });
            }
          });
        }
        //单元格起于选择selectedMinColIndex，终点又大于selectedMinColIndex的单元格
        const cellsFullOutSelectedColRange = reactiveData.tabData.filter(item => (item.colSpan !== 1 && item.rowIndex === i && item.colIndex < reactiveData.selectedMinColIndex) && (item.colIndex + item.colSpan - 1 > reactiveData.selectedMaxColIndex));
        if (cellsFullOutSelectedColRange && cellsFullOutSelectedColRange.length > 0) {
          //cellRecordsForLeftIntersectedWith
          cellsFullOutSelectedColRange.forEach(item => {
            const restColSpan = item.colSpan - reactiveData.pickedColSpan;
            if (restColSpan < 1) {
              throw new Error("逻辑异常，左侧的非选择区域的长度小于1，但仍被归为左侧存在相交");
            }
            const curNewSpan = restColSpan + newSelectedColSpanCount;
            if (!cellRecordsForFullOuter.has(item)) {
              cellRecordsForFullOuter.set(item, {
                colIndex: item.colIndex,
                colSpan: curNewSpan,
              });
            }
          });
        }
        //右侧存在部分相交的cells
        const cellsRightIntersectedWithSelectedRange = reactiveData.tabData.filter(item => (item.colSpan !== 1 && item.rowIndex === i && item.colIndex >= reactiveData.selectedMinColIndex && item.colIndex <= reactiveData.selectedMaxColIndex) && (item.colIndex + item.colSpan - 1 > reactiveData.selectedMaxColIndex));
        if (cellsRightIntersectedWithSelectedRange && cellsRightIntersectedWithSelectedRange.length > 0) {
          cellsRightIntersectedWithSelectedRange.forEach(item => {
            const colSpanCountToJustify = reactiveData.selectedMaxColIndex - item.colIndex + 1;
            const restColSpan = item.colSpan - colSpanCountToJustify;
            if (restColSpan < 1) {
              throw new Error("逻辑异常，右侧的非选择区域的长度小于1，但仍被归为右侧存在相交");
            }
            const curNewSpan = restColSpan + colSpanCountToJustify * newSelectedColSpanCount / reactiveData.pickedColSpan;
            //注意colIndex和左侧相交相比，此处要发生变化。
            const curNewColIndex = (item.colIndex - reactiveData.pickedColIndex) * newSelectedColSpanCount / reactiveData.pickedColSpan + reactiveData.pickedColIndex;
            if (!cellRecordsForRightIntersectedWith.has(item)) {
              cellRecordsForRightIntersectedWith.set(item, {
                colIndex: curNewColIndex,
                colSpan: curNewSpan,
              });
            }
          })
        }
      }
    }
    //更新上述数据
    if (curCellData?.length > 0) {
      curCellData.forEach(item => {
        item.colSpan = everyNewCreateDataColSpan;
      });
    }
    if (newCreatedData?.length > 0) {
      newCreatedData.forEach(item => {
        reactiveData.tabData.push(item);
      });
    }
    console.log("开始打印完全纵向落入范围内的对象----------------------");
    if (cellRecordsForFullIn?.size > 0) {
      cellRecordsForFullIn.forEach((value, key) => {
        // key.colIndex = value.colIndex;
        // key.colSpan = value.colSpan;
        console.log(`原始位置rowIndex：${key.rowIndex}，原始colIndex：${key.colIndex}--原始rowSpan：${key.rowSpan}，原始colspan：${key.colSpan}----newColIndex:${value.colIndex},newColSpan:${value.colSpan}`)
        console.log(key);
      });
    }
    console.log("开始打印完全纵向落入范围内的对象----------------------");
    changeItemColIndexAndSpan(cellRecordsForFullIn);
    changeItemColIndexAndSpan(cellRecordsForLeftIntersectedWith);
    changeItemColIndexAndSpan(cellRecordsForRightIntersectedWith);
    changeItemColIndexAndSpan(cellRecordsForFullOuter);
    changeItemColIndexAndSpan(cellRecordsForFullRight);

    //还要记得更新总的行列数。
    splitCellWidth(splitEveryCellWidth, addColCount);
    reactiveData.isToChangeColByNoneUI = true;
    reactiveData.myColCount = props.colCount + addColCount;
  }
  console.log("splitRowCount, splitColCount, curCellData, newCreatedData, everyNewCreateDataColSpan",splitRowCount, splitColCount, curCellData, newCreatedData, everyNewCreateDataColSpan);
  splitRowCount === 1 ? clearCurSelectedCells() : doSplitRow(splitRowCount, splitColCount, curCellData, newCreatedData, everyNewCreateDataColSpan);
  if(splitRowCount===1){
    isNeedUpateTableDataArr2.value=true;
  }
}
function doSplitRow(splitRowCount:any, splitColCount:any, curCellData:any, newCreatedData:any, newPickedColSpan:any) {
  isNeedUpateTableDataArr2.value=false;
  console.log("执行行拆分逻辑了", splitColCount, reactiveData.myColCount);
  if (splitRowCount === 1) {
    clearCurSelectedCells();
    isNeedUpateTableDataArr2.value=true;
    return;
  }
  const isColHasSplit = splitColCount > 1;
  //最大框选到的colMaxIndex要修改。其实pickedColSpan也要改，
  if (isColHasSplit) {//如果大于1，则newCreatedData势必有值，也就是上边拆分列时，多拆出来对象时，那么它最大的列选择索引才发生变化。
    reactiveData.pickedColSpan = newPickedColSpan;
    const maxRightNewCreatedCell = newCreatedData.sort((x, y) => x.colIndex > y.colIndex ? -1 : x.colIndex < y.colIndex ? -1 : 0)[0];
    console.log("报错前打印newCreatedData",newCreatedData);
    console.log(newCreatedData, maxRightNewCreatedCell, "maxRightNewCreatedCell", maxRightNewCreatedCell.colIndex + newPickedColSpan - 1);
    reactiveData.selectedMaxColIndex = maxRightNewCreatedCell.colIndex + newPickedColSpan - 1;
    console.log("最右侧选择的列索引", reactiveData.selectedMaxColIndex);
  }
  const newSelectedRowSpanCount = lcm(reactiveData.pickedRowSpan, splitRowCount);
  const addRowCount = newSelectedRowSpanCount - reactiveData.pickedRowSpan;

  const everyNewCreateDataRowSpan = newSelectedRowSpanCount / splitRowCount;
  if (!Number.isInteger(everyNewCreateDataRowSpan)) {
    isNeedUpateTableDataArr2.value=true;
    throw new Error("最小公倍数逻辑异常，因为没有被整除" + everyNewCreateDataRowSpan);
  }

  //计算拆分出来的内容的高度，拆分出来的如果有40高度以下的情况，需要额外处理
  let selectedTotalRowHeight = 0;
  for (let i = reactiveData.selectedMinRowIndex; i <= reactiveData.selectedMaxRowIndex; i++) {
    selectedTotalRowHeight += reactiveData.rowHeights[i];
  }
  const splitEveryCellHeight = selectedTotalRowHeight / newSelectedRowSpanCount;
  //最后需要统一处理的对象，放置频繁触发响应式，且避免索引和跨数变更，导致的参照改变，而引发的潜在异常。
  // let curCellData;//需要将colSpan设置为everyNewCreateDataColSpan
  // const newCreatedData=[];
  console.log("everyNewCreateDataRowSpan", everyNewCreateDataRowSpan);
  const finalNewCreate = [];
  const cellRecordsForFullIn = new Map();
  const cellRecordsForLeftIntersectedWith = new Map();//这里指的就是top了
  const cellRecordsForRightIntersectedWith = new Map();//这里指的就是bottom了
  const cellRecordsForFullOuter = new Map();
  const cellRecordsForFullRight = new Map();
  console.log("thisTabData的值", reactiveData.tabData);
  if (!isColHasSplit) {
    //对应于curCellData是undefined的情况，此时newCreatedData也是空的
    curCellData = reactiveData.tabData.filter(item => item.rowIndex === reactiveData.pickedRowIndex && item.colIndex === reactiveData.pickedColIndex);
    for (let m = reactiveData.pickedRowIndex; m < reactiveData.pickedRowIndex + newSelectedRowSpanCount; m += everyNewCreateDataRowSpan) {
      if (m === reactiveData.pickedRowIndex) {
        continue;
      }
      finalNewCreate.push({
        id: getRandomCode(8),
        component: "MCTextContainer",
        colIndex: reactiveData.pickedColIndex,
        rowIndex: m,
        colSpan: reactiveData.pickedColSpan,
        rowSpan: everyNewCreateDataRowSpan
      });
    }
  } else {
    newCreatedData.forEach(item => {
      curCellData.push(item);//各列的内容都往待修改rowIndex和rowSpan的curCellData加
      //各个列的内容，再都水平切割
      for (let m = reactiveData.pickedRowIndex; m < reactiveData.pickedRowIndex + newSelectedRowSpanCount; m += everyNewCreateDataRowSpan) {
        if (m === reactiveData.pickedRowIndex) {
          continue;
        }
        finalNewCreate.push({
          id: getRandomCode(8),
          component: "MCTextContainer",
          colIndex: item.colIndex,
          rowIndex: m,
          colSpan: reactiveData.pickedColSpan,
          rowSpan: everyNewCreateDataRowSpan
        });
      }
    });
    //把最原始选择的区域的，经列切割后的最左侧列，拆出来新的项放到finalNewCreate，并最终push到最终结果中
    for (let m = reactiveData.pickedRowIndex; m < reactiveData.pickedRowIndex + newSelectedRowSpanCount; m += everyNewCreateDataRowSpan) {
      if (m === reactiveData.pickedRowIndex) {
        continue;
      }
      finalNewCreate.push({
        id: getRandomCode(8),
        component: "MCTextContainer",
        colIndex: reactiveData.pickedColIndex,
        rowIndex: m,
        colSpan: reactiveData.pickedColSpan,
        rowSpan: everyNewCreateDataRowSpan
      });
    }
    console.log("列的curCellData，newCreatedData，finalNewCreate", curCellData, newCreatedData, finalNewCreate);
  }

  for (let i = 0; i < reactiveData.myColCount; i++) {
    if (newSelectedRowSpanCount > reactiveData.pickedRowSpan) {//需要增添行的时候
      const bottomCells = reactiveData.tabData.filter(item => item.colIndex === i && item.rowIndex > reactiveData.selectedMaxRowIndex);
      if (bottomCells && bottomCells.length > 0) {
        bottomCells.forEach(item => {
          if (!cellRecordsForFullRight.has(item)) {
            const newRowIndex = item.rowIndex + addRowCount;
            cellRecordsForFullRight.set(item, {
              rowSpan: item.rowSpan,
              rowIndex: newRowIndex,
            });
          }
        })
      }
    }

    if (i >= reactiveData.pickedColIndex && i <= reactiveData.selectedMaxColIndex) {
      continue;//为了确保该范围内只执行1次。
    }

    //执行非水平选择段的处理逻辑
    //步骤1：先处理完全落入，minColIndex和maxColIndex之间的对象
    //当列数发生变化的时候才执行下面的调整涉及到的列信息
    if (newSelectedRowSpanCount > reactiveData.pickedRowSpan) {
      for (let j = reactiveData.selectedMinRowIndex; j <= reactiveData.selectedMaxRowIndex; j++) {
        console.log("是否搜索前已经出现了undefined", i, j, reactiveData.tabData.filter(item => item.colIndex === undefined && item.colSpan === undefined));
        const curCellsFullInSelectedColRange = reactiveData.tabData.filter(item => item.colIndex === i && item.rowIndex === j && (item.rowSpan === 1 || item.rowIndex + item.rowSpan - 1 <= reactiveData.selectedMaxRowIndex));

        if (curCellsFullInSelectedColRange && curCellsFullInSelectedColRange.length > 0) {
          const curNewColIndex = (j - reactiveData.pickedRowIndex) * newSelectedRowSpanCount / reactiveData.pickedRowSpan + reactiveData.pickedRowIndex;
          console.log(curCellsFullInSelectedColRange, i, j, "当前收集到的curCellsFullInSelectedColRange", reactiveData.pickedColIndex, reactiveData.selectedMaxColIndex);
          curCellsFullInSelectedColRange.forEach(item => {
            //其实如果正确逻辑的话，这里的每次循环的结果curNewColSpan的值都是一样的
            //防止加入到curData里的数据再次加入到fullin对象中
            if (!curCellData.includes(item)) {
              const curNewColSpan = item.rowSpan * newSelectedRowSpanCount / reactiveData.pickedRowSpan;
              if (!cellRecordsForFullIn.has(item)) {
                cellRecordsForFullIn.set(item, {
                  rowIndex: curNewColIndex,
                  rowSpan: curNewColSpan,
                });
                console.log(item, "当前收集到的curCellsFullInSelectedColRange的itemitem", curNewColSpan);
              }
            }
          });
        }
      }
      //左侧存在部分相交的cells
      const cellsLeftIntersectedWithSelectedRange = reactiveData.tabData.filter(item => (item.rowSpan !== 1 && item.colIndex === i && item.rowIndex < reactiveData.selectedMinRowIndex) && (item.rowIndex + item.rowSpan - 1 >= reactiveData.selectedMinRowIndex && item.rowIndex + item.rowSpan - 1 <= reactiveData.selectedMaxRowIndex));

      if (cellsLeftIntersectedWithSelectedRange && cellsLeftIntersectedWithSelectedRange.length > 0) {
        //cellRecordsForLeftIntersectedWith
        cellsLeftIntersectedWithSelectedRange.forEach(item => {
          const rowSpanCountToJustify = (item.rowSpan + item.rowIndex - 1) - reactiveData.pickedRowIndex + 1;
          const restRowSpan = item.rowSpan - rowSpanCountToJustify;
          if (restRowSpan < 1) {
            throw new Error("逻辑异常，左侧的非选择区域的长度小于1，但仍被归为左侧存在相交");
          }
          const curNewSpan = restRowSpan + rowSpanCountToJustify * newSelectedRowSpanCount / reactiveData.pickedRowSpan;
          if (!cellRecordsForLeftIntersectedWith.has(item)) {
            cellRecordsForLeftIntersectedWith.set(item, {
              rowIndex: item.rowIndex,
              rowSpan: curNewSpan,
            });
          }
        });
      }
      //单元格起于选择selectedMinColIndex，终点又大于selectedMinColIndex的单元格
      const cellsFullOutSelectedColRange = reactiveData.tabData.filter(item => (item.rowSpan !== 1 && item.colIndex === i && item.rowIndex < reactiveData.selectedMinRowIndex) && (item.rowIndex + item.rowSpan - 1 > reactiveData.selectedMaxRowIndex));
      if (cellsFullOutSelectedColRange && cellsFullOutSelectedColRange.length > 0) {
        //cellRecordsForLeftIntersectedWith
        cellsFullOutSelectedColRange.forEach(item => {
          const restRowSpan = item.rowSpan - reactiveData.pickedRowSpan;
          if (restRowSpan < 1) {
            throw new Error("逻辑异常，左侧的非选择区域的长度小于1，但仍被归为左侧存在相交");
          }
          const curNewSpan = restRowSpan + newSelectedRowSpanCount;
          if (!cellRecordsForFullOuter.has(item)) {
            cellRecordsForFullOuter.set(item, {
              rowIndex: item.rowIndex,
              rowSpan: curNewSpan,
            });
          }
        });
      }
      //右侧存在部分相交的cells
      const cellsRightIntersectedWithSelectedRange = reactiveData.tabData.filter(item => (item.rowSpan !== 1 && item.colIndex === i && item.rowIndex >= reactiveData.selectedMinRowIndex && item.rowIndex <= reactiveData.selectedMaxRowIndex) && (item.rowIndex + item.rowSpan - 1 > reactiveData.selectedMaxRowIndex));
      if (cellsRightIntersectedWithSelectedRange && cellsRightIntersectedWithSelectedRange.length > 0) {
        cellsRightIntersectedWithSelectedRange.forEach(item => {
          const rowSpanCountToJustify = reactiveData.selectedMaxRowIndex - item.rowIndex + 1;
          const restRowSpan = item.rowSpan - rowSpanCountToJustify;
          if (restRowSpan < 1) {
            throw new Error("逻辑异常，右侧的非选择区域的长度小于1，但仍被归为右侧存在相交");
          }
          const curNewSpan = restRowSpan + rowSpanCountToJustify * newSelectedRowSpanCount / reactiveData.pickedRowSpan;
          //注意colIndex和左侧相交相比，此处要发生变化。
          const curNewColIndex = (item.rowIndex - reactiveData.pickedRowIndex) * newSelectedRowSpanCount / reactiveData.pickedRowSpan + reactiveData.pickedRowIndex;
          if (!cellRecordsForRightIntersectedWith.has(item)) {
            cellRecordsForRightIntersectedWith.set(item, {
              rowIndex: curNewColIndex,
              rowSpan: curNewSpan,
            });
          }
        })
      }
    }
  }
  // console.log(cellRecordsForFullIn,curCellData,finalNewCreate,"左右两侧收集到的map",this.pickedColIndex,this.pickedColSpan);
  //更新上述数据
  if (curCellData?.length > 0) {
    curCellData.forEach(item => {
      // console.log("curSpan打印OOOLD",item.rowSpan);
      item.rowSpan = everyNewCreateDataRowSpan;
      // console.log("curSpan打印",item.rowSpan,item);
    });
  }
  if (finalNewCreate?.length > 0) {
    finalNewCreate.forEach(item => {
      reactiveData.tabData.push(item);
    });
  }
  changeItemRowIndexAndSpan(cellRecordsForFullIn);
  changeItemRowIndexAndSpan(cellRecordsForLeftIntersectedWith);
  changeItemRowIndexAndSpan(cellRecordsForRightIntersectedWith);
  changeItemRowIndexAndSpan(cellRecordsForFullOuter);

  cellRecordsForFullRight.forEach((value,key)=>{
    console.log(key.id,key.component,key.rowIndex,key.colIndex,key.rowSpan,key.colSpan,"key.rowIndex,key.colIndex,key.rowSpan,key.colSpan",value.rowIndex,value.rowSpan);
  });
  changeItemRowIndexAndSpan(cellRecordsForFullRight);

  //还要记得更新总的行列数。
  splitCellHeight(splitEveryCellHeight, addRowCount);
  reactiveData.isToChangeRowByNoneUI = true;
  reactiveData.myRowCount = props.rowCount + addRowCount;
  isNeedUpateTableDataArr2.value=true;
  clearCurSelectedCells();
  // const isHasYouZhi=reactiveData.tabData.filter(item=>item.rowIndex==13&&item.colIndex==0&&item.rowSpan==1&&item.colSpan==4);
  // if(isHasYouZhi&&isHasYouZhi.length>0){
  //   console.log(isHasYouZhi,"isHasYouZhi");
  // }
}
//删除所在行
function doDeleteLocatedRow() {
  //考虑到有可能要支持选择多行。
  if (Number.isNaN(reactiveData.selectedMaxRowIndex)) {
    return;//保险起见，应该不会遇到这种
  }
  //需要减少的行数，这里看出来和合并单元格的不同了，这里如果只选择一行，其实总行数还是要减1，而合并单元格就不是这样了
  const rowCountToSubtract = reactiveData.selectedMaxRowIndex - reactiveData.selectedMinRowIndex + 1;
  //计算从哪个位置开始减少
  const startRowIndexToSubtract = reactiveData.selectedMaxRowIndex + 1;
  //减少后的实际行数
  const restRowCount = props.rowCount - rowCountToSubtract;
  const cellsToDecreaseRowSpan = new Map();
  const cellsToDecreaseRowSpanAndColIndex = new Map();


  for (let i = reactiveData.selectedMinRowIndex; i <= reactiveData.selectedMaxRowIndex; i++) {//合并后，让他不再被选中，因为之前的selectedMinRowIndex会自动更新，也不要有操作柄
    for (let j = 0; j < props.colCount; j++) {
      //移除当前ij单元格下的多个项
      let matchedIndex;
      do {
        matchedIndex = reactiveData.tabData.findIndex(item => item.rowIndex === i && item.colIndex === j && (item.rowSpan === 1 || item.rowIndex + item.rowSpan - 1 <= reactiveData.selectedMaxRowIndex));
        if (matchedIndex === -1) {
          break;
        }
        reactiveData.tabData.splice(matchedIndex, 1);
      }
      while (matchedIndex !== -1)

      let matchedIndexForCellToDecreaseRowSpanAndCol = reactiveData.tabData.filter(item => item.rowIndex === i && item.colIndex === j && (item.rowSpan !== 1 && item.rowIndex + item.rowSpan - 1 > reactiveData.selectedMaxRowIndex));

      matchedIndexForCellToDecreaseRowSpanAndCol.forEach(item => {
        //单元格最右侧多出来框选区域有多少用这个算：item.colSpan+item.colIndex-1-(this.selectedMaxColIndex-j);
        const spanToRemove = reactiveData.selectedMaxRowIndex - i + 1;
        const restColSpan = item.rowSpan - spanToRemove;
        if (restColSpan < 1) {
          throw new Error("算法逻辑出了异常");
        }
        // const newColIndex=item.colSpan+
        if (!cellsToDecreaseRowSpanAndColIndex.has(item)) {
          cellsToDecreaseRowSpanAndColIndex.set(item, restColSpan);
        }
      });

      let matchedIndexForCellToDecreaseRowSpan = reactiveData.tabData.filter(item => (item.colIndex === j && item.rowIndex < i) && (item.rowSpan !== 1 && item.rowIndex + item.rowSpan - 1 >= i));
      if (matchedIndexForCellToDecreaseRowSpan && matchedIndexForCellToDecreaseRowSpan.length > 0) {
        matchedIndexForCellToDecreaseRowSpan.forEach((item) => {
          //计算一下移出所选列跨数后，当前item的colSpan值
          let removeSpanCount;
          if (item.rowSpan + item.rowIndex - 1 >= reactiveData.selectedMaxRowIndex) {
            // removeSpanCount=this.selectedMaxColIndex-this.selectedMinColIndex+1;
            //为了保险起见，减j而不是selectedMinColIndex
            removeSpanCount = reactiveData.selectedMaxRowIndex - i + 1;
          } else {
            removeSpanCount = (item.rowSpan + item.rowIndex - 1) - i + 1;
          }
          const restSpanCount = item.rowSpan - removeSpanCount;
          if (restSpanCount < 1) {
            throw new Error("算法逻辑出了异常");
          }
          if (!cellsToDecreaseRowSpanAndColIndex.has(item) && !cellsToDecreaseRowSpan.has(item)) {
            cellsToDecreaseRowSpan.set(item, restSpanCount);
          }
        });
      }
    }
  }

  //更新其他大于删除所行的对象
  const map = new Map();
  for (let k = startRowIndexToSubtract; k < props.rowCount; k++) {
    const matchedCurRowCells = reactiveData.tabData.filter(item => item.rowIndex === k);
    if (matchedCurRowCells && matchedCurRowCells.length > 0) {
      map.set(k - rowCountToSubtract, matchedCurRowCells);
    }
  }

  map.forEach((value, key) => {
    console.log(value, "value");
    value.forEach(item => {
      item.rowIndex = key;
    });
  });

  console.log(cellsToDecreaseRowSpan, cellsToDecreaseRowSpanAndColIndex, "2个map");
  cellsToDecreaseRowSpan.forEach((value, key) => {
    key.rowSpan = value;
  });

  cellsToDecreaseRowSpanAndColIndex.forEach((value, key) => {
    key.rowSpan = value;
  });

  const mergeIndices = [];
  for (let s = reactiveData.selectedMinRowIndex; s <= reactiveData.selectedMaxRowIndex; s++) {
    mergeIndices.push(s);
  }
  removeCellHeight(mergeIndices);
  reactiveData.isToChangeRowByNoneUI = true;
  reactiveData.myRowCount = restRowCount;
  //计算更新选择框
  clearCurSelectedCells();

  //todo 只做数据的挪位置，而高度索引不变的做法看起来很奇怪，这里最好再实现一个高度联动。
  //todo 如果删除的行左侧有合并列单元格的对象。此时如何处理？
}
//删除所在列
function doDeleteLocatedCol() {
  console.log("删除所在列", Number.isNaN(reactiveData.selectedMaxColIndex));
  //考虑到有可能要支持选择多行。
  if (Number.isNaN(reactiveData.selectedMaxColIndex)) {
    return;//保险起见，应该不会遇到这种
  }
  //需要减少的列数
  const colCountToSubtract = reactiveData.selectedMaxColIndex - reactiveData.selectedMinColIndex + 1;
  //计算从哪个位置开始减少
  const startColIndexToSubtract = reactiveData.selectedMaxColIndex + 1;
  //减少后的实际列数
  const restColCount = props.colCount - colCountToSubtract;
  const cellsToDecreaseRowSpan = new Map();
  const cellsToDecreaseRowSpanAndColIndex = new Map();


  for (let i = 0; i < props.rowCount; i++) {//合并后，让他不再被选中，因为之前的selectedMinRowIndex会自动更新，也不要有操作柄
    for (let j = reactiveData.selectedMinColIndex; j <= reactiveData.selectedMaxColIndex; j++) {
      //移除当前ij单元格下的多个项，可做直接移出的
      let matchedIndex;
      do {
        matchedIndex = reactiveData.tabData.findIndex(item => item.rowIndex === i && item.colIndex === j && (item.colSpan === 1 || item.colIndex + item.colSpan - 1 <= reactiveData.selectedMaxColIndex));//只针对最基础单元格的才删除
        if (matchedIndex === -1) {
          break;
        }
        reactiveData.tabData.splice(matchedIndex, 1);
      }
      while (matchedIndex !== -1)

      //单元格存在列span，恰巧单元格的起始colIndex等于当前的j，且colspan的最右侧，已经超出的框选的maxSelectedColIndex时，其实确保这个就可以了item=>item.rowIndex===i&&item.colIndex===j，为了保险起见增加其他判断条件
      //要减少colspan的值，colIndex在这种情况下保持不变

      let matchedIndexForCellToDecreaseRowSpanAndCol = reactiveData.tabData.filter(item => item.rowIndex === i && item.colIndex === j && (item.colSpan !== 1 && item.colIndex + item.colSpan - 1 > reactiveData.selectedMaxColIndex));

      matchedIndexForCellToDecreaseRowSpanAndCol.forEach(item => {
        //单元格最右侧多出来框选区域有多少用这个算：item.colSpan+item.colIndex-1-(this.selectedMaxColIndex-j);
        const spanToRemove = reactiveData.selectedMaxColIndex - j + 1;
        const restColSpan = item.colSpan - spanToRemove;
        if (restColSpan < 1) {
          throw new Error("算法逻辑出了异常");
        }
        // const newColIndex=item.colSpan+
        if (!cellsToDecreaseRowSpanAndColIndex.has(item)) {
          cellsToDecreaseRowSpanAndColIndex.set(item, restColSpan);
        }
      });

      //单元格存在列span，且span后的最右侧在整个框选范围的左内侧，仅修改colspan的值即可
      let matchedIndexForCellToDecreaseRowSpan = reactiveData.tabData.filter(item => (item.rowIndex === i && item.colIndex < j) && (item.colSpan !== 1 && item.colIndex + item.colSpan - 1 >= j));

      if (matchedIndexForCellToDecreaseRowSpan && matchedIndexForCellToDecreaseRowSpan.length > 0) {
        matchedIndexForCellToDecreaseRowSpan.forEach((item) => {
          //计算一下移出所选列跨数后，当前item的colSpan值
          let removeSpanCount;
          if (item.colSpan + item.colIndex - 1 >= reactiveData.selectedMaxColIndex) {
            // removeSpanCount=this.selectedMaxColIndex-this.selectedMinColIndex+1;
            //为了保险起见，减j而不是selectedMinColIndex
            removeSpanCount = reactiveData.selectedMaxColIndex - j + 1;
          } else {
            removeSpanCount = (item.colSpan + item.colIndex - 1) - j + 1;
          }
          const restSpanCount = item.colSpan - removeSpanCount;
          if (restSpanCount < 1) {
            throw new Error("算法逻辑出了异常");
          }
          if (!cellsToDecreaseRowSpanAndColIndex.has(item) && !cellsToDecreaseRowSpan.has(item)) {
            cellsToDecreaseRowSpan.set(item, restSpanCount);
          }
        });
      }
    }
  }

  //更新其他大于删除所行的对象。todo这种做法，会使得我重新调整行列数据，尤其调大时，会导致原来的对象又出来了，其实还好。符合主体逻辑
  //todo 这种做法，会使得我重新调整行列数据，尤其调大时，会导致原来的对象又出来了，其实还好。符合主体逻辑
  const map = new Map();
  for (let k = startColIndexToSubtract; k < props.colCount; k++) {
    const matchedCurRowCells = reactiveData.tabData.filter(item => item.colIndex === k);
    if (matchedCurRowCells && matchedCurRowCells.length > 0) {
      map.set(k - colCountToSubtract, matchedCurRowCells);
    }
  }

  map.forEach((value, key) => {
    console.log(value, "value");
    value.forEach(item => {
      item.colIndex = key;
    });
  });
  console.log(cellsToDecreaseRowSpan, cellsToDecreaseRowSpanAndColIndex, "2个map");
  cellsToDecreaseRowSpan.forEach((value, key) => {
    key.colSpan = value;
  });

  cellsToDecreaseRowSpanAndColIndex.forEach((value, key) => {
    key.colSpan = value;
  });

  const removeIndices = [];
  for (let s = reactiveData.selectedMinColIndex; s <= reactiveData.selectedMaxColIndex; s++) {
    removeIndices.push(s);
  }
  removeCellWidth(removeIndices);
  reactiveData.isToChangeColByNoneUI = true;
  reactiveData.myColCount = restColCount;
  //计算更新选择框
  clearCurSelectedCells();

  //todo 只做数据的挪位置，而高度索引不变的做法看起来很奇怪，这里最好再实现一个高度联动。
  //todo 如果删除的行左侧有合并列单元格的对象。此时如何处理？
}
//#endregion 具体实现拆分合并、删除行、删除列
</script>

<style scoped lang="scss">
.wrap {
  position: relative;

  .table {
    width: 100%;
    table-layout: fixed;

    .flex-td {
      word-wrap: break-word !important;
    }
  }
}

.resizable-cell {
  position: relative;
}

th, td {
  //overflow: hidden;
  box-sizing: border-box;
  border: 1px solid #ccc;
  text-align: left;
  position: relative;
}

td:hover {
  cursor: cell;
}

td.selected-cell {
  border: 1px solid #155bd4 !important;
  background-color: rgba(30, 144, 255, 0.5) !important;
}

.no-border {
  border: none !important;
}

.resizable-cell {
  position: relative;
}

.row-resizer {
  width: 100%;
  height: 1px;
  cursor: ns-resize;
  //background-color: #999;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 998;
}

.row-resizer:hover {
  background-color: #0000ff;
}

.col-resizer {
  width: 1px;
  //height: 4000px;
  height: 100%;
  cursor: ew-resize;
  //background-color: #999;
  position: absolute;
  //top: -2000px;
  right: 0;
  bottom: 0;
  z-index: 998;
}

.col-resizer:hover {
  background-color: #0000ff;
}
</style>