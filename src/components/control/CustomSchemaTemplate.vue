<template>
  <ul>
    <li v-for="(item,key,index) in curFields" :key="index">
      <component :is="getComponentName(item.type)" v-bind="item" v-model="component[key]">
        <custom-schema-template v-if="item.child" :component="component[key]" :cur-fields="item.child"/>
      </component>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props=withDefaults(defineProps<{
  component:Object;
  curFields:Object;
}>(),{
  component:()=>({}),
  curFields:()=>({})
});
function getComponentName(type:string|undefined){
  console.log("schema-"+type);
  return "schema-"+type;
}
</script>

<style scoped lang="scss">

</style>