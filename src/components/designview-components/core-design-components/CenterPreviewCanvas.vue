<template>
  <div class="control-page">
    <div class="panel">
      <div class="panel-content">
<!--        <div class="wrapper">-->
<!--&lt;!&ndash;          <van-skeleton :loading="isLoading" class="overlay">&ndash;&gt;-->
<!--&lt;!&ndash;            <template #template>&ndash;&gt;-->
<!--&lt;!&ndash;              <div style="width: 100%">&ndash;&gt;-->
<!--&lt;!&ndash;                <van-search/>&ndash;&gt;-->
<!--&lt;!&ndash;                <div :style="{ display: 'flex', width: '100%',marginTop:'25px' }">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div style="padding:0 5px;flex:0 0 33.3333%">&ndash;&gt;-->
<!--&lt;!&ndash;                    <van-skeleton-image/>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div style="padding:0 5px;flex:0 0 33.3333%">&ndash;&gt;-->
<!--&lt;!&ndash;                    <van-skeleton-image/>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div style="padding:0 5px;flex:0 0 33.3333%">&ndash;&gt;-->
<!--&lt;!&ndash;                    <van-skeleton-image/>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div :style="{ flex: 1,marginTop:'25px',marginBottom:'10px' }">&ndash;&gt;-->
<!--&lt;!&ndash;                  <van-skeleton-paragraph/>&ndash;&gt;-->
<!--&lt;!&ndash;                  <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                  <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div style="border-radius: 10px;background-color: #fafafa;margin-top:25px;">&ndash;&gt;-->
<!--&lt;!&ndash;                  <div :style="{ display: 'flex', width: '100%',flexWrap:'wrap' }">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div style="padding:0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">&ndash;&gt;-->
<!--&lt;!&ndash;                      <van-skeleton-image image-size="100%"/>&ndash;&gt;-->
<!--&lt;!&ndash;                      <div style="margin-top: 10px;width:100%">&ndash;&gt;-->
<!--&lt;!&ndash;                        <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                      </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">&ndash;&gt;-->
<!--&lt;!&ndash;                      <van-skeleton-image image-size="100%"/>&ndash;&gt;-->
<!--&lt;!&ndash;                      <div style="margin-top: 10px;width:100%">&ndash;&gt;-->
<!--&lt;!&ndash;                        <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                      </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">&ndash;&gt;-->
<!--&lt;!&ndash;                      <van-skeleton-image image-size="100%"/>&ndash;&gt;-->
<!--&lt;!&ndash;                      <div style="margin-top: 10px;width:100%">&ndash;&gt;-->
<!--&lt;!&ndash;                        <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                      </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">&ndash;&gt;-->
<!--&lt;!&ndash;                      <van-skeleton-image image-size="100%"/>&ndash;&gt;-->
<!--&lt;!&ndash;                      <div style="margin-top: 10px;width:100%">&ndash;&gt;-->
<!--&lt;!&ndash;                        <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                      </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">&ndash;&gt;-->
<!--&lt;!&ndash;                      <van-skeleton-image image-size="100%"/>&ndash;&gt;-->
<!--&lt;!&ndash;                      <div style="margin-top: 10px;width:100%">&ndash;&gt;-->
<!--&lt;!&ndash;                        <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                      </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">&ndash;&gt;-->
<!--&lt;!&ndash;                      <van-skeleton-image image-size="100%"/>&ndash;&gt;-->
<!--&lt;!&ndash;                      <div style="margin-top: 10px;width:100%">&ndash;&gt;-->
<!--&lt;!&ndash;                        <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                      </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">&ndash;&gt;-->
<!--&lt;!&ndash;                      <van-skeleton-image image-size="100%"/>&ndash;&gt;-->
<!--&lt;!&ndash;                      <div style="margin-top: 10px;width:100%">&ndash;&gt;-->
<!--&lt;!&ndash;                        <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                      </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">&ndash;&gt;-->
<!--&lt;!&ndash;                      <van-skeleton-image image-size="100%"/>&ndash;&gt;-->
<!--&lt;!&ndash;                      <div style="margin-top: 10px;width:100%">&ndash;&gt;-->
<!--&lt;!&ndash;                        <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                      </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div :style="{ flex: 1,marginTop:'25px',marginBottom:'10px' }">&ndash;&gt;-->
<!--&lt;!&ndash;                  <van-skeleton-paragraph/>&ndash;&gt;-->
<!--&lt;!&ndash;                  <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                  <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                  <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                  <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                  <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                  <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                  <van-skeleton-paragraph />&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </template>&ndash;&gt;-->
<!--&lt;!&ndash;          </van-skeleton>&ndash;&gt;-->
<!--          <iframe-->
<!--              :key="componentKey"-->
<!--              class="iframe-container"-->
<!--              ref="iframeRef"-->
<!--              frameborder="no"-->
<!--              :style="{-->
<!--            width:'100%',-->
<!--            height:iframeHeight-->
<!--          }"-->
<!--              :src="iframeUrl"-->
<!--          ></iframe>-->
<!--        </div>-->
        <iframe
            :key="componentKey"
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

const designStore=useDesignStore();
const instanceId=computed(()=>{
  return designStore.currentPageData.id||"001";
});
const iframeRef=ref(null);
const iframeUrl=computed(function () {
  return `${global.viewUrl}#/pages/outerUIPage/outerUIPage?instanceId=${instanceId.value}`;
});
const widgets=computed(()=>designStore.currentPageData.pages);


const componentKey = ref("");

watch(() => designStore.currentPageData, () => {
  componentKey.value=designStore.currentPageData?.id||"";
});

const iframeHeight=computed(()=>designStore.iframeHeight);

function readySendMessageHandler(e:any){
  if (e.data?.meta?.instanceId !== instanceId.value) return;
  if (e.data.even === "ready") {
    init();
  }
}


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
        isPage:true,
        params: { height: iframeHeight.value},
        meta: { instanceId: instanceId.value }
      },
      "*"
  );

  console.log(designStore.currentPageData.pages,"初始化-发送消息前打印pages信息",JSON.parse(rawPages));

  iframeRef.value.contentWindow.postMessage(
      {
        even: "list",
        isPage:true,
        params: listParams,
        meta: { instanceId: instanceId.value }
      },
      "*"
  );
}

// //切换页面时，更新预览页显示的内容
watch(()=>designStore.currentPageData,value=>{
  // isLoading.value=true;
  rawPages = JSON.stringify(_.cloneDeep(toRaw(designStore.currentPageData.pages)));
  console.log(rawPages,"解析出的字符串");
  rawStyles=JSON.stringify(_.cloneDeep(toRaw(designStore.currentPageData.pageGlobalStyles)));


  listParams=`{"pageGlobalStyles":${rawStyles},
      "pages":${rawPages}}`,

  iframeRef.value.contentWindow.postMessage(
      {
        even: "list",
        isPage:true,
        params: listParams,
        meta: { instanceId: instanceId.value }
      },
      "*"
  );
})

// //处理加载状态
// const isLoading=ref(true);
// const isError=ref(false);
// // 处理加载完成
// const handleLoad = () => {
//   isLoading.value = false;
//   isError.value=false;
// }
//
// // 处理加载错误
// const handleError = () => {
//   isLoading.value = false;
//   isError.value=true;
// }
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
.wrapper{
  height:800px;
  position: relative;
  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index:10;
    padding-top: 10px;
    background: rgba(255, 255, 255, 0.8);
  }
}
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