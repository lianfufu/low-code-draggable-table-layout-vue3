<template>
  <div class="control-page">
    <div class="panel">
      <div class="panel-content" :style="panelContentStyle" @mousedown="eventTargetSourceIsTD" ref="panelContentRef">
        <control-nest-widget :list="widgets" @update:list="doUpdateList"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {computed, ref, watch,onMounted,onBeforeUnmount} from "vue";
import ControlNestWidget from "@/components/control/ControlNestWidget.vue";
import {useDesignStore} from "@/store/designStatusStore";
import global from "@/configs/global";
import {useStore} from "@/store";
const store=useStore();
const designStore=useDesignStore();
const widgets=computed(()=>designStore.currentPageData.pages);
watch(()=>designStore.currentPageData.pages,value=>{
  console.log("designStore.currentPageData发生了变化",value);
},{
  deep:true
});
watch(()=>widgets.value,value=>{
  console.log("widgets发生了变化",value);
},{
  deep:true
});
const isClickedTD=ref<boolean>(false);
function eventTargetSourceIsTD(){
  isClickedTD.value = event.target.nodeName === "TD";
  console.log(isClickedTD.value,"冒泡出来了down");
  if(event.target==event?.currentTarget||event.target.parentNode.classList.contains("panel-content")){
    console.log("点到了空白区域");
    store.curComponent=null;
  }
}

function doUpdateList(list:any){
  designStore.currentPageData.pages=list;
  designStore.pageNamesWithPageDataMap.set(designStore.currentPageName,
      {
        pageGlobalStyles:designStore.currentPageData.pageGlobalStyles||{
          padding:"10px",
          backgroundColor:"purple"
        },
        pages:designStore.currentPageData.pages
      });
}

//动态记录iframe的高度
// const panelContentRef=ref(null);
//
// watch(()=>panelContentRef.value?.offsetHeight,value => {
//   console.log(panelContentRef.value?.offsetHeight,"panelContentRef.value.offsetHeight");
//   designStore.iframeHeight=panelContentRef.value?value+'px':'800px';
// },{
//   immediate:true
// })

const panelContentStyle=computed(()=>({
  backgroundColor:designStore.currentPageData.pageGlobalStyles.backgroundColor,
  padding:designStore.currentPageData.pageGlobalStyles.padding+'px',
}));

const panelContentRef = ref(null)
let resizeObserver = null

const updateHeight = (height) => {
  designStore.iframeHeight = height ? `${height+10}px` : '800px'
}

function handlerHiddenRightClickMenu(){
  designStore.isShowRightClickMenu=false;
}

onMounted(() => {
  resizeObserver = new ResizeObserver((entries) => {
    const entry = entries[0]
    updateHeight(entry.target.offsetHeight)
  })

  if (panelContentRef.value) {
    // 立即触发一次更新
    updateHeight(panelContentRef.value.offsetHeight)
    // 开始监听变化
    resizeObserver.observe(panelContentRef.value)
  }
  window.addEventListener("click",handlerHiddenRightClickMenu);
})

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  window.removeEventListener("click",handlerHiddenRightClickMenu);
})

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