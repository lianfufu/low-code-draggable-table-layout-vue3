<template>
  <div class="contentBox__1gYQr">
    <div id="contentBoxLeft" class="contentBoxleft__1uphq" style="width: calc(100% - 46px); overflow-y: auto;">
      <div class="page">
        <div class="c-#222529 font-extrabold text-20px mb-24px">推荐小程序</div>
        <div style="height:1px;border-bottom: 1px solid #ccc;transform: translateY(-15px)"/>
        <div class="flex flex-wrap gap-30 mb-50" style="margin-top: 5px">
          <div v-for="(item,index) in lstIframeData" :key="item.instanceId">
            <div class="cover" data-v-5bdda5d3="">
              <div class="relative" data-v-5bdda5d3="">
                <div class="cnt" style="position: relative;width:350px;">
                  <div class="preview">
                    <SmallScreenPreviewer v-model="isLoadings[index]" :global-page-styles="item.globalPageStyles" :widgets="item.widgets" :instance-id="item.instanceId" iframe-height="650px" :iframe-url="item.iframeUrl"/>
                  </div>
                  <div class="mask" v-show="!isLoadings[index]">
                    <span :style="textStyle" @click="handleSeePreview(item.productId)">点我预览</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RightPanel/>
  </div>
</template>

<script setup lang="ts">

import RightPanel from "@/components/workspace-components/RightPanel.vue";
import {useProductStore} from "@/store/templateProductsStore";
import {computed, onMounted, ref} from "vue";
import global from "@/configs/global";
import {useRouter} from "vue-router";
const productStore=useProductStore();

const lstIframeData=ref<{
  productId:string,
  productName:string,
  instanceId:string,
  iframeUrl:string,
  globalPageStyles:any,
  widgets:[]
}[]>([]);
const isLoadings=ref<boolean[]>([]);
onMounted(()=>{
    productStore.templateProducts.forEach(item=>{
      lstIframeData.value.push({
        productId:item.id,
        productName:item.name,
        instanceId:item.pages[0].id,
        iframeUrl:`${global.viewUrl}#/pages/outerUIPage/outerUIPage?instanceId=${item.pages[0].id}`,
        globalPageStyles:item.configs.pageGlobalStyles,
        widgets:item.pages[0].pageWidgets
      });
      isLoadings.value.push(true);
      console.log("初始化的products值：",lstIframeData.value);
  });
})

let textStyle=ref({
  width:"100px",
  height:"40px",
  lineHeight:"40px",
  color:"#ffffff",
  textAlign:"center",
  backgroundColor:"#008efa",
  borderWidth:"1px",
  fontSize:"16px",
  borderRadius:"10px",
});

const router=useRouter();
function handleSeePreview(id:string){
  router.push(`/product?productId=${id}`);
}
</script>

<style scoped lang="scss">
.contentBox__1gYQr {
  align-content: space-between;
  display: flex;
  height: calc(100% - 60px);
  min-width: 817px;
}

.lightTheme .commonPadding__2aIR5, .lightTheme .contentBoxleft__1uphq {
  background: #fff;
}

.contentBoxleft__1uphq {
  background: #1c1c1c;
  overflow-y: auto;
  position: relative;
  width: calc(100% - 46px);
  z-index: 0;
}

.lightTheme .commonPadding__2aIR5, .lightTheme .contentBoxleft__1uphq {
  background: #fff;
}

.page{
  background-color: #fff;
  margin:24px 40px;
}
.font-extrabold {
  font-weight: 800;
}
.c-\#222529, [color~="#222529"] {
  --un-text-opacity: 1;
  color: rgb(34 37 41 / 1);
}
.text-20px {
  font-size: 16px;
  font-weight: bold;
}
.mb-24px {
  margin-bottom: 24px;
}
.gap-30, [gap~="30"] {
  gap: 50px;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex, [flex=""] {
  display: flex;
}
.mb-50 {
  margin-bottom: 50px;
}
.cover {
  position: relative;
  width: 350px;
  height: 650px;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 14px #0000001a;
}
iframe {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.cnt{
  .mask{
    transition: all 0.5s ease;
    display:none;
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:650px;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.55); /* 浅灰色，透明度30% */
    z-index: 2; /* 确保遮罩在背景图上层 */
  }
  &:hover{
    .mask{
      transition: all 0.5s ease;
      display:flex !important;
    }
  }
}

.preview{
  width:100%;
  height:650px;
}
</style>