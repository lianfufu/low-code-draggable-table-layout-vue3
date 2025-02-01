<template>
  <div
      class="col-resizer"
      v-if="index2 < colCount - 1"
      @dragstart.stop
      @drag.stop
      @dragend.stop
      @mousedown="startResizingColumn(item2,index2, index)"
  ></div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const isResizingColumn=ref<boolean>(false);
const resizingColumnIndex=ref<any>(null);
const initialX=ref<number>(0);
const pickedCellX=ref<number>(0);
const props=defineProps({
  item2:{
    type:Array,
    default:()=>([])
  },
  index:{
    type:Number,
    default:0
  },
  index2:{
    type:Number,
    default:0
  },
  colCount:{
    type:Number,
    default:0
  },
  parentWidth:{
    type:Number,
    default:430
  },
  columnWidths:{
    type:Array,
    default:()=>([])
  }
});

//和操作表格线操作柄相关的写法
function getPercentColumnWidth(numWidth:number){
  return 100*numWidth/props.parentWidth;
}
function getRealWidthOfColumn(strWidth:string){
  return Number.parseFloat(strWidth)*props.parentWidth/100;
}
function startResizingColumn(item2:any,columnIndex:number, rowIndex:number) {
  event.stopPropagation(); // 阻止事件冒泡到draggable组件
  event.preventDefault();  // 阻止默认行为，以防万一
  isResizingColumn.value = true;
  const colSpan=item2[0]?item2[0].colSpan:1;
  resizingColumnIndex.value = columnIndex+colSpan-1;
  initialX.value = event.clientX;
  // console.log(event);
  console.log(initialX.value,"initialX");
  // 保存当前列的初始宽度，用于后续计算
  // this.initialColumnWidth = this.columnWidths[columnIndex];
  document.addEventListener('mousemove', resizeColumn);
  document.addEventListener('mouseup', stopResizingColumn);
}
function resizeColumn(event:any) {
  console.log(event,"没进来纵向调整");
  if (!isResizingColumn.value) return;
  const deltaX = event.clientX - initialX.value;
  // 调整列宽，确保最小宽度

  // const newWidth = Math.max(50, this.getRealWidthOfColumn(this.columnWidths[this.resizingColumnIndex]) + deltaX);
  const newWidth = getRealWidthOfColumn(props.columnWidths[resizingColumnIndex.value]) + deltaX;
  // console.log(deltaX,newWidth,"最新宽度");
  // 如果是非最后一列，需要调整相邻列的宽度
  if (resizingColumnIndex.value < props.columnWidths.length - 1) {
    const nextColumnWidth = getRealWidthOfColumn(props.columnWidths[resizingColumnIndex.value + 1]) - deltaX;

    console.log(deltaX,newWidth,nextColumnWidth);

    if(nextColumnWidth<0||newWidth<0){
      initialX.value = event.clientX;
      return;
    }

    props.columnWidths[resizingColumnIndex.value]=getPercentColumnWidth(newWidth);
    props.columnWidths[resizingColumnIndex.value + 1]=getPercentColumnWidth(nextColumnWidth);

    // // 确保相邻列的最小宽度
    // if (nextColumnWidth >= 50) {
    //   this.$set(this.columnWidths, this.resizingColumnIndex, this.getPercentColumnWidth(newWidth));
    //   this.$set(this.columnWidths, this.resizingColumnIndex + 1, this.getPercentColumnWidth(nextColumnWidth));
    // }
  } else {
    // 如果是最后一列，只调整当前列
    props.columnWidths[resizingColumnIndex.value]=getPercentColumnWidth(newWidth);
  }
  initialX.value = event.clientX;
}
function stopResizingColumn() {
  isResizingColumn.value = false;
  document.removeEventListener('mousemove', resizeColumn);
  document.removeEventListener('mouseup', stopResizingColumn);
}

