<template>
  <div class="cnt" :style="getWrapperStyle">
    <div class="cnt-header clearfix" :style="{backgroundColor:headBgc,borderRadius :props.borderRadius+'px'}">
      <slot name="header"></slot>
    </div>
    <div class="container" :style="{paddingBottom:padding+'px',paddingTop:padding+'px',borderRadius:borderRadius+'px'}">
      <div :style="getCoreContentStyle">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props=withDefaults(defineProps<{
  padding:number,
  title:string,
  headBgc:string,
  minHeight:number,
  contentBgc:string,
  marginLeftAndRight:number,
  marginTopAndBottom:number,
  borderRadius:number,
  borderWidth:number,
  borderStyle:string,
  borderColor:string
}>(),{
  padding:0,
  title:"容器标头",
  headBgc:"#DD6161",
  minHeight:50,
  contentBgc:"#e6e6e6",
  borderRadius:5,
  marginLeftAndRight:10,
  marginTopAndBottom:10,
  borderWidth:1,
  borderStyle:'solid',
  borderColor:'#13ce66'
});
const getCoreContentStyle=computed(()=>{
  return {
    minHeight: props.minHeight+'px',
    backgroundColor: props.contentBgc,
    borderBottomLeftRadius :props.borderRadius+'px',
    borderBottomRightRadius :props.borderRadius+'px',
  }
});
const getWrapperStyle=computed(()=>{
  return {
    borderRadius:props.borderRadius+'px',
    marginLeft:props.marginLeftAndRight+'px',
    marginRight:props.marginLeftAndRight+'px',
    marginTop:props.marginTopAndBottom+'px',
    marginBottom:props.marginTopAndBottom+'px',
    borderWidth:props.borderWidth+'px',
    borderStyle:props.borderStyle,
    borderColor:props.borderColor
  }
});
// export default {
//   name: "McContainer",
//   props:{
//     padding:{
//       type:Number,
//       default:0
//     },
//     title:{
//       type:String,
//       default:"容器标头",
//     },
//     headBgc:{
//       type:String,
//       default:"#DD6161",
//     },
//     minHeight:{
//       type:Number,
//       default:50
//     },
//     contentBgc:{
//       type:String,
//       default:"#e6e6e6",
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
  overflow: hidden;
  .cnt-header{
    text-align: center;
    min-height: 30px;
  }
  //.container{
  //  border: 1px solid #13ce66;
  //}
}
.clear {
  *zoom: 1
}
.clearfix:before,
.clearfix:after {

  display: table;

  line-height: 0;

  content: "";

}
.clearfix:after {
  clear: both;
}
</style>