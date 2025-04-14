<template>
  <div class="main editPage__oskV2 lightTheme" data-preferred-theme="LIGHT" data-preferred-theme-light="blueThemeLight">
    <RightToolPanel/>
    <LeftMenuPanel/>
    <DesignViewHeader/>
    <ToolBar/>
    <div :style="{width:designStore.mainCanvasWidth+'px',marginLeft:(designStore.leftMenuPanelWidth+40)+'px'}" style="background-color:rgb(245, 245, 245);padding-top: 50px;">
      <CenterDesignCanvas v-if="designStore.pickedBarModel==='Design'&&designStore.pickedDesignMode!==2"/>
      <CenterNavCanvas v-if="designStore.pickedBarModel==='Design'&&designStore.pickedDesignMode===2"/>
      <CenterPreviewCanvas v-if="designStore.pickedBarModel==='Preview'"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRaw, watch} from "vue";
import DesignViewHeader from "@/components/designview-components/DesignViewHeader.vue";
import RightToolPanel from "@/components/designview-components/RightToolPanel.vue";
import LeftMenuPanel from "@/components/designview-components/LeftMenuPanel.vue";
import ToolBar from "@/components/designview-components/ToolBar.vue";
import MainCanvas from "@/components/designview-components/MainCanvas.vue";
import CenterDesignCanvas from "@/components/designview-components/core-design-components/CenterDesignCanvas.vue";
import CenterPreviewCanvas from "@/components/designview-components/core-design-components/CenterPreviewCanvas.vue";
import CenterNavCanvas from "@/components/designview-components/core-design-components/CenterNavCanvas.vue";
import {useDesignStore} from "@/store/designStatusStore";
import {onBeforeUnmount, onMounted} from "vue";
import {useRoute} from "vue-router";
import {useUserStore} from "@/store/userStore";


//页面宽度变化
const designStore=useDesignStore();
onMounted(()=>{
  designStore.pickedDesignMode=0;
  window.addEventListener("resize",designStore.windowResize);
});
onBeforeUnmount(()=>{
  window.removeEventListener("resize",designStore.windowResize);
});
watch(()=>designStore.mainCanvasWidth,value=>{
  console.log(designStore.mainCanvasWidth,value,"designStore.mainCanvasWidth");
});

//更新处理当前设计页的产品id信息，并更新设计store的相应值
const route=useRoute();
const userStore=useUserStore();
const productId=route.query.productId;
if(productId){
  const matchedProducts=userStore.userCreatedProducts.filter(item=>item.id===productId);
  if(matchedProducts&&matchedProducts.length>0){
    const matched=matchedProducts[0];
    designStore.product=matched;
    designStore.updateDesignStatusCausedByProductChanged(designStore.product);
  }
}
// //防止前后两次进入页面的product是同一个，而导致的重复使用就有的curComponentData的问题
// currentPageName=designStore.product.pages[0].pageWidgets
// designStore.designStore.product.configs.pageGlobalStyles
// //更新导航信息
// curNavigationConfig.value=product.value.configs.navigations;
// //将当前选中的页面设置为当前产品的第一个页面
// currentPageName.value=product.value.pages[0].name;
// currentPageData.value = JSON.parse(JSON.stringify(toRaw(pageNamesWithPageDataMap.value.get(currentPageName.value)!)));//todo 点击保存时，再会让他取影响我的作品产品内容。此处是隔离引用
</script>

<style scoped lang="scss">

</style>