// export default {
//   name: "ColumnResizer",
//   data(){
//     return{
//       isResizingColumn: false,
//       resizingColumnIndex: null,
//       initialX: 0,//控制拖拽柄拖拽位置的逻辑X
//       pickedCellX: 0,//控制选择表格单元格位置的初始逻辑X
//     }
//   },
//   props:{
//     item2:{
//       type:Array,
//       default:()=>([])
//     },
//     index:{
//       type:Number,
//       default:0
//     },
//     index2:{
//       type:Number,
//       default:0
//     },
//     colCount:{
//       type:Number,
//       default:0
//     },
//     parentWidth:{
//       type:Number,
//       default:430
//     },
//     columnWidths:{
//       type:Array,
//       default:()=>([])
//     }
//   },
//   methods:{
//     //和操作表格线操作柄相关的写法
//     getPercentColumnWidth(numWidth){
//       return 100*numWidth/this.parentWidth;
//     },
//     getRealWidthOfColumn(strWidth){
//       return Number.parseFloat(strWidth)*this.parentWidth/100;
//     },
//     startResizingColumn(item2,columnIndex, rowIndex) {
//       event.stopPropagation(); // 阻止事件冒泡到draggable组件
//       event.preventDefault();  // 阻止默认行为，以防万一
//       this.isResizingColumn = true;
//       const colSpan=item2[0]?item2[0].colSpan:1;
//       this.resizingColumnIndex = columnIndex+colSpan-1;
//       this.initialX = event.clientX;
//       // console.log(event);
//       console.log(this.initialX,"initialX");
//       // 保存当前列的初始宽度，用于后续计算
//       // this.initialColumnWidth = this.columnWidths[columnIndex];
//       document.addEventListener('mousemove', this.resizeColumn);
//       document.addEventListener('mouseup', this.stopResizingColumn);
//     },
//     resizeColumn(event) {
//       console.log(event,"没进来纵向调整");
//       if (!this.isResizingColumn) return;
//       const deltaX = event.clientX - this.initialX;
//       // 调整列宽，确保最小宽度
//
//       // const newWidth = Math.max(50, this.getRealWidthOfColumn(this.columnWidths[this.resizingColumnIndex]) + deltaX);
//       const newWidth = this.getRealWidthOfColumn(this.columnWidths[this.resizingColumnIndex]) + deltaX;
//       // console.log(deltaX,newWidth,"最新宽度");
//       // 如果是非最后一列，需要调整相邻列的宽度
//       if (this.resizingColumnIndex < this.columnWidths.length - 1) {
//         const nextColumnWidth = this.getRealWidthOfColumn(this.columnWidths[this.resizingColumnIndex + 1]) - deltaX;
//
//         console.log(deltaX,newWidth,nextColumnWidth);
//
//         if(nextColumnWidth<0||newWidth<0){
//           this.initialX = event.clientX;
//           return;
//         }
//
//         this.$set(this.columnWidths, this.resizingColumnIndex, this.getPercentColumnWidth(newWidth));
//         this.$set(this.columnWidths, this.resizingColumnIndex + 1, this.getPercentColumnWidth(nextColumnWidth));
//
//         // // 确保相邻列的最小宽度
//         // if (nextColumnWidth >= 50) {
//         //   this.$set(this.columnWidths, this.resizingColumnIndex, this.getPercentColumnWidth(newWidth));
//         //   this.$set(this.columnWidths, this.resizingColumnIndex + 1, this.getPercentColumnWidth(nextColumnWidth));
//         // }
//       } else {
//         // 如果是最后一列，只调整当前列
//         this.$set(this.columnWidths, this.resizingColumnIndex, this.getPercentColumnWidth(newWidth));
//       }
//       this.initialX = event.clientX;
//     },
//     stopResizingColumn() {
//       this.isResizingColumn = false;
//       document.removeEventListener('mousemove', this.resizeColumn);
//       document.removeEventListener('mouseup', this.stopResizingColumn);
//     },
//   }
// }
</script>

<style scoped lang="scss">
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