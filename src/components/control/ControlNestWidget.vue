<template>
  <draggable
      :class="isWidget?'nest-widget-height':'outer-widget-height'"
      v-model="writableList"
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
          <ControlNestWidget :isWidget="true" @update:list="(value)=>{element.children=value}" :list="element.children"></ControlNestWidget>
        </component>
        <component v-else-if="element.component==='McTable'" :is="element.component" v-bind="element" :colCount="element.colCount" @update:colCount="(value)=>{element.colCount=value}" :rowCount="element.rowCount" @update:rowCount="(value)=>{element.rowCount=value}" :children="element.children" @update:children="(value)=>{element.children=value}"/>
      </WidgetShape>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import {useStore} from "@/store";
import {ref, watch} from "vue";

const emits=defineEmits(["updateTableChildData","update:list"]);
const props=withDefaults(defineProps<{
  isWidget:boolean;
  list:any[];
  cellRowIndex:number;
  cellColIndex:number;
  cellRowSpan:number;
  cellColSpan:number;
}>(),{
  isWidget:false,
  list:()=>[],
  cellRowIndex:Number.NaN,
  cellColIndex:Number.NaN,
  cellRowSpan:Number.NaN,
  cellColSpan:Number.NaN,
});
// const list=defineModel();
// const list=ref<any[]>([]);

const store=useStore();
const writableList=ref<any[]>([]);

watch(()=>props.list,(value, oldValue, onCleanup)=>{
  writableList.value=value;
},{
  immediate: true,
  deep:true
});
watch(()=>writableList.value,(value)=>{//当数据是为了列表进行服务的，拖进来新的对象的时候，记录要拖入的目标单元格
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
            "value": "#ffffff00"
          },
          "padding": {
            "label": "内边距",
            "type": "number",
            "value": 3
          }
        }
      }
      if(!item.cellFieldsVal){
        item.cellFieldsVal={};
        for (const cellFieldsKey in item.cellFields) {
          if(item.cellFields.hasOwnProperty(cellFieldsKey)){
            if(item.cellFields[cellFieldsKey].value){
              item.cellFieldsVal[cellFieldsKey]=item.cellFields[cellFieldsKey].value;
            }
          }
        }
        // console.log(item)
      }
    });
    if(value.length>1){
      const mcTextContainerIndex=value.findIndex(item=>item.component==='MCTextContainer');
      if(mcTextContainerIndex!==-1){
        console.log("执行了移除",mcTextContainerIndex,value,value.filter(item=>item.component==='MCTextContainer'));
        writableList.value.splice(mcTextContainerIndex,1);//移入单元格其他可拖拽元素后，单元格的MCTextContainer类型的item将被移除
      }
    }
  }
  emits("update:list",value);
},{
  deep:true,
  immediate:true
});

function deleteWidget(component){
  console.log("执行删除失败-前半部");
  writableList.value.splice(writableList.value.indexOf(component),1);
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