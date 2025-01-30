<template>
  <div class="wrap">
    <div class="wrap-body" :style="bodyStyle">
      <ul class="tabs" :style="{width:tabWidth}">
        <li v-for="(item,index) in tabList" :key="index" class="tab-item" :style="{width:tabItemWidth}">
          <img class="tab-item-img" :style="imgStyle" v-show="attrs.type==='image-text'||attrs.type==='image'" :src="item.image?item.image:'http://127.0.0.1:3000/defaultabimg.png'" alt="BannersImg"/>
          <span :style="textStyle" class="ellipsis-1" v-show="attrs.type==='image-text'||attrs.type==='text'">{{item.label}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props=withDefaults(defineProps<{
  tabList:any[],
  attrs:object,
  styles:object,
}>(),{
  tabList:()=>[],
  attrs:()=>({}),
  styles:()=>({}),
});
const tabItemWidth=computed(()=>`${430/props.attrs.max}px`);
const tabWidth=computed(()=>{
  const width=props.tabList.length*430/props.attrs.max;
  return `${width<=430?430:width}px`;
});
const bodyStyle=computed(()=>{
  return{
    color:props.styles.titleColor?props.styles.titleColor:"#000000",
    backgroundColor:props.styles.cmpBackground?props.styles.cmpBackground:"#ffffff",
    fontSize:props.styles.fontSize+'px',
  }
});
const imgStyle=computed(()=>{
  return {
    width:`${props.styles.imgWidth}%`,
    padding:props.styles.imgPadding+"px",
    borderRadius:props.styles.imgRadius+"px",
    marginTop:props.styles.cmpUpperPadding+"px",
  }
});
const textStyle=computed(()=>{
  return {
    marginBottom:props.styles.cmpLowerPadding+"px",
  }
});
// export default {
//   name: 'McTab',
//   props:{
//     tabList:{
//       type:Array,
//       default:()=>[]
//     },
//     attrs:{
//       type:Object,
//       default:()=>{}
//     },
//     styles:{
//       type:Object,
//       default:()=>{}
//     }
//   },
//   computed:{
//     tabItemWidth(){
//       return `${430/this.attrs.max}px`
//     },
//     tabWidth(){
//       const width=this.tabList.length*430/this.attrs.max;
//       return `${width<=430?430:width}px`
//     },
//     bodyStyle(){
//       return{
//         color:this.styles.titleColor?this.styles.titleColor:"#000000",
//         backgroundColor:this.styles.cmpBackground?this.styles.cmpBackground:"#ffffff",
//         fontSize:this.styles.fontSize+'px',
//       }
//     },
//     imgStyle(){
//       return {
//         width:`${this.styles.imgWidth}%`,
//         padding:this.styles.imgPadding+"px",
//         borderRadius:this.styles.imgRadius+"px",
//         marginTop:this.styles.cmpUpperPadding+"px",
//       }
//     },
//     textStyle(){
//       return {
//         marginBottom:this.styles.cmpLowerPadding+"px",
//       }
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.wrap {
  .wrap-body {
    overflow-x:hidden;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }

    .tabs {
      .tab-item {
        display: inline-block;
        text-align: center;

        .tab-item-img {
          width:100%;
          overflow: hidden;
          //height: 100%;
           margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
