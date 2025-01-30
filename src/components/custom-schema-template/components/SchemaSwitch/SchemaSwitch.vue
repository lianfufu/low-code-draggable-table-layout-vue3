<template>
  <LabelWrapper :label="label">
    <div style="text-align: right;flex:1">
      <el-switch v-model="myValue" active-text="显示" active-color="#115BD4"></el-switch>
    </div>
  </LabelWrapper>
</template>

<script setup lang="ts">
// 使用自定义的 hook 来获取 props
import useSchemaData from "@/hooks/useSchemaBasicData";
import schemaPropsDef from '@/components/custom-schema-template/commonSchemaPropsDef';

const props = defineProps({
  ...schemaPropsDef,
  modelValue:{type:Boolean,default:true},
});
const emits=defineEmits(["update:modelValue"]);
const { myValue, myOptions } = useSchemaData(props,emits);

// import myWriteSchemaMixin from "@/mixin/myWriteSchemaMixin";
// export default {
//   name: "SchemaSwitch",
//   mixins:[myWriteSchemaMixin],
//   props:{
//     value:{
//       type:Boolean,
//       default:true
//     }
//   },
// }
</script>

<style scoped lang="scss">
</style>