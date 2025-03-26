<template>
  <div class="control-page">
    <div class="panel">
      <div class="panel-content">
<!--        <control-nest-widget :list="widgets" @update:list="doUpdateList"/>-->
        <iframe
            class="iframe-container"
            ref="iframeRef"
            frameborder="no"
            :style="{
            width:'100%',
            height:iframeHeight
          }"
            :src="iframeUrl"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {computed, onBeforeUnmount, onMounted, ref, toRaw, watch} from "vue";
import ControlNestWidget from "@/components/control/ControlNestWidget.vue";
import {useDesignStore} from "@/store/designStatusStore";
import global from "@/configs/global";
import _ from "lodash";

// const panelContentRef=ref(null);
const iframeRef=ref(null);
const iframeUrl=computed(function () {
  return `${global.viewUrl}#/pages/index/index`;
});
const designStore=useDesignStore();
const widgets=computed(()=>designStore.currentPageData.pages);


const iframeHeight=computed(()=>designStore.iframeHeight);

function readySendMessageHandler(e:any){
  if (e.data.even === "ready") {
    // iframeRef.value.contentWindow.postMessage(/* 数据 */);
    init();
  }
}

// const rawPages=ref<any>(null);
// let rawStyles=ref<any>(null);
let rawPages=null;
let rawStyles=null;
let listParams='';

onMounted(()=>{
  rawPages = JSON.stringify(_.cloneDeep(toRaw(designStore.currentPageData.pages)));
  console.log(rawPages,"解析出的字符串");
  rawStyles=JSON.stringify(_.cloneDeep(toRaw(designStore.currentPageData.pageGlobalStyles)));


  listParams=`{"pageGlobalStyles":${rawStyles},
      "pages":${rawPages}}`,

  window.addEventListener("message", readySendMessageHandler);
});
onBeforeUnmount(()=>{
  console.log("iframeRef失活");
  window.removeEventListener("message", readySendMessageHandler);
});

function init(){
  if(!iframeRef.value){
    console.log("iframeRef.value没有值");
    return;
  }
  console.log("iframeRef.value父级开始执行初始化", iframeRef.value.contentWindow);

  iframeRef.value.contentWindow.postMessage(
      {
        even: "init",
        params: { height: iframeHeight.value},
      },
      "*"
  );

  console.log(designStore.currentPageData.pages,"初始化-发送消息前打印pages信息",JSON.parse(rawPages));

  iframeRef.value.contentWindow.postMessage(
      {
        even: "list",
        params: listParams,
      },
      "*"
  );
}
// watch(()=>rawPages.value,(value,oldValue) => {
//   console.log("rawPages还是发生过变化",value,oldValue);
//   if(value){
//     iframeRef.value.contentWindow.postMessage(
//         {
//           even: "list",
//           params: {pageGlobalStyles:JSON.parse(JSON.stringify(toRaw(rawStyles.value))),
//             pages:JSON.parse(JSON.stringify(toRaw(rawPages.value)))},
//         },
//         "*"
//     );
//   }
// },{deep:true});
//
// //切换页面时，更新预览页显示的内容
watch(()=>designStore.currentPageData,value=>{

  rawPages = JSON.stringify(_.cloneDeep(toRaw(designStore.currentPageData.pages)));
  console.log(rawPages,"解析出的字符串");
  rawStyles=JSON.stringify(_.cloneDeep(toRaw(designStore.currentPageData.pageGlobalStyles)));


  listParams=`{"pageGlobalStyles":${rawStyles},
      "pages":${rawPages}}`,

  iframeRef.value.contentWindow.postMessage(
      {
        even: "list",
        params: listParams,
      },
      "*"
  );
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
.iframe-container{
  height:800px;
  vertical-align:top;
  //position: absolute;
  //top: 0;
  //left: 0;
  display:block;
}
</style>