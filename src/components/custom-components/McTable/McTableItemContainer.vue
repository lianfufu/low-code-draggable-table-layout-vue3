<template>
  <div class="cnt">
    <div class="container" :style="{paddingBottom:padding+'px',paddingTop:padding+'px'}">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props=defineProps({
  padding:{
    type:Number,
    default:0
  },
  contentBgc:{
    type:String,
    default:"#e6e6e6",
  }
});
// export default {
//   name: "McTableItemContainer",
//   props:{
//     padding:{
//       type:Number,
//       default:0
//     },
//     contentBgc:{
//       type:String,
//       default:"#e6e6e6",
//     },
//     // height:{
//     //   type:Number,
//     //   default:0,
//     // }
//   },
// };
</script>

<style lang="scss" scoped>
</style>