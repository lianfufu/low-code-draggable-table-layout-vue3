<template>
<!--  <div class="mc-img-bgc" :style="[getWrapperStyle, { paddingTop: aspectRatioPadding }]">-->
<!--    <slot></slot>-->
<!--  </div>-->
  <div class="background-container" ref="containerRef" :style="getWrapperStyle">
    <slot class="content-slot"></slot>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, onMounted, watch, nextTick} from "vue";

const props=withDefaults(defineProps<{
  imagePath:string,
  padding:number,
  minHeight:number,
  marginLeftAndRight:number,
  marginTopAndBottom:number,
  borderLeftTopRadius:number,
  borderRightTopRadius:number,
  borderLeftBottomRadius:number,
  borderRightBottomRadius:number,
  borderWidth:number,
  borderColor:string,
  isShowPic:boolean,
  containerBgc:string,
  isShowMask:boolean
}>(),{
  padding:0,
  minHeight:50,
  borderLeftTopRadius:5,
  borderRightTopRadius:5,
  borderLeftBottomRadius:5,
  borderRightBottomRadius:5,
  marginLeftAndRight:10,
  marginTopAndBottom:10,
  borderWidth:1,
  borderColor:'#13ce66',
  imagePath:"https://img01.yzcdn.cn/public_files/2019/03/05/2b60ed750a93a1bd6e17fc354c86fa78.png!large.webp",
  isShowPic:true,
  containerBgc:"#ffffff",
  isShowMask:false
});

const computedImgUrl=computed(()=>{
  return props.imagePath?props.imagePath:"https://img01.yzcdn.cn/public_files/2019/03/05/2b60ed750a93a1bd6e17fc354c86fa78.png!large.webp";
});

const getCoreContentStyle=computed(()=>{
  return {
    minHeight: props.minHeight+'px'
  }
});

//实现高度自适应
const aspectRatio = ref(0); // 宽高比
const height=ref(props.minHeight);
const containerRef=ref(null);
// 动态加载图片并计算宽高比
const loadImageSize = async () => {
  const img = new Image();
  img.src = computedImgUrl.value;
  await new Promise((resolve) => (img.onload = resolve));
  const { naturalWidth, naturalHeight } = img;
  if (naturalWidth > 0) {
    aspectRatio.value = (naturalHeight / naturalWidth) * 100;
  }
};

// 组件挂载后加载图片
onMounted(loadImageSize);
watch(()=>computedImgUrl.value,(value) => {
  nextTick(async ()=>{
    const curWidth=containerRef.value?.offsetWidth;
    if(curWidth){
      await loadImageSize();
      height.value=curWidth*aspectRatio.value/100;
      console.log(curWidth*aspectRatio.value/100,"/100",`${curWidth}*${aspectRatio.value}`);
    }
  });
},{
  immediate:true
});

// 计算 padding-top 百分比
const aspectRatioPadding = computed(() =>
    aspectRatio.value > 0 ? `${aspectRatio.value}%` : 'auto'
);
let lastHeight=0;
watch(()=>props.isShowPic,value=>{
  if(!value){
    lastHeight=height.value;
    height.value=props.minHeight;
  }else{
    if(lastHeight)
      height.value=lastHeight;
  }
});
// const showMask = ref(false); // 控制遮罩显示状态
const getWrapperStyle=computed(()=>{
  return {
    padding:props.padding+'px',
    width:`calc(100% - ${2*props.marginLeftAndRight})`,
    backgroundColor:props.containerBgc,
    backgroundImage: props.isShowPic?`url(${computedImgUrl.value})`:'',
    backgroundSize: '100% auto', // 宽度100%，高度按比例缩放
    backgroundRepeat: 'no-repeat',
    borderStyle:"solid",
    borderBottomLeftRadius:props.borderLeftBottomRadius+'px',
    borderTopLeftRadius:props.borderLeftTopRadius+'px',
    borderBottomRightRadius:props.borderRightBottomRadius+'px',
    borderTopRightRadius:props.borderRightTopRadius+'px',
    marginLeft:props.marginLeftAndRight+'px',
    marginRight:props.marginLeftAndRight+'px',
    marginTop:props.marginTopAndBottom+'px',
    marginBottom:props.marginTopAndBottom+'px',
    borderWidth:props.borderWidth+'px',
    borderColor:props.borderColor,
    minHeight: Math.max(height.value,props.minHeight)+'px',
    '--mask-display': props.isShowMask ? 'block' : 'none'
  }
});

</script>

<style lang="scss" scoped>
//.mc-img-bgc {
//  width: 100%;
//  img{
//    overflow:hidden;
//    width:100%;
//  }
//}
.background-container {
  //width: 100%;
  overflow:hidden;
  position: relative; /* 关键：确保插槽绝对定位基于此容器 */
}

/* 伪元素撑开高度 */
.background-container::before {
  content: '';
  display: block;
  width: 100%;
  //padding-bottom: 56.25%; /* 按图片宽高比计算（示例 16:9）*/
  pointer-events: none; /* 防止伪元素阻挡插槽交互 */
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: var(--mask-display);
  background: rgba(128, 128, 128, 0.5); /* 浅灰色，透明度30% */
  pointer-events: none; /* 允许穿透交互 */
  z-index: 1; /* 确保遮罩在背景图上层 */
}

/* 背景图设置 */
//.background-container {
//  background-image: url('https://img01.yzcdn.cn/public_files/2019/03/05/2b60ed750a93a1bd6e17fc354c86fa78.png!large.webp');
//  background-size: 100% auto; /* 宽度100%，高度按比例自适应 */
//  background-repeat: no-repeat;
//}

/* 插槽内容定位 */
.content-slot {
  position: absolute;
  top: 0; /* 强制顶部对齐 */
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0; /* 清除默认间距 */
  z-index: 2;
}
</style>
