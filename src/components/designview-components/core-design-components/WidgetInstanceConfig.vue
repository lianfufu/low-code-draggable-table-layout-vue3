<template>
  <div class="control-config">
    <custom-schema-template
        v-if="curComponent"
        :component="curComponent"
        :curFields="curFields"/>
    <div class="widget-config-source">
      <span style="color:dodgerblue" class="f13">物料数据：</span>
      <json-viewer v-if="curComponent"
                   :value="curComponent"
                   :expand-depth="6"
      ></json-viewer>
      <span v-else style="word-break:break-all; word-wrap:break-word;">无</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import JsonViewer from "vue-json-viewer"
import {computed} from "vue";
import {useStore} from "@/store";
import CustomSchemaTemplate from "@/components/control/CustomSchemaTemplate.vue";

const store=useStore();
const curComponent=computed(()=>{
  return store.curComponent;
});
const curFields=computed(()=>{
  return store.curFields;
});


</script>

<style scoped lang="scss">
.control-config{
  width: 100%;
  height: 100%;
  padding:10px;
  background-color: #FFFFFF;
  overflow-y: auto;
}
.widget-config-source{
  padding:10px;
}
</style>