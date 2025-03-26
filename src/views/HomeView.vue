<template>
  <div class="home-view">
    <div :class="['header-content',isStick?'scrolled':'']">
      <div class="logo-wrap"></div>
      <span class="divide-line" style="display: none;"></span>
      <div class="nav-list">
        <a aria-current="page" href="#/dooring/home" class="router-link-active router-link-exact-active nav-list-item">
          <span class="text-14">首页</span>
        </a>
        <a @click="handleAuthAction" class="nav-list-item">
          <span class="text-14">资源社区</span>
        </a>
      </div>
      <div class="work">我的工作台</div>
    <div class="my">
      <div class="flex-center c-theme cursor-pointer">
        <img src="http://www.sunmao-design.top/sunmao/assets-iamge/avatar-4.jpg" class="w-40 h-40 mr-10 box-border p-5 rd-50% bg-#ffffff shadow-lg cursor-pointer el-tooltip__trigger el-tooltip__trigger"></div>
      </div>
    </div>
    <div class="home-body">
      <div class="home">
        <div class="first-page">
          <div class="w-full h-953 bg-#f5f7fd relative">
            <div class="w-full h-full overflow-hidden absolute">
              <div class="block-1"></div>
              <div class="block-2"></div>
              <div class="block-3"></div>
            </div>
            <div class="first-page-container">
              <div class="first-page-left">
                <span class="title">易搭创</span>
                <span class="des mt-40">开启轻松、创意、快速搭建页面！</span>
                <span class="des mt-20 mb-120">无代码拖拽创作平台</span>
                <div class="button" @click="handleAuthAction">
                  <span class="buttom-name">开始设计</span>
                  <span class="buttom-icon"></span>
                </div>
              </div>
              <div class="first-page-right">
                <img src="https://www.sunmao-design.top/sunmao/admin/assets/show.adc2ad29.jpg" class="w-full h-full rd-24" autoplay="autoplay" loop="loop" muted="muted"></div>
            </div>
          </div>
        </div>
        <FastCreatePage/>
        <MultiScenesPage @handleAuthAction="handleAuthAction"/>
        <JoinUsPage @handleAuthAction="handleAuthAction"/>
      </div>
    </div>
  </div>
  <BlurOverlay v-model="showOverlay" />
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import FastCreatePage from "@/components/home-components/FastCreatePage.vue";
import MultiScenesPage from "@/components/home-components/MultiScenesPage.vue";
import JoinUsPage from "@/components/home-components/JoinUsPage.vue";
import BlurOverlay from "@/views/BlurOverlay.vue";

//管理用户登录信息
const showOverlay = ref(false)
const isLoggedIn = ref(false) // 根据实际登录状态修改

const handleAuthAction = () => {
  if (!isLoggedIn.value) {
    showOverlay.value = true
  } else {
    // 执行正常操作
  }
}

const isStick=ref(false);

onMounted(()=>{
  window.addEventListener("scroll",scrollHandler);
});
onBeforeUnmount(()=>{
  window.removeEventListener("scroll",scrollHandler);
});
function scrollHandler(){
  isStick.value = window.scrollY > 56;
}
</script>

