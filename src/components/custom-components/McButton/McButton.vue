<template>
  <div class="mc-button-wrapper" :style="btnWrapperStyle">
    <span :style="textStyle">{{buttonText}}</span>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props=withDefaults(defineProps<{
  buttonText:string,
  buttonTextColor:string,
  buttonBgc:string,
  borderWidth:number,
  borderColor:string,
  fontSize:number,
  padding:number,
  borderRadius:number,
  marginLeftAndRight:number,
  marginTopAndBottom:number,
}>(),{
  buttonText:"点击一下",
  buttonTextColor:"#ffffff",
  buttonBgc:"#008efa",
  borderColor:"#000000",
  borderWidth:1,
  fontSize:16,
  padding:7,
  borderRadius:5,
  marginLeftAndRight:10,
  marginTopAndBottom:10,
});
const btnWrapperStyle=computed(()=>{
  return {
    textAlign: "center",
    buttonBgc:props.buttonBgc,
    padding:props.padding+'px',
    backgroundColor:props.buttonBgc,
    borderColor:props.borderColor,
    borderWidth:props.borderWidth+'px',
    borderRadius:props.borderRadius+'px',
    marginLeft:props.marginLeftAndRight+'px',
    marginRight:props.marginLeftAndRight+'px',
    marginTop:props.marginTopAndBottom+'px',
    marginBottom:props.marginTopAndBottom+'px'
  }
});
const textStyle=computed(()=>{
  return {
    color:props.buttonTextColor,
    fontSize:props.fontSize+'px',
    lineHeight:props.fontSize+'px',
    buttonTextColor:props.buttonTextColor
  }
})
</script>

<style scoped lang="scss">
.mc-button-wrapper{
  overflow:hidden;
  &:hover{
    cursor: pointer;
  }
}
</style>