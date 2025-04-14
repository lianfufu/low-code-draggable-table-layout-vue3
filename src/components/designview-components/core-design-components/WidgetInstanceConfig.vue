<template>
  <div class="control-config">
    <div class="title_container" v-show="curComponent">
      <div class="title">
        {{curComponent?.name}}组件
      </div>
    </div>
    <custom-schema-template
        v-if="curComponent"
        :component="curComponent"
        :curFields="curFields"/>
    <template v-if="!curComponent&&designStore.pickedDesignMode!==2">
      <h4 style="padding:10px;font-weight: 700">页面全局样式配置</h4>
      <custom-schema-template :component="pageComponent" :curFields="pageComponentFields"/>
    </template>
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
import {useDesignStore} from "@/store/designStatusStore";
import CustomSchemaTemplate from "@/components/control/CustomSchemaTemplate.vue";

const store=useStore();
const curComponent=computed(()=>{
  return store.curComponent;
});
const curFields=computed(()=>{
  return store.curFields;
});

const designStore=useDesignStore();
const pageComponent=computed(()=>{
  return designStore.currentPageData?.pageGlobalStyles;
});
const pageComponentFields={
  padding:{
    label:"页外边距",
    type:"number",
    value:10
  },
  backgroundColor:{
    label:"页背景色",
    type:"color",
    value:"#ffffff"
  }
}
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
.title_container{
  width: 80%;
  height:50px;
  line-height: 50px;
  text-align: center;
  margin: 0 auto;
  font-size: 18px;
  font-weight:700;
  font-family: "微软雅黑", "Microsoft YaHei", "思源黑体", "Source Han Sans", sans-serif;
  color: #00ddfa;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid #f2f6f8;
  box-shadow: 3px 2px rgba(0, 0, 0, 0), 3px 2px 2px 3px rgba(0, 0, 0, 0), 2px 1px 3px 1px rgb(0 0 0 / 8%);
  .title{
    width:160px;
    margin: 0 auto;
    background: url("@/assets/textdec.jpg") no-repeat;
    background-position: center center;
    background-size: 100% auto;
  }
}
</style>