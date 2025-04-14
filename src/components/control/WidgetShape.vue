<template>
  <div class="widget-shape drag" @mouseenter="doHoverElement" :style="{border:isSelected?'1px solid #159BD4FF':'none',outline:isHover?'1px dashed #155bd4':''}" ref="shapeRef" @contextmenu.prevent="showContextMenu" @click.stop="setCurComponent" @iframe-internal-click="handleIframeClick">
    <div class="operate-bar">
      <div class="f14" v-show="isSelected" @click.stop="doDeleteComponent">
        x
      </div>
      <div class="f14" v-show="!isSelected" @click.stop="()=>{}">
        {{ name }}
      </div>
    </div>
    <slot></slot>
    <div
        v-if="designStore.isShowRightClickMenu"
        class="context-menu"
        :style="{ top: menuY + 'px', left: menuX + 'px' }"
    >
      <button @click.stop="doDeleteComponent">删除</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useStore} from "@/store";
import {useDesignStore} from "@/store/designStatusStore";

const shapeRef=ref(null);
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
const isHover=computed(()=>{
  return store.curHoverComponent?.id===props.curComponent.id;
});

function doHoverElement(event:any){
  event.preventDefault();
  event.stopPropagation();
  store.curHoverComponent=props.curComponent;
}

function handleIframeClick(e){
  // // 创建虚拟点击事件
  // const virtualClick = new MouseEvent('click', {
  //   bubbles: true,
  //   cancelable: true
  // });
  //
  // // 触发真实点击处理
  // shapeRef.value.dispatchEvent(virtualClick);
  console.log("iframe事件点击后设置store的curComponent的值",props.curComponent);
  store.curComponent=props.curComponent;
}
function setCurComponent(event:any){
  console.log("是否是右键触发的,",event.button===2);
  console.log("点击后设置store的curComponent的值",props.curComponent);
  store.curComponent=props.curComponent;
}
function doDeleteComponent(){
  emits("deleteWidget",props.curComponent);
}

//右键弹出删除实例工具栏
// 控制菜单显示
const designStore=useDesignStore();
// 菜单坐标
const menuX = ref(0);
const menuY = ref(0);

// 显示右键菜单
function showContextMenu(event:any){
  event.stopPropagation();
  designStore.isShowRightClickMenu = true;
  console.log("点击后设置store的curComponent的值-右键触发",props.curComponent);
  store.curComponent=props.curComponent;

  menuX.value = event.clientX;
  menuY.value = event.clientY;
};

</script>

<style scoped lang="scss">
.widget-shape{
  position: relative;
  width:100%;
  box-sizing: border-box;
  //&:hover{
  //  outline:1px dashed $color-theme;
  //}
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

.context-menu {
  position: fixed;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  padding: 8px;
  z-index: 1000;
}

.context-menu button {
  display: block;
  width: 100%;
  padding: 6px 12px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
}

.context-menu button:hover {
  background: #f0f0f0;
}
</style>