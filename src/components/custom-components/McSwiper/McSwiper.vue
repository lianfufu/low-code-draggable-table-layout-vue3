<template>
  <div class="mc-swiper">
    <iframe style="width: 100%" frameborder="no" ref="iframeRef" :height="iframeHeight+'px'" :src="iframeUrl"></iframe>
  </div>
</template>

<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref,watch} from "vue";
import global from "@/configs/global";
import { v4 as uuidv4 } from 'uuid';

const iframeHeight=ref(202);

const props=defineProps({
  styles: {
    type: Object,
    default: () => {},
  },
  attrs: {
    type: Object,
    default: () => {},
  },
  list: {
    type: Array,
    default: () => [],
  }
});

const iframeRef=ref(null);
console.log("测试uuid的生成", uuidv4());

//控制消息发送和传递
const instanceId=ref(uuidv4());
const iframeUrl = computed(() => {
  return `${global.viewUrl}#/pages/innerUIPage/innerUIPage?instanceId=${instanceId.value}`;
});
function readySendMessageHandler(e:any){
  if (e.data?.meta?.instanceId !== instanceId.value) return;
  if (e.data.even === "ready-uni") {
    console.log("父级接受子级准备就绪的uuid-swiper:",instanceId.value);
    init();
  }else if (e.data.even === "iframe-click"){
    // emit('iframeClick'); // 触发自定义事件
    // 创建带详细数据的自定义事件
    const customEvent = new CustomEvent('iframe-internal-click', {
      bubbles: true, // 必须开启冒泡
      composed: true, // 突破 Shadow DOM 边界
      detail: {
        x: 0,
        y: 0
      }
    });

    // 在 iframe 容器上派发事件
    iframeRef.value.parentElement.dispatchEvent(customEvent);
    console.log("父元素接收到了点击uuid-swiper:",instanceId.value);
  }else if (e.data.even === "update-height-byinner"){
    iframeHeight.value=e.data.params.height;
    console.log("父元素接收到了子级高度的变化uuid-swiper:",instanceId.value);
  }
}

onMounted(()=>{
  window.addEventListener("message", readySendMessageHandler);
});
onBeforeUnmount(()=>{
  console.log("iframeRef失活");
  window.removeEventListener("message", readySendMessageHandler);
});

function sendComponentDataToIframe(){
  iframeRef.value.contentWindow.postMessage(
      {
        even: "componentData-uni",
        params: JSON.parse(JSON.stringify({component:"McSwiper",...props})),
        meta: { instanceId: instanceId.value }
      },
      "*"
  );
  console.log("父级发送ComponentData消息的uuid为：",instanceId.value);
}

function init(){
  if(!iframeRef.value){
    console.log("iframeRef.value没有值");
    return;
  }
  // console.log("iframeRef.value父级开始执行初始化", iframeRef.value.contentWindow);
  iframeRef.value.contentWindow.postMessage(
      {
        even: "init-uni",
        params: { height: '202px'},
        meta: { instanceId: instanceId.value }
      },
      "*"
  );

  // console.log("发送消息的uuid为：",instanceId.value);
  sendComponentDataToIframe();
}

watch(()=>[props.styles,props.attrs,props.list],()=>{
  sendComponentDataToIframe();
},{
  deep:true
});
</script>

<style lang="scss" scoped>
.notice {
}
</style>