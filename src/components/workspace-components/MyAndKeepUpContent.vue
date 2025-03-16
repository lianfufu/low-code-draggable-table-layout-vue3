<template>
  <div class="contentBox__1gYQr">
    <div id="contentBoxLeft" class="contentBoxleft__1uphq" style="width: calc(100% - 46px); overflow-y: auto;">
      <div id="contentScrollId" style="position: relative;">
        <ResourcePreviewCard/>
        <WorkSpaceTabPanel/>
      </div>
    </div>
    <RightPanel/>
  </div>
</template>

<script setup lang="ts">

import ResourcePreviewCard from "@/components/workspace-components/WorkMain/ResourcePreviewCard.vue";
import WorkSpaceTabPanel from "@/components/workspace-components/WorkMain/WorkSpaceTabPanel.vue";
import ListWorkRecordsPanel from "@/components/workspace-components/WorkMain/WorkSpaceTabItem/AllAndMyCreateTabItem/WorkRecordsPanel.vue";
import RightPanel from "@/components/workspace-components/RightPanel.vue";
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



</style>