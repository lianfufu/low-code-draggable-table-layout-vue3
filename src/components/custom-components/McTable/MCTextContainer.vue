<template>
  <div class="mc-text-container" :style="{height:containerHeight+'px'}">

  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props=defineProps({
  containerHeight:{
    type:Number,
    default:30
  },
  contentBgc:{
    type:String,
    default:"#fff",
  }
});
const getCoreContentStyle=computed(()=>{
  return {
    minHeight: props.containerHeight+'px',
    backgroundColor: props.contentBgc,
  }
})
// export default {
//   name: "MCTextContainer",
//   props:{
//     containerHeight:{
//       type:Number,
//       default:30
//     }
//   },
//   computed:{
//     getCoreContentStyle(){
//       return {
//         minHeight: this.minHeight+'px',
//         backgroundColor: this.contentBgc,
//       }
//     }
//   }
// };
</script>

<style lang="scss" scoped>
.cnt{
  .cnt-header{
    text-align: center;
    line-height: 30px;
    height:30px;
  }
  .container{
    border: 1px solid #13ce66;
  }
}
</style>