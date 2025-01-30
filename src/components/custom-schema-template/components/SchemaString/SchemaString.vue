<template>
  <LabelWrapper :label="label">
    <el-input v-model="myValue" size='small'/>
  </LabelWrapper>
</template>

<script setup lang="ts">
// 使用自定义的 hook 来获取 props
import useSchemaData from "@/hooks/useSchemaBasicData";
import schemaPropsDef from '@/components/custom-schema-template/commonSchemaPropsDef';

const props = defineProps({
  ...schemaPropsDef,
  modelValue:{type:String,default:"默认文本"},
});
const emits=defineEmits(["update:modelValue"]);
const { myValue, myOptions } = useSchemaData(props,emits);
</script>

<style scoped lang="scss">

</style>