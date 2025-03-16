<template>
  <div class="rightToolPanel__2EXTW" id="rightPanelProcess">
    <div class="rightPanelBox__1BMup">
      <div class="customScrollContainer__3XqlB">
        <div class="customScrollPanel__2D7nr" id="editRightPanel">
          <WidgetInstanceConfig/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import WidgetInstanceConfig from "@/components/designview-components/core-design-components/WidgetInstanceConfig.vue";
</script>

<style scoped lang="scss">
.lightTheme .rightToolPanel__2EXTW {
  background-color: #fff;
}
.rightToolPanel__2EXTW {
  background: #2e2f33;
  box-shadow: 0 0 0 1px #ebeced;;
  box-sizing: border-box;
  display: flex;
  height: calc(100% - 48px);
  position: fixed;
  right: 0;
  top: 48px;
  z-index: 101;
}
.rightPanelBox__1BMup {
  height: 100%;
  scrollbar-width: none;
  width: 360px;
}
.customScrollContainer__3XqlB, .customScrollPanel__2D7nr {
  height: 100%;
  position: relative;
  width: 100%;
}
.customScrollPanel__2D7nr {
  display: inline-block;
  overflow: auto;
  vertical-align: top;
}
.customScrollContainer__3XqlB, .customScrollPanel__2D7nr {
  height: 100%;
  position: relative;
  width: 100%;
}

</style>