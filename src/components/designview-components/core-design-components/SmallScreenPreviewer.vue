<template>
  <div class="wrapper">
<!--    <div v-show="isLoading" class="overlay"></div>-->
    <van-skeleton :loading="isLoading" class="overlay">
      <template #template>
        <div style="width: 100%">
          <van-search/>
          <div :style="{ display: 'flex', width: '100%',marginTop:'25px' }">
            <div style="padding:0 5px;">
              <van-skeleton-image/>
            </div>
            <div style="padding:0 5px;">
              <van-skeleton-image/>
            </div>
            <div style="padding:0 5px;">
              <van-skeleton-image/>
            </div>
          </div>
          <div :style="{ flex: 1,marginTop:'25px',marginBottom:'10px' }">
            <van-skeleton-paragraph/>
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
          </div>
          <div style="border-radius: 10px;background-color: #fafafa;margin-top:25px;">
            <div :style="{ display: 'flex', width: '100%',flexWrap:'wrap' }">
              <div style="padding:0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">
                <van-skeleton-image image-size="100%"/>
                <div style="margin-top: 10px;width:100%">
                  <van-skeleton-paragraph />
                </div>
              </div>
              <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">
                <van-skeleton-image image-size="100%"/>
                <div style="margin-top: 10px;width:100%">
                  <van-skeleton-paragraph />
                </div>
              </div>
              <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">
                <van-skeleton-image image-size="100%"/>
                <div style="margin-top: 10px;width:100%">
                  <van-skeleton-paragraph />
                </div>
              </div>
              <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">
                <van-skeleton-image image-size="100%"/>
                <div style="margin-top: 10px;width:100%">
                  <van-skeleton-paragraph />
                </div>
              </div>
              <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">
                <van-skeleton-image image-size="100%"/>
                <div style="margin-top: 10px;width:100%">
                  <van-skeleton-paragraph />
                </div>
              </div>
              <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">
                <van-skeleton-image image-size="100%"/>
                <div style="margin-top: 10px;width:100%">
                  <van-skeleton-paragraph />
                </div>
              </div>
              <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">
                <van-skeleton-image image-size="100%"/>
                <div style="margin-top: 10px;width:100%">
                  <van-skeleton-paragraph />
                </div>
              </div>
              <div style="padding:5px 5px 0 5px;flex:0 0 25%;display:flex;flex-direction: column;align-items: center;justify-content: center">
                <van-skeleton-image image-size="100%"/>
                <div style="margin-top: 10px;width:100%">
                  <van-skeleton-paragraph />
                </div>
              </div>
            </div>
          </div>
          <div :style="{ flex: 1,marginTop:'25px',marginBottom:'10px' }">
            <van-skeleton-paragraph/>
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
          </div>
        </div>
      </template>
    </van-skeleton>
    <iframe
        class="iframe-container"
        ref="iframeRef"
        frameborder="no"
        :style="{
            width:'100%',
            height:iframeHeight
          }"
        :src="iframeUrl"
        @load="handleLoad"
        @error="handleError"
    ></iframe>
  </div>
</template>

<script setup lang="ts">

import {computed, onBeforeUnmount, onMounted, ref, toRaw, watch} from "vue";
import ControlNestWidget from "@/components/control/ControlNestWidget.vue";
import {useDesignStore} from "@/store/designStatusStore";
import global from "@/configs/global";
import _ from "lodash";

const props=defineProps<{
  instanceId:string,
  iframeUrl:string,
  iframeHeight:string,
  globalPageStyles:any,
  widgets:any
}>();


const iframeRef=ref(null);

watch(()=>props.widgets,value=>{
  console.log("传入的widgets进行了更新:",props.widgets);
})
function readySendMessageHandler(e:any){
  if (e.data?.meta?.instanceId !== props.instanceId) return;
  if (e.data.even === "ready") {
    init();
  }
}


let rawPages=null;
let rawStyles=null;
let listParams='';

onMounted(()=>{
  rawPages = JSON.stringify(_.cloneDeep(toRaw(props.widgets)));
  console.log(rawPages,"解析出的字符串");
  rawStyles=JSON.stringify(_.cloneDeep(toRaw(props.globalPageStyles)));


  listParams=`{"pageGlobalStyles":${rawStyles},
      "pages":${rawPages}}`;

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
        params: { height: props.iframeHeight},
        meta: { instanceId: props.instanceId }
      },
      "*"
  );

  console.log(props.widgets,"初始化-发送消息前打印pages信息",JSON.parse(rawPages));

  iframeRef.value.contentWindow.postMessage(
      {
        even: "list",
        isPage:true,
        params: listParams,
        meta: { instanceId: props.instanceId }
      },
      "*"
  );
}

// //切换页面时，更新预览页显示的内容
watch(()=>props.widgets,value=>{

  isLoading.value = true // 每次 src 变化时重置加载状态
  rawPages = JSON.stringify(_.cloneDeep(toRaw(props.widgets)));
  console.log(rawPages,"解析出的字符串");
  rawStyles=JSON.stringify(_.cloneDeep(toRaw(props.globalPageStyles)));


  listParams=`{"pageGlobalStyles":${rawStyles},
      "pages":${rawPages}}`;

      iframeRef.value.contentWindow.postMessage(
          {
            even: "list",
            isPage:true,
            params: listParams,
            meta: { instanceId: props.instanceId }
          },
          "*"
      );
})

//处理加载状态
const isLoading=defineModel();
// const isLoading=ref(true);
const isError=ref(false);
// 处理加载完成
const handleLoad = () => {
  isLoading.value = false;
  isError.value=false;
}

// 处理加载错误
const handleError = () => {
  isLoading.value = false;
  isError.value=true;
}

</script>

<style scoped lang="scss">
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
.iframe-container{
  height:800px;
  vertical-align:top;
  border: none;
  overflow: auto;
  display:block;
}
</style>