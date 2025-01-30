<template>
  <LabelWrapper :label="label">
    <el-upload
        class="avatar-uploader"
        :action="uploadUrl"
        :headers="uploadHeader"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
    >
      <img v-if="myValue" :src="myValue" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
  </LabelWrapper>
</template>

<script setup lang="ts">
import schemaPropsDef from '@/components/custom-schema-template/commonSchemaPropsDef';
import useSchemaData from '@/hooks/useSchemaBasicData';

// 使用自定义的 hook 来获取 props
const props = defineProps({
  ...schemaPropsDef,
  modelValue:{type:String,default:""}
});
const emits=defineEmits(["update:modelValue"]);
const { myValue, myOptions } = useSchemaData(props,emits);

import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'

// const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  // console.log("执行上传成功的逻辑",response);
  myValue.value = response;
  // console.log("执行上传成功的逻辑后",myValue.value);
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  // if (rawFile.type !== 'image/jpeg') {
  //   ElMessage.error('Avatar picture must be JPG format!')
  //   return false
  // } else if (rawFile.size / 1024 / 1024 > 2) {
  //   ElMessage.error('Avatar picture size can not exceed 2MB!')
  //   return false
  // }
  return true
}

//上传发起请求的逻辑：
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzc1ZjQ3NGYxZDIyMGZkZjIyOTM2NzQiLCJ1c2VybmFtZSI6Imtha2ExMyIsInBob25lIjoiMTU2MzAxMDYyMTUiLCJlbWFpbCI6IjE0MjM1MzM2NEBxcy5jb20iLCJpbWFnZSI6bnVsbCwiY2hhbmVsRGVzIjoi6L-Z5piv5LiA5q616aKR6YGT5o-P6L-wIiwiZmluZXNDb3VudCI6MCwiY3JlYXRlQXQiOiIyMDI1LTAxLTAyVDAyOjAzOjU2LjUxMFoiLCJ1cGRhdGVBdCI6IjIwMjUtMDEtMDJUMDI6MDM6NTYuNTEwWiIsIl9fdiI6MCwiaWF0IjoxNzM1NzgzNTUwLCJleHAiOjE3MzU4Njk5NTB9.29ygiYg7TnamxaKqvh1bvQt8G-W2yR7RHPqXouHyhJk";
const uploadUrl=process.env.VUE_APP_UPLOAD_API + 'api/v1/user/onload/files';
const uploadHeader={
  Authorization: `${token}`
}
</script>

<style scoped lang="scss">
:deep(.el-upload){
  img{
    width:58px !important;
  }
}
</style>