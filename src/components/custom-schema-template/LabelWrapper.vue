<template>
  <div class="label-wrapper p10 ">
    <div class="w80 f13 f-grey">{{props.label}}</div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props=withDefaults(defineProps<{label:string}>(),{
  label:"无标签"
});
</script>

<style scoped lang="scss">
.label-wrapper{
  display:flex;
  align-items: center;
}
</style>