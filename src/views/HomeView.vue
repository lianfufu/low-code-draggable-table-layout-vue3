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
      <div class="work" @click="jumpToMyWorkSpace">我的工作台</div>
    <div class="my">
      <div v-if="isLoggedIn" class="defaultAvatarComp__ESnVt smallSize__35RnG account_avatar" style="background: rgb(65, 124, 252);cursor: pointer;"
           @mouseenter="changeIsShowUserAvatarDropDown(true)" @mouseleave="changeIsShowUserAvatarDropDown(false)" >
        <div class="avatarName__2ns9w">Y</div>
        <div v-show="isShowUserAvatarDropDown" @mouseenter="isShowUserAvatarDropDown&&changeIsShowUserAvatarDropDown(true)"
             @mouseleave="isShowUserAvatarDropDown&&changeIsShowUserAvatarDropDown(false)"
             class="dropDown__17ejW hasLightTheme__K-mpM scrollListBox__1TwtG hasScrollBar__1c7Bs"
             style="width: 96px; right: 30px; max-height: 140px; top: 55px; overflow: visible;">
          <ul style="margin-top: 0px;">
            <div @click="()=>{userStore.userInfo=null}" class="optionBox__w6b5q isUndefined__l4Gcb hasLightTheme__K-mpM isSelect__R6kMB logout"
                 data-text="创建文件" data-value="project">
              <li class="active isSelect__R6kMB hasLightTheme__K-mpM"
                  style="font-size: 13px; height: 32px; text-align: center">
                <div class="textSpace__1MuP6">退出登录</div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div v-else class="work" style="width: 100%;cursor: pointer;" @click="handleAuthAction">登录</div>
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
                <span class="title">趣易搭</span>
                <span class="des mt-40">开启轻松、创意、快速搭建页面！</span>
                <span class="des mt-20 mb-120">无代码拖拽创作平台</span>
                <div class="button" @click="handleAuthAction">
                  <span class="buttom-name">开始设计</span>
                  <span class="buttom-icon"></span>
                </div>
              </div>
              <div class="first-page-right">
                <img src="@/assets/show.png" class="w-full h-full rd-24" autoplay="autoplay" loop="loop" muted="muted"></div>
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
import {onBeforeUnmount, onMounted, ref,computed} from "vue";
import FastCreatePage from "@/components/home-components/FastCreatePage.vue";
import MultiScenesPage from "@/components/home-components/MultiScenesPage.vue";
import JoinUsPage from "@/components/home-components/JoinUsPage.vue";
import BlurOverlay from "@/views/BlurOverlay.vue";
import {useUserStore} from "@/store/userStore";
import {useRouter} from "vue-router";
import {EnumTabType} from "@/components/workspace-components/EnumTabType";

const router=useRouter();
const userStore=useUserStore();
//管理用户登录信息
const showOverlay = ref(false)
const isLoggedIn = computed(()=>userStore.isLogin) // 根据实际登录状态修改

const handleAuthAction = () => {
  if (!isLoggedIn.value) {
    showOverlay.value = true
  } else {
    // 执行正常操作
    userStore.pickedTabType=EnumTabType.ResourceCommunity;
    router.push("/workspace");
  }
}

//管理显示是否下拉
const isShowUserAvatarDropDown=ref(false);
let executeTimes = 0;
function changeIsShowUserAvatarDropDown(isShow: boolean) {
  console.log("执行了鼠标移入个人头像");
  const curExecute = executeTimes;
  if (!isShow) {
    setTimeout(() => {
      if (executeTimes === curExecute) {
        isShowUserAvatarDropDown.value = false;
      }
    }, 500);
  } else {
    isShowUserAvatarDropDown.value = true;
    executeTimes++;
  }
}

