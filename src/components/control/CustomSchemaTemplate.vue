<template>
  <ul>
    <li v-for="(item,key,index) in curFields" :key="index">
      <component v-if="item.type!=='noShow'" :is="getComponentName(item.type)" v-bind="item" v-model="component[key]">
        <custom-schema-template v-if="item.child" :component="component[key]" :cur-fields="item.child"/>
      </component>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props=withDefaults(defineProps<{
  component:Object;
  curFields:Object;
}>(),{
  component:()=>({}),
  curFields:()=>({})
});

// const validCurFields=computed(()=>props.curFields.filter(item=>item.type!=='noShow'));
function getComponentName(type:string|undefined){
  console.log("schema-"+type);
  return "schema-"+type;
}
</script>

<style scoped lang="scss">

</style>