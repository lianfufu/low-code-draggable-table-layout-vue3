<template>
  <div class="mc-img">
    <img :src="computedImgUrl" alt="占位图片" :style="{borderRadius:radius+'px'}"/>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props=withDefaults(defineProps<{
  imagePath:string,
  radius:number
}>(),{
  radius:0,
  imagePath:"https://img01.yzcdn.cn/public_files/2019/03/05/2b60ed750a93a1bd6e17fc354c86fa78.png!large.webp"
});
const computedImgUrl=computed(()=>{
  return props.imagePath?props.imagePath:"https://img01.yzcdn.cn/public_files/2019/03/05/2b60ed750a93a1bd6e17fc354c86fa78.png!large.webp";
});
</script>

<style lang="scss" scoped>
.mc-img {
  width: 100%;
  img{
    overflow:hidden;
    width:100%;
  }
}
</style>
