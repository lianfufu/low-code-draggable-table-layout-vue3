<template>
  <div id="canvasEditDiv" class="canvasStage__rV9Zn cursor-default__30YK7">
    <div class="canvasStageBg___LEkS" style="background: rgb(245, 245, 245);">
      <CenterDesignCanvas/>
    </div>
  </div>
</template>

<script setup lang="ts">

import CenterDesignCanvas from "@/components/designview-components/core-design-components/CenterDesignCanvas.vue";
</script>

<style scoped lang="scss">
.canvasStage__rV9Zn {
  background-color: #2c2c32;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 48px;
}

.canvasStage__rV9Zn>.canvasStageBg___LEkS {
  content: "";
  display: flex;
  height: 2000px;
  pointer-events: none;
  position: absolute;
  width: 100%;
  overflow-y: scroll;
}

</style>