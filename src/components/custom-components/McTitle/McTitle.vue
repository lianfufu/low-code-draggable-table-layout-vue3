<template>
  <div class="title ellipsis-1">
    <div :style="getStyles">{{title}}</div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props=withDefaults(defineProps<{
  title:string,
  model:string,
  styles:Object,
}>(),{
  title:"默认文本",
  model:"默认文本",
  styles:()=>({}),
});
const getStyles=computed(()=>{
  if(!props.styles||JSON.stringify(props.styles)==="{}"){
    return {
      fontSize:"20px",
      color:"black",
      textAlign:"left"
    }
  }else{
    return{
      fontSize:props.styles.titleSize+"px",
      color:props.styles.titleColor,
      textAlign:props.model,
    }
  }
});
// export default {
//   name: "McTitle",
//   props:{
//     title:{
//       type:String,
//       default:"默认文本"
//     },
//     model:{
//       type:String,
//       default:"默认文本"
//     },
//     styles:{
//       type:Object,
//       default:()=>{}
//     }
//   },
//   computed:{
//     getStyles(){
//       if(!this.styles){
//         return {
//           fontSize:"20px",
//           color:"black",
//           textAlign:"left"
//         }
//       }else{
//         return{
//           fontSize:this.styles.titleSize+"px",
//           color:this.styles.titleColor,
//           textAlign:this.model,
//         }
//       }
//     }
//   }
// };
</script>

<style lang="scss" scoped>
.title{
  padding:0 10px;
}
</style>
