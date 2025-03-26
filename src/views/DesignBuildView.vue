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
import {watch} from "vue";
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


//页面宽度变化
const designStore=useDesignStore();
onMounted(()=>{
  window.addEventListener("resize",designStore.windowResize);
});
onBeforeUnmount(()=>{
  window.removeEventListener("resize",designStore.windowResize);
});
watch(()=>designStore.mainCanvasWidth,value=>{
  console.log(designStore.mainCanvasWidth,value,"designStore.mainCanvasWidth");
});
</script>

<style scoped lang="scss">

</style>