function jumpToMyWorkSpace(){
  if (!isLoggedIn.value) {
    showOverlay.value = true;
    return;
  }
  userStore.pickedTabType=EnumTabType.My;
  router.push("/workspace");
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
      width: 115px;
      height: 40px;
      background: url(../assets/quyida.png) 0px 0px / contain no-repeat;
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
    .account_avatar{
      //.logout{
      //  display:none;
      //  position:absolute;
      //  top:60px;
      //  width:150px;
      //  height:40px;
      //  background-color: #fff;
      //  border:1px solid red;
      //}
      //&:hover{
      //  .logout{
      //    display:block;
      //  }
      //}
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

.avatarsBox__2LVGi:last-child {
  margin-right: 0;
}
.avatarsBox__2LVGi {
  border: 2px solid transparent;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.04);
  height: 24px;
  margin-right: 4px;
  position: relative;
  width: 24px;
  z-index: 2;
}
.defaultAvatarComp__ESnVt.smallSize__35RnG {
  height: 29px;
  width: 29px;
}
.defaultAvatarComp__ESnVt {
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.defaultAvatarComp__ESnVt.smallSize__35RnG .avatarName__2ns9w {
  font-size: 14px;
  line-height: 14px;
}
.avatarName__2ns9w {
  color: #fff;
  font-weight: 700;
}
.avatarImg__3VJUb, .hoverBorder__FNMO8 {
  border-radius: 50%;
  height: 24px;
  position: absolute;
  width: 24px;
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

//左上角创建用到的下拉创建
.lightTheme .dropDown__17ejW.hasLightTheme__K-mpM {
  background: #fff;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, .05), 0px 4px 10px rgba(0, 0, 0, .1);;
  color: rgba(32, 32, 32, .8);
}

.lightTheme .dropDown__17ejW {
  cursor: default;
}

.dropDown__17ejW {
  animation: popup__110Q5 .3s cubic-bezier(.34, 1.56, .64, 1);
  background: #3c3d42;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .3);
  color: #fff;
  font-size: 12px;
  padding: 6px 0;
  position: absolute;
  transform-origin: top left;
  z-index: 110;
}

@keyframes popup__110Q5 {
  0% {
    opacity: 0;
    transform: scale(.985);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.dropDown__17ejW .optionBox__w6b5q {
  align-items: center;
  border-radius: 4px;
  display: flex;
  margin: 0 6px;
  padding: 0 6px;
  position: relative;
}

.dropOptionIcon__TUVaW {
  left: 18px !important;
}

.optionIcon__3kdke {
  background-size: 16px 16px;
  height: 16px;
  left: 8px;
  opacity: .8;
  position: absolute;
}

.defaultIcon__1dJFM:before {
  content: "";
  position: absolute;
  text-align: center;
}

.defaultIcon__1dJFM .iconPanel__11XjX.isBaseIcon__afPna {
  opacity: 1;
}

.defaultIcon__1dJFM .iconPanel__11XjX {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;
}

.defaultIcon__1dJFM .iconPanel__11XjX.isBaseIcon__afPna:before {
  background-size: cover;
}

.defaultIcon__1dJFM .iconPanel__11XjX:before {
  content: "";
  position: absolute;
  text-align: center;
}

.lightTheme .dropDown__17ejW .optionBox__w6b5q li.hasLightTheme__K-mpM {
  color: #202020;
}

.dropDown__17ejW li {
  color: hsla(0, 0%, 100%, .8);
  height: 32px;
  line-height: 32px;
  width: 100%;
}

.liClass__qdU3l {
  padding-left: 32px !important;
}

.dropDown__17ejW li .textSpace__1MuP6 {
  overflow: hidden;
  padding-right: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hoverBlueBg__3J8-i:hover {
  background: #008efa !important;
}

.logout:hover {
  background: #ff004d !important;
}

.dropDown__17ejW .optionBox__w6b5q.isUndefined__l4Gcb:hover {
  background: hsla(0, 0%, 100%, .1);
  border-radius: 4px;
  opacity: 1;
}

.lightTheme .dropDown__17ejW .optionBox__w6b5q.isUndefined__l4Gcb:hover.hasLightTheme__K-mpM {
  background: rgba(32, 32, 32, .08);
}

.lightTheme .dropDown__17ejW .optionBox__w6b5q.isUndefined__l4Gcb:hover.hasLightTheme__K-mpM .textSpace__1MuP6 {
  color: white;
}
//过滤文件的按钮
.dropDown__17ejW .optionBox__w6b5q.hasBottomLine__20PpG {
  margin-bottom: 9px;
}
.dropDown__17ejW .optionBox__w6b5q {
  align-items: center;
  border-radius: 4px;
  display: flex;
  margin: 0 6px;
  padding: 0 6px;
  position: relative;
}
.dropOptionIcon__5zUQD {
  left: 18px !important;
}
.optionIcon__3kdke {
  background-size: 16px 16px;
  height: 16px;
  left: 8px;
  opacity: .8;
  position: absolute;
}
.defaultIcon__1dJFM:before {
  content: "";
  position: absolute;
  text-align: center;
}
.defaultIcon__1dJFM .iconPanel__11XjX.isBaseIcon__afPna {
  opacity: 1;
}
.defaultIcon__1dJFM .iconPanel__11XjX {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;
}
.defaultIcon__1dJFM .iconPanel__11XjX.isBaseIcon__afPna:before {
  background-size: cover;
}
.defaultIcon__1dJFM .iconPanel__11XjX:before {
  content: "";
  position: absolute;
  text-align: center;
}

.dropDown__17ejW li.haveSelectPoint__2qJA2 {
  align-items: center;
  display: flex;
  padding-left: 12px;
  position: relative;
}
.dropDown__17ejW li {
  color: hsla(0,0%,100%,.8);
  height: 32px;
  line-height: 32px;
  width: 100%;
}
.liClass__2h462 {
  padding-left: 32px!important;
}
.lightTheme .dropDown__17ejW .optionBox__w6b5q li.haveSelectPoint__2qJA2.isSelect__R6kMB:before {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAABgklEQVRYCe1WUU7DMAzNJsTHuAmn4CxjfKbbBxdZvwcX4gBcZAUhoXV+Ux3szEnXFiQEiTSlif2enz0nrXMXjaaqdm3bzi5yzjjtvW+DmUifwmLUAyQx5RUzMC0ZlzMatD9ZN3P/yIwMVHHfN5s7jnRmlIakkZ0ULW/+sRk5ohD7qnoclFoAxvUnFtUx6ChyRjc939T1PYC0d0A0Ws9p/6urOwmKoNtzTJQDsm+Z/18F0B9oZZn5XC5yz9xc1I3qWjU7MSaSYGrplbQrBY33DfpfOuTA8AsEAFJyCwIcmKQPDAIVTZ4+nEhah5MJZ2soAjjEJDjWFjC715GoamcBxVgqUCqQrEB3nna5N/nZSU6yDTAg8Nt6jU/cJcNwjcY3IWzfKiAVeLHdPlhfFb0CPry/va7r1xSYsxsTmLFmBRD407kXXO8nlXQzUxarWMiUwFkBMCbIT0JgN/5jUyR8c8OsgARYQqSdqjIqMHP0CmDHWMjUwMw7eIYQ/AYDC+C3VuAIM30dpl9hVq0AAAAASUVORK5CYII=);
}
.dropDown__17ejW li.haveSelectPoint__2qJA2.isSelect__R6kMB:before {
  content: "";
  height: 16px;
  left: -2px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
}
.dropDown__17ejW li.haveSelectPoint__2qJA2 .svgIcon__3Uq0- {
  height: 16px;
  left: -4px;
  position: absolute;
  width: 16px;
}
.defaultIcon__1dJFM:before {
  content: "";
  position: absolute;
  text-align: center;
}
.defaultIcon__1dJFM .iconPanel__11XjX.isActive__1lYua.isBaseIcon__afPna, .defaultIcon__1dJFM .iconPanel__11XjX.noOpacity__3_E0k.isBaseIcon__afPna {
  opacity: 1;
}
.defaultIcon__1dJFM .iconPanel__11XjX.isBaseIcon__afPna:before {
  background-size: cover;
}
.defaultIcon__1dJFM .iconPanel__11XjX {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;
}
.defaultIcon__1dJFM .iconPanel__11XjX:before {
  content: "";
  position: absolute;
  text-align: center;
}
.dropDown__17ejW li .textSpace__1MuP6 {
  overflow: hidden;
  padding-right: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.lightTheme .dropDown__17ejW .optionBox__w6b5q.hasBottomLine__20PpG:after {
  background: hsla(240,3%,86%,.4);
}
.dropDown__17ejW .optionBox__w6b5q.hasBottomLine__20PpG:after {
  background: var(--color-border);
  bottom: -5px;
  content: "";
  height: 1px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: calc(100% - 12px);
}
.blueSvgFill__1dObi svg path:not(#filter), .blueSvgFill__1dObi svg rect:not(#filter) {
  fill: currentColor;
  color: #008efa !important;
}
</style>