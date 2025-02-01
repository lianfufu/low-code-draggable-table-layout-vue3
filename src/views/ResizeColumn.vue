<template>
  <div class="table-container" :style="{width:parentWidth+'px'}">
    <table>
      <col :style="{width:rows[1][0].width}" />
      <col :style="{width:rows[1][1].width}" />
      <col :style="{width:rows[1][2].width}" />
      <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex" :style="{ height: rowHeights[rowIndex] + 'px' }">
        <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            :style="{ width: cell.width}"
            class="resizable-cell flex-td"
            :colspan="cell.colSpan"
            :rowspan="cell.rowSpan"
            :data-rowIndex="rowIndex" :data-colIndex="cellIndex" :data-colSpan="cell.colSpan" :data-rowSpan="cell.rowSpan"
        >
          <div class="table-container">
            {{ cell.value }}
          </div>
          <div class="row-resizer" @mousedown="startResizingRow(rowIndex)"></div>
          <div
              class="col-resizer"
              v-if="cellIndex < row.length - 1"
              @mousedown="startResizingColumn(cellIndex, rowIndex)"
          ></div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const headers=ref<string[]>(['Header 1', 'Header 2', 'Header 3']);
const rows=ref<any[]>([
  [{value:'Cell 1-1',width:'80%',rowIndex:0,colIndex:0,rowSpan:1,colSpan:2}, {value:'Cell 1-2',width:'20%',rowIndex:0,colIndex:2,rowSpan:1,colSpan:1}],
  [{value:'Cell 2-1',width:'60%',rowIndex:1,colIndex:0,rowSpan:1,colSpan:1}, {value:'Cell 2-2',width:'20%',rowIndex:1,colIndex:1,rowSpan:1,colSpan:1}, {value:'Cell 2-3',width:'20%',rowIndex:1,colIndex:2,rowSpan:1,colSpan:1}],
]);
const rowHeights=ref<any[]>([]);
const columnWidths=ref<any[]>([]);
const isResizingRow=ref<boolean>(false);
const isResizingColumn=ref<boolean>(false);
const resizingRowIndex=ref<any>(null);
const resizingColumnIndex=ref<any>(null);
const parentWidth=ref<number>(430);
const colCount=ref<number>(3);
const rowCount=ref<number>(3);
const initialY=ref<number>(0);
const initialX=ref<number>(0);
onMounted(()=>{
  for(let i=0;i<colCount.value;i++){
    columnWidths.value.push(100/colCount.value);
  }

  for(let j=0;j<rowCount.value;j++){
   rowHeights.value.push(30);
  }
});
function getPercentColumnWidth(numWidth:any){
  return 100*numWidth/parentWidth.value+'%';
}
function getRealWidthOfColumn(strWidth:any){
  return Number.parseFloat(strWidth)*parentWidth.value/100;
}
function getSumWidthOfColumn(strWidth:any,strWidth1:any){
  const numberWidth=Number.parseFloat(strWidth)*parentWidth.value/100;
  const numberWidth1=Number.parseFloat(strWidth1)*parentWidth.value/100;
  return getPercentColumnWidth(numberWidth+numberWidth1);
}
function startResizingRow(rowIndex:any) {
  event.stopPropagation(); // 阻止事件冒泡到draggable组件
  event.preventDefault();  // 阻止默认行为，以防万一
  isResizingRow.value = true;
  resizingRowIndex.value = rowIndex;
  initialY.value = event.clientY;
  // console.log(event);
  document.addEventListener('mousemove', resizeRow);
  document.addEventListener('mouseup', stopResizingRow);
}
function resizeRow(event:any) {
  if (!isResizingRow.value) return;
  const deltaY = event.clientY - initialY.value;
  // 调整行高，确保最小高度
  const newHeight = Math.max(30, rowHeights.value[resizingRowIndex.value] + deltaY);
  rowHeights.value[resizingRowIndex.value]=newHeight;
  initialY.value = event.clientY;
}
function stopResizingRow() {
  isResizingRow.value = false;
  document.removeEventListener('mousemove', resizeRow);
  document.removeEventListener('mouseup', stopResizingRow);
}
function startResizingColumn(columnIndex:any, rowIndex:any) {
  event.stopPropagation(); // 阻止事件冒泡到draggable组件
  event.preventDefault();  // 阻止默认行为，以防万一
  isResizingColumn.value = true;
  resizingColumnIndex.value = columnIndex;
  initialX.value = event.clientX;
  // console.log(event);
  // 保存当前列的初始宽度，用于后续计算
  // this.initialColumnWidth = this.columnWidths[columnIndex];
  document.addEventListener('mousemove', resizeColumn);
  document.addEventListener('mouseup', stopResizingColumn);
}
function resizeColumn(event) {
  if (!isResizingColumn.value) return;
  const deltaX = event.clientX - initialX.value;

  let leftTopCell;
  rows.value.some(row => {
    return row.some(cell => {
      if (cell.value === "Cell 2-1") {
        leftTopCell = cell;
        return true; // 退出内层循环
      }
      return false;
    });
  });
  leftTopCell.width=getPercentColumnWidth(getRealWidthOfColumn(leftTopCell.width)+deltaX);
  const newWidth = getRealWidthOfColumn(leftTopCell.width)+deltaX;
  // 如果是非最后一列，需要调整相邻列的宽度
  if (resizingColumnIndex.value < columnWidths.value.length - 1) {

    let leftTopCell1;
    rows.value.some(row => {
      return row.some(cell => {
        if (cell.value === "Cell 2-2") {
          leftTopCell1 = cell;
          return true; // 退出内层循环
        }
        return false;
      });
    });

    const nextColumnWidth=getRealWidthOfColumn(leftTopCell1.width)-deltaX;
    if(nextColumnWidth<0||newWidth<0){
      initialX.value = event.clientX;
      return;
    }
    console.log(newWidth,nextColumnWidth);
    leftTopCell1.width=getPercentColumnWidth(getRealWidthOfColumn(leftTopCell1.width)-deltaX);
    console.log("cell12,cell23",leftTopCell.width,leftTopCell1.width);
  } else {
    // 如果是最后一列，只调整当前列
    columnWidths.value[resizingColumnIndex.value]=getPercentColumnWidth(newWidth);
  }
  initialX.value = event.clientX;
}
function stopResizingColumn() {
  isResizingColumn.value = false;
  document.removeEventListener('mousemove', resizeColumn);
  document.removeEventListener('mouseup', stopResizingColumn);
}
</script>

<style scoped lang="scss">
.table-container {
  width: 600px;
  overflow: auto;
}

table {
  width: 100%;
  table-layout: fixed; /* 确保列宽固定 */
  overflow: hidden;
  .flex-td {
    word-wrap: break-word !important;
    .table-container{
      //display: table-cell;
      height: auto;
      background-color: #c0ccda;
    }
  }
}

th, td {
  box-sizing: border-box;
  border: 1px solid #ccc;
  text-align: left;
  position: relative;
}

.resizable-cell {
  position: relative;
}

.row-resizer {
  width: 100%;
  height: 1px;
  cursor: ns-resize;
  background-color: #999;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
}

.row-resizer:hover {
  background-color: #0000ff;
}

.col-resizer {
  width: 1px;
  height: 100%;
  cursor: ew-resize;
  background-color: #999;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}

.col-resizer:hover {
  background-color: #0000ff;
}
</style>