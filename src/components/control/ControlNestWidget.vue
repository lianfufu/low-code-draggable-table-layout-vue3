<template>
  <draggable
      :class="isWidget?'nest-widget-height':'outer-widget-height'"
      v-model="list"
      ghostClass="ghost"
      chosenClass="chosen"
      selector="selector"
      :animation="500"
      :sort="true"
      :group="{name:'xtwangzi'}"
      item-key="component">
    <template #item="{element,index}">
      <WidgetShape v-if="element.component!=='MCTextContainer'" :cur-component="element" :key="element.id" v-bind="element" @deleteWidget="deleteWidget">
        <component v-if="element.component!=='McTable'&&element.component!=='MCTextContainer'" :is="element.component" v-bind="element">
          <ControlNestWidget :isWidget="true" v-model="element.children"></ControlNestWidget>
        </component>
        <component v-else-if="element.component==='McTable'" :is="element.component" v-bind="element" :colCount.sync="element.colCount" :rowCount.sync="element.rowCount" :children.sync="element.children"/>
      </WidgetShape>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import {useStore} from "@/store";
import {watch} from "vue";

const emits=defineEmits(["updateTableChildData"]);
const props=withDefaults(defineProps<{
  isWidget:boolean;
  cellRowIndex:number;
  cellColIndex:number;
  cellRowSpan:number;
  cellColSpan:number;
}>(),{
  isWidget:false,
  cellRowIndex:Number.NaN,
  cellColIndex:Number.NaN,
  cellRowSpan:Number.NaN,
  cellColSpan:Number.NaN,
});
const list=defineModel();
const store=useStore();

watch(list,(value, oldValue, onCleanup)=>{
  //当数据是为了列表进行服务的，拖进来新的对象的时候，记录要拖入的目标单元格
  if(!Number.isNaN(props.cellColIndex)&&!Number.isNaN(props.cellRowIndex)){
    console.log("提前走到了forEach中？",props.cellColIndex,props.cellRowIndex);
    value.forEach(item=>{
      item.rowIndex=props.cellRowIndex;
      item.colIndex=props.cellColIndex;
      item.rowSpan=props.cellRowSpan;
      item.colSpan=props.cellColSpan;
      if(!item.cellFields){
        item.cellFields={
          "contentBgc": {
            "label": "背景色",
            "type": "color",
            "value": "#fff"
          },
          "padding": {
            "label": "内边距",
            "type": "number",
            "value": 3
          }
        }
      }
      if(!item.cellFieldVal){
        item.cellFieldVal={};
        for (const cellFieldsKey in item.cellFields) {
          if(item.cellFields.hasOwnProperty(cellFieldsKey)){
            if(item.cellFields[cellFieldsKey].value){
              item.cellFieldVal[cellFieldsKey]=item.cellFields[cellFieldsKey].value;
            }
          }
        }
      }
    });
    if(value.length>1){
      const mcTextContainerIndex=value.findIndex(item=>item.component==='MCTextContainer');
      if(mcTextContainerIndex!==-1){
        console.log("执行了移除",mcTextContainerIndex,value,value.filter(item=>item.component==='MCTextContainer'));
        list.value.splice(mcTextContainerIndex,1);//移入单元格其他可拖拽元素后，单元格的MCTextContainer类型的item将被移除
      }
    }
  }
},{
  immediate: true,
  deep:true
});

function deleteWidget(component){
  console.log("执行删除失败-前半部");
  list.value.splice(list.value.indexOf(component),1);
  store.curComponent=null;
  console.log(store.curComponent);
  emits("updateTableChildData",component);
  console.log("执行删除失败-后半部");
}
</script>

<style scoped lang="scss">
.outer-widget-height{
  min-height: 600px;
}
.nest-widget-height{
  min-height: 30px;
}
</style>