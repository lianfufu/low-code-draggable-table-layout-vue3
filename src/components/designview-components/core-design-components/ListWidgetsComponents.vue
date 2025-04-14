<template>
  <div class="control-models">
    <div v-for="(item,index) in groupedModel" :key="item[0]">
      <div class="head">
        <img :class="['arrow',isRotates[index]?'arrow_rotate':'']" src="@/assets/rightarrow.png" @click="isRotates[index]=!isRotates[index]"/>
        <span>{{item[0]}}</span>
      </div>
      <draggable
          v-model="item[1]"
          class="models-container"
          :style="{display:isRotates[index]?'flex':'none'}"
          :group="{name:'xtwangzi',pull:'clone'}"
          :sort="false"
          :clone="handleClone"
          @update="()=>console.log('update')"
          animation="300"
          @ended="dropEnd"
          item-key="component">
        <template #item="{element,index}">
          <div class="model-item" :key="index">
            <i v-if="!element.isSymbol" class="iconfont" :class="element.icon"></i>
            <svg v-else class="iconfont" aria-hidden="true" width="29" height="29">
              <use :xlink:href="`#${element.icon}`"></use>
            </svg>
            <span>{{element.name}}</span>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed,ref} from "vue";
import {useStore} from "@/store";
import _ from "lodash";
import {getRandomCode} from "@/utils/globalMethods";
import {useDesignStore} from "@/store/designStatusStore";

const model=defineModel();
const isRotates=ref<boolean[]>([]);
const groupedModel=computed(()=>{
  if(model.value){
    const res:any[]=[];
    model.value.forEach(item=>{
      // const group={};
      const groupName=item.group;
      // group.groupName=groupName;
      isRotates.value.push(true);
      const matchedIndex=res.findIndex(item2=>item2[0]===groupName);
      if(matchedIndex!==-1){
        res[matchedIndex][1].push(item);
      }else{
        res.push([groupName,[item]]);
      }
    });
    console.log(res);
    return res;
  }
  return [];
})
// const isRotate=ref(false);
function handleClone(model:any){
  console.log(model);
  const res= {
    ..._.cloneDeep(model),
    id: getRandomCode(8),
  };
  rescurseChangeChildrenId(res);
  console.log(res);
  return res;
}

function rescurseChangeChildrenId(res:any){
  if(res.children&&res.children.length>0){
    res.children.forEach((item:any)=>{
      item.id=getRandomCode(8)
      rescurseChangeChildrenId(item);
    })
  }
  if(res.header&&res.header.length>0){
    res.header.forEach((item:any)=>{
      item.id=getRandomCode(8);
      rescurseChangeChildrenId(item);
    })
  }
}

function dropEnd(){

}
</script>

<style scoped lang="scss">
.control-models{
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  padding-top:10px;
  .models-container{
    display: flex;
    flex-wrap: wrap;
    padding:10px 20px;
    .model-item{
      display: flex;
      flex: 0 0 33.3333%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 90px;
      &:hover{
        cursor: pointer;
        color: #fff !important;
        background: $color-theme;
      }
      i {
        font-size: 29px; /*no*/
        margin-top: 5px; /*no*/
        margin-bottom: 10px; /*no*/
      }
    }
  }
}
.head{
  height:30px;
  line-height: 30px;
  background-color: #e9ecf1;
  border:1px solid #ffffff;
  padding-left: 10px;
  .arrow{
    width:16px;
    height:16px;
    cursor:pointer;
    transition: transform 500ms ease;
    vertical-align: middle;
    margin-right:10px;
    margin-top:-3px;
  }
  .arrow_rotate{
    transform: rotate(90deg);
    transition: transform 200ms ease;
  }
}
</style>