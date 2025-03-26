<template>
  <div class="listPanelFillHeight__1avGJ" id="workFileListPanel">
    <ListWorkRecordsPanel/>
    <div id="contentReload"></div>
  </div>
</template>

<script setup lang="ts">

import DesignEntranceCard
  from "@/components/workspace-components/WorkMain/WorkSpaceTabItem/AllAndMyCreateTabItem/DesignEntranceCard.vue";
import ListWorkRecordsPanel
  from "@/components/workspace-components/WorkMain/WorkSpaceTabItem/AllAndMyCreateTabItem/WorkRecordsPanel.vue";
</script>

<style scoped lang="scss">
#workFileListPanel{
  padding-top: 10px;
}
.listPanelFillHeight__1avGJ {
  min-height: calc(100vh - 108px);
  position: relative;
}
</style>