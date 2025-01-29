<template>
  <LabelWrapper :label="label">
    <el-slider v-bind="myOptions" show-input class="my-slider" v-model="myValue"/>
  </LabelWrapper>
</template>

<script setup lang="ts">
import schemaPropsDef from '@/components/custom-schema-template/commonSchemaPropsDef';
import useSchemaData from '@/hooks/useSchemaBasicData';

// 使用自定义的 hook 来获取 props
const props = defineProps({
  ...schemaPropsDef,
  value:{type:Number,default:0}
});
const emits=defineEmits(["change","input"]);
const { myValue, myOptions } = useSchemaData(props,emits);

</script>

<style scoped lang="scss">
.schema-number{
  padding:0 10px;
  display:flex;
  align-items: center;
  .label{
    width:70px;
  }
  .my-slider{
    flex:1
  }
}
</style>