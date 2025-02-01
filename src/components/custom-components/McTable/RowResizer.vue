<template>
  <div class="row-resizer" @drag.stop @dragend.stop @dragstart.stop @mousedown="startResizingRow(index)"></div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const isResizingRow=ref<boolean>(false);
const resizingRowIndex=ref<any>(null);
const initialY=ref<number>(0);
const pickedCellY=ref<number>(0);
const props=defineProps({
  index:{
    type:Number,
    default:0
  },
  rowHeights:{
    type:Array,
    default: ()=>([])
  }
});

function startResizingRow(rowIndex:number) {
  event.stopPropagation(); // 阻止事件冒泡到draggable组件
  event.preventDefault();  // 阻止默认行为，以防万一
  isResizingRow.value = true;
  resizingRowIndex.value = rowIndex;
  initialY.value = event.clientY;
  // console.log(this.initialY,"initialY");
  document.addEventListener('mousemove', resizeRow);
  document.addEventListener('mouseup', stopResizingRow);
}
function resizeRow(event:any) {
  if (!isResizingRow.value) return;
  const deltaY = event.clientY - initialY.value;
  // console.log("deltaY",deltaY);
  // 调整行高，确保最小高度
  const newHeight = Math.max(30, props.rowHeights[resizingRowIndex.value] + deltaY);
  props.rowHeights[resizingRowIndex.value]=newHeight;
  initialY.value = event.clientY;
}
function stopResizingRow() {
  isResizingRow.value = false;
  document.removeEventListener('mousemove', resizeRow);
  document.removeEventListener('mouseup', stopResizingRow);
}

// export default {
//   name: "RowResizer",
//   data(){
//     return{
//       isResizingRow: false,
//       resizingRowIndex: null,
//       initialY: 0,//控制拖拽柄拖拽位置的逻辑Y
//       pickedCellY: 0,//控制选择表格单元格位置的初始逻辑Y
//     }
//   },
//   props:{
//     index:{
//       type:Number,
//       default:0
//     },
//     rowHeights:{
//       type:Array,
//       default: ()=>([])
//     }
//   },
//   methods:{
//     startResizingRow(rowIndex) {
//       event.stopPropagation(); // 阻止事件冒泡到draggable组件
//       event.preventDefault();  // 阻止默认行为，以防万一
//       this.isResizingRow = true;
//       this.resizingRowIndex = rowIndex;
//       this.initialY = event.clientY;
//       // console.log(this.initialY,"initialY");
//       document.addEventListener('mousemove', this.resizeRow);
//       document.addEventListener('mouseup', this.stopResizingRow);
//     },
//     resizeRow(event) {
//       if (!this.isResizingRow) return;
//       const deltaY = event.clientY - this.initialY;
//       // console.log("deltaY",deltaY);
//       // 调整行高，确保最小高度
//       const newHeight = Math.max(30, this.rowHeights[this.resizingRowIndex] + deltaY);
//       this.$set(this.rowHeights, this.resizingRowIndex, newHeight);
//       this.initialY = event.clientY;
//     },
//     stopResizingRow() {
//       this.isResizingRow = false;
//       document.removeEventListener('mousemove', this.resizeRow);
//       document.removeEventListener('mouseup', this.stopResizingRow);
//     },
//   }
// }


</script>

<style scoped lang="scss">
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
</style>