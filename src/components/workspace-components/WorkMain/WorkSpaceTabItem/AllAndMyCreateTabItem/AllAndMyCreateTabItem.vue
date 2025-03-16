<template>
  <div class="listPanelFillHeight__1avGJ" id="workFileListPanel">
    <DesignEntranceCard/>
    <ListWorkRecordsPanel/>
    <div id="contentReload"></div>
  </div>
</template>

<script setup lang="ts">

import ListWorkRecordsPanel
  from "@/components/workspace-components/WorkMain/WorkSpaceTabItem/AllAndMyCreateTabItem/WorkRecordsPanel.vue";
import DesignEntranceCard
  from "@/components/workspace-components/WorkMain/WorkSpaceTabItem/AllAndMyCreateTabItem/DesignEntranceCard.vue";


</script>

<style scoped lang="scss">
.listPanelFillHeight__1avGJ {
  min-height: calc(100vh - 108px);
  position: relative;
}

</style>