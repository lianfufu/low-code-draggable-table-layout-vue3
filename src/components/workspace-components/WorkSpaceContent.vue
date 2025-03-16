<template>
  <div class="content__1ypOV">
    <WorkBenchHeader/>
    <MyAndKeepUpContent v-if="pickedTab===EnumTabType.My||pickedTab===EnumTabType.KeepUp"/>
    <ResourceCommunity v-else-if="pickedTab===EnumTabType.ResourceCommunity"/>
  </div>
</template>

<script setup lang="ts">
import ResourceCommunity from "@/components/workspace-components/ResourceCommunity.vue";
import WorkBenchHeader from "@/components/workspace-components/WorkBenchHeader.vue";
import MyAndKeepUpContent from "@/components/workspace-components/MyAndKeepUpContent.vue";
import {EnumTabType} from "@/components/workspace-components/EnumTabType";


const props=withDefaults(defineProps<{ pickedTab:EnumTabType }>(),()=>({
  pickedTab:EnumTabType.My
}));

</script>

<style scoped lang="scss">
.lightTheme .content__1ypOV {
  color: #202020;
}
.content__1ypOV {
  color: #fff;
  height: 100vh;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: calc(100% - 220px);
}
</style>