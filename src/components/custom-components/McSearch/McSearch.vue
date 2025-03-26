<template>
  <div class="mc-button-wrapper">
    <van-search
        :style="searchHeight"
        v-model="value"
        shape="round"
        :background="searchBgc"
        :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import {computed,ref} from "vue";

const value=ref('');
const props=withDefaults(defineProps<{
  placeholder:string,
  searchBgc:string,
  height:number,
}>(),{
  placeholder:"请输入搜索内容",
  searchBgc:"#4fc08d",
  height:30
});

const searchHeight=computed(()=>({
  "--van-search-input-height":props.height+'px'
}));
</script>

<style scoped lang="scss">
.mc-button-wrapper{
  overflow:hidden;
}
</style>