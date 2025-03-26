<template>
  <div class="body">
    <ListWidgetsComponents/>
    <CenterDesignCanvas/>
    <WidgetInstanceConfig/>
  </div>
</template>

<script setup lang="ts">
import ListWidgetsComponents from "@/components/designview-components/core-design-components/ListWidgetsComponents.vue";
import CenterDesignCanvas from "@/components/designview-components/core-design-components/CenterDesignCanvas.vue";
import WidgetInstanceConfig from "@/components/designview-components/core-design-components/WidgetInstanceConfig.vue";

</script>

<style scoped lang="scss">
.body{
  display: flex;
  margin-top: 58px;
  height: calc(100vh - 58px);
}
</style>