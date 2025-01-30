<template>
  <div class="widget-shape drag" @click.stop="setCurComponent">
    <div class="operate-bar">
      <div class="f14" v-show="isSelected" @click.stop="doDeleteComponent">
        x
      </div>
      <div class="f14" v-show="!isSelected" @click.stop="()=>{}">
        {{ name }}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "@/store";

const store=useStore();
const props=withDefaults(defineProps<
    {
      name: string;
      curComponent:Object
    }>(),()=>{
  return {
    name:"物料实例",
    curComponent:null
  }
});
const emits=defineEmits(["deleteWidget"]);
const isSelected=computed(()=>{
 return store.curComponent?.id===props.curComponent.id;
});

function setCurComponent(){
  console.log("点击后设置store的curComponent的值",props.curComponent);
  store.curComponent=props.curComponent;
}
function doDeleteComponent(){
  emits("deleteWidget",props.curComponent);
}
</script>

<style scoped lang="scss">
.widget-shape{
  position: relative;
  width:100%;
  &:hover{
    outline:1px dashed $color-theme;
  }
  .operate-bar{
    width: 30px;
    text-align: center;
    height:20px;
    line-height:20px;
    position: absolute;
    top:0;
    right:-35px;
    background-color: #cccccc;
    z-index: 996;
  }
}
.drag:hover{
  cursor: default;
}
</style>