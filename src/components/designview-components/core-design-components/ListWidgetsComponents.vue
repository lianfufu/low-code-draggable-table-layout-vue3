<template>
  <div class="control-models">
    <draggable
        v-model="initializing"
        class="models-container"
        :group="{name:'xtwangzi',pull:'clone'}"
        :sort="false"
        :clone="handleClone"
        @update="()=>console.log('update')"
        animation="300"
        @ended="dropEnd"
        item-key="component">
      <template #item="{element,index}">
        <div class="model-item" :key="index">
          <i class="iconfont" :class="element.icon"></i>
          <span>{{element.name}}</span>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "@/store";
import _ from "lodash";
import {getRandomCode} from "@/utils/globalMethods";
import {useDesignStore} from "@/store/designStatusStore";


const store=useStore();
const initializing=computed(()=>{
  return store.initializing;
});

function handleClone(model){
  console.log(model);
  const res= {
    ..._.cloneDeep(model),
    id: getRandomCode(8),
  };
  console.log(res);
  return res;
}
</script>

<style scoped lang="scss">
.control-models{
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  .models-container{
    display: flex;
    flex-wrap: wrap;
    padding:10px 20px;
    .model-item{
      flex:50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 90px;
      padding:15px 0;
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
</style>