<style scoped lang="scss">
.home-view{
  height: 100vh;
  .header-content{
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    width: 100%;
    padding: 6px 46px 6px 44px;
    box-sizing: border-box;
    margin: 0 auto;
    background: transparent;
    transition: background-color .6s ease;
    .logo-wrap{
      display: inline-block;
      width: 40px;
      height: 40px;
      background: url(../assets/yunda.png) 0px 0px / contain no-repeat;
    }
    .nav-list{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: auto;
      height: 100%;
      position: relative;
      flex-shrink: 0;
      margin: 0 auto 0 65px;
      .nav-list-item{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 18px;
        margin-right: 30px;
        border-radius: 8px;
        position: relative;
        cursor: pointer;
      }
      .router-link-active {
        font-weight: 600;
        background: #f5f7fd;
      }
    }
    .work{
      height: 36px;
      padding: 0 10px;
      margin-right: 40px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #1e6fff;
      border: 1px solid #fff;
      border-radius: 8px;
      flex-shrink: 0;
      font-size: 14px;
      user-select: none;
      cursor: pointer;
    }
    .my {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }
  .home-body{
    height: calc(100vh - 56px);
    .home{
      .first-page{
        .block-1 {
          width: 42%;
          height: 64%;
          position: relative;
          top: 40%;
          left: -10%;
          background-image: url(https://www.chuangkit.com/distweb/img/block-1.d81e1a8f.svg);
          background-size: contain;
          background-repeat: no-repeat;
          animation: rotate1 20s ease-in-out infinite;
        }
        .block-2 {
          position: relative;
          top: -150%;
          background-size: contain;
          background-repeat: no-repeat;
          -webkit-filter: blur(60px);
          filter: blur(60px);
          width: 44%;
          height: 76%;
          left: -7%;
          background-image: url(https://www.chuangkit.com/distweb/img/block-2.2ab6b353.svg);
          animation: rotate2 20s ease-in-out infinite;
        }
        .block-3 {
          position: relative;
          top: -150%;
          background-size: contain;
          background-repeat: no-repeat;
          filter: blur(60px);
          width: 73%;
          height: 100%;
          left: 60%;
          background-image: url(https://www.chuangkit.com/distweb/img/block-3.f869b342.svg);
          animation: rotate3 20s ease-in-out infinite;
        }
        .first-page-container{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          font-family: "PingFang SC";
          color: #1b2337;
          .first-page-left{
            width: 31%;
            display: flex;
            margin-top: 32px;
            flex-direction: column;
            .title {
              font-size: 64px;
              font-weight: 400;
            }
            .des {
              font-size: 24px;
              font-weight: 400;
            }
            .button{
              width: 270px;
              height: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50px;
              border: 2px solid #000;
              cursor: pointer;
              box-shadow: 0 16px 32px #0000000d;
              .buttom-name {
                font-size: 26px;
                font-weight: 500;
              }
              .buttom-icon {
                width: 37px;
                height: 24px;
                margin-left: 24px;
                display: inline-block;
                background-image: url(https://www.chuangkit.com/distweb/img/enter-black.14c06d3f.svg);
                background-size: contain;
                background-repeat: no-repeat;
                background-position: 50%;
              }
            }
          }
          .first-page-right{
            width: 46%;
            height: auto;
            padding: 10px;
            background-color: #fff;
            box-shadow: 0 8px 40px #0000000d;
            border-radius: 24px;
            overflow: hidden;
          }
        }
      }
    }
  }
}

.block-1 {
  block-size: 1px;
}
.block-2 {
  block-size: 2px;
}
.block-3 {
  block-size: 3px;
}
.rd-24 {
  border-radius: 24px;
}

.h-953 {
  height: 953px;
}
.relative {
  position: relative;
}
.overflow-hidden {
  overflow: hidden;
}
.mt-40 {
  margin-top: 40px;
}
.mt-20 {
  margin-top: 20px;
}
.mb-120 {
  margin-bottom: 120px;
}
.h-full {
  height: 100%;
}
.absolute {
  position: absolute;
}
.w-full {
  width: 100%;
}
.bg-\#f5f7fd {
  --un-bg-opacity: 1;
  background-color: rgb(245 247 253 / var(--un-bg-opacity));
}
a {
  color: #000;
  text-decoration: none;
}
textarea, select, a {
  outline: 0 none;
  border: none;
}

.scrolled{
  background: #ffffff !important;
  box-shadow: 0 30px 60px -10px #303e533d;
}

.c-theme {
  color: #3662ec;
}
.cursor-pointer {
  cursor: pointer;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.shadow-lg {
  --un-shadow: var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / .1)), var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / .1));
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
}
.p-5 {
  padding: 5px;
}
.bg-\#fff, .bg-\#ffffff, .bg-white {
  --un-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--un-bg-opacity));
}
.rd-50\%, [rd-50\%=""] {
  border-radius: 50%;
}
.w-40 {
  width: 40px;
}
.h-40 {
  height: 40px;
}
.mr-10 {
  margin-right: 10px;
}
.text-14{
  font-size: 14px;
}
img, object, input, textarea, select {
  vertical-align: middle;
}
fieldset, img {
  border: 0;
}
@keyframes rotate1 {
  0% {
    transform: translate(0) rotate(0);
  }
  50% {
    transform: translate(437px, 210px) rotate(180deg);
  }
  100% {
    transform: translate(0) rotate(0);
  }
}
@keyframes rotate2 {
  0% {
    transform: translate(0) rotate(0);
  }
  50% {
    transform: translate(679px, 252px) rotate(180deg);
  }
  100% {
    transform: translate(0) rotate(0);
  }
}
@keyframes rotate3 {
  0% {
    transform: translate(0) rotate(0);
  }
  50% {
    transform: translate(29px, 793px) rotate(180deg);
  }
  100% {
    transform: translate(0) rotate(0);
  }
}
</style>