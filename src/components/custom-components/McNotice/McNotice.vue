<template>
  <div class="notice" :style="{backgroundColor:props.noticeStyles.cmpBackground,borderRadius:props.noticeStyles.radius+'px',height:'41px',marginLeft:noticeStyles.leftRightPadding+'px',marginRight:noticeStyles.leftRightPadding+'px'}">
    <iframe :style="{backgroundColor:props.noticeStyles.cmpBackground,width:'100%',borderRadius:props.noticeStyles.radius+'px'}" frameborder="no" ref="iframeRef" height="41" :src="iframeUrl"></iframe>
  </div>
</template>

<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref,watch} from "vue";
import global from "@/configs/global";
import { v4 as uuidv4 } from 'uuid';

const props=defineProps({
  noticeStyles: {
    type: Object,
    default: () => {},
  },
  noticeContent: {
    type: Object,
    default: () => {},
  },
});

const iframeRef=ref(null);
console.log("测试uuid的生成", uuidv4());
const emit = defineEmits(['iframeClick']);

//控制消息发送和传递
const instanceId=ref(uuidv4());
const iframeUrl = computed(() => {
  return `${global.viewUrl}#/pages/innerUIPage/innerUIPage?instanceId=${instanceId.value}`;
});
function readySendMessageHandler(e:any){
  if (e.data?.meta?.instanceId !== instanceId.value) return;
  if (e.data.even === "ready-uni") {
    console.log("父级接受子级准备就绪的uuid:",instanceId.value);
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
    console.log("父元素接收到了点击uuid:",instanceId.value);
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
        isPage:false,
        params: JSON.parse(JSON.stringify({component:"McNotice",...props})),
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
        isPage:false,
        params: { height: '41px'},
        meta: { instanceId: instanceId.value }
      },
      "*"
  );

  // console.log("发送消息的uuid为：",instanceId.value);
  sendComponentDataToIframe();
}

watch(()=>[props.noticeStyles,props.noticeContent],()=>{
  sendComponentDataToIframe();
},{
  deep:true
});
</script>

<style lang="scss" scoped>
.notice {
}
</style>