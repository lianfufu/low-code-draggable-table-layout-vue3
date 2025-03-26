<template>
  <div class="control-page">
    <div class="panel">
      <div class="panel-content" ref="panelContentRef">
        <control-nest-widget :is-widget="true" :list="widgets" @update:list="doUpdateList"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {computed, ref, watch,onMounted,onBeforeUnmount} from "vue";
import ControlNestWidget from "@/components/control/ControlNestWidget.vue";
import {useDesignStore} from "@/store/designStatusStore";
import global from "@/configs/global";

const designStore=useDesignStore();
const widgets=computed(()=>designStore.curNavigationConfig);

const isClickedTD=ref<boolean>(false);
function eventTargetSourceIsTD(){
  isClickedTD.value = event.target.nodeName === "TD";
  console.log(isClickedTD.value,"冒泡出来了down");
}

function doUpdateList(list:any){
  designStore.curNavigationConfig=list;
}


// const panelContentRef = ref(null)
// let resizeObserver = null
//
// const updateHeight = (height) => {
//   designStore.iframeHeight = height ? `${height+10}px` : '800px'
// }
//
// function handlerHiddenRightClickMenu(){
//   designStore.isShowRightClickMenu=false;
// }
//
// onMounted(() => {
//   resizeObserver = new ResizeObserver((entries) => {
//     const entry = entries[0]
//     updateHeight(entry.target.offsetHeight)
//   })
//
//   if (panelContentRef.value) {
//     // 立即触发一次更新
//     updateHeight(panelContentRef.value.offsetHeight)
//     // 开始监听变化
//     resizeObserver.observe(panelContentRef.value)
//   }
//   window.addEventListener("click",handlerHiddenRightClickMenu);
// })
//
// onBeforeUnmount(() => {
//   if (resizeObserver) {
//     resizeObserver.disconnect()
//   }
//   window.removeEventListener("click",handlerHiddenRightClickMenu);
// })

</script>

<style scoped lang="scss">

.control-page{
  display: flex;
  flex: 1;
  justify-content: center;
  height: calc(100vh - 50px);
  overflow-x: auto;
  overflow-y: scroll;
  .panel {
    width: 100%;
    max-width: 900px;
    .panel-content {
      display:flex;
      align-items: flex-end;
      width: 430px;
      min-height: 800px;
      margin: 50px auto;
      background: #fff;
      box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.1);
    }
  }
}
//.control-page::-webkit-scrollbar-track-piece {
//  -webkit-border-radius: 6px;
//}
.control-page::-webkit-scrollbar {
  width: 5px;
}
.control-page::-webkit-scrollbar-track-piece {
  -webkit-border-radius: 6px;
}
.control-page::-webkit-scrollbar-thumb:hover {
  background-color: #000000;
  box-shadow: inset 4px 0 0 rgba(32, 32, 32, .2);
}
.control-page::-webkit-scrollbar-thumb {
  background: transparent !important;
  border: 2px solid transparent;
  box-shadow: inset 4px 0 0 rgba(32, 32, 32, .1);
}
</style>