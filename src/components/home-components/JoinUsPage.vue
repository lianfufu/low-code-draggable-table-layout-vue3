<template>
  <div class="frist-page">
    <div class="w-full h-780 bg-#f5f7fd relative">
      <div class="flex flex-col items-center">
        <div class="pt-110 text-48">加入我们，立即体验</div>
        <div class="text-15 c-#1b2337 pt-32 pb-156">
          轻松拿捏各种设计需求，带给你高效创意工作体验
        </div>
        <div class="flex gap-30">
          <div>
            <div class="item relative w-300 h-240 bg-#f5f7fd rd-24 overflow-hidden cursor-pointer shadow">
              <div class="relative w-full h-170 overflow-hidden">
                <div class="item-mask flex-center">
                  <div class="flex-center w-140 h-60 rd-40 text-14 bg-#ffffff" @click="emits('handleAuthAction')"> 立即体验 </div>
                </div>
                <img class="item-cover" src="../../assets/create/wechat.png"></div>
              <div class="flex p14 pl20 pr20">
                <img class="w-32 h-32 rd-10 shadow-opacity-80" src="https://aigc-pub-prod-oss.chuangkit.com/aigc_module_image/6a91a7a530c5561e9de560f2f198cc30.png">
                <div class="ml16">
                  <div class="text-14 lh-24 font-600">小程序</div>
                  <div class="text-12 c-#8693ab lh-20">设计搭建小程序</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits=defineEmits(["handleAuthAction"]);
</script>

<style lang="scss" scoped>

.flex-items-center, .items-center {
  align-items: center;
}
.flex-col {
  flex-direction: column;
}
.flex {
  display: flex;
}
.text-48 {
  font-size: 48px;
}
.pt-110 {
  padding-top: 110px;
}
.c-\#1b2337 {
  --un-text-opacity: 1;
  color: rgb(27 35 55 / var(--un-text-opacity));
}
.text-15 {
  font-size: 15px;
}
.pt-32 {
  padding-top: 32px;
}
.pb-156 {
  padding-bottom: 86px;
}
.rd-24 {
  border-radius: 24px;
}
.gap-30 {
  gap: 30px;
}
.shadow {
  --un-shadow: var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / 0.1)), var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1));
}
.bg-\#f5f7fd {
  --un-bg-opacity: 1;
  background-color: rgb(245 247 253 / var(--un-bg-opacity));
}
.bg-\#fff, .bg-\#ffffff, .bg-white {
  --un-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--un-bg-opacity));
}
.rd-40 {
  border-radius: 40px;
}
.w-140 {
  width: 140px;
}
.h-60 {
  height: 60px;
}
.rd-24 {
  border-radius: 24px;
}
.overflow-hidden {
  overflow: hidden;
}
.cursor-pointer {
  cursor: pointer;
}

.w-300 {
  width: 300px;
}
.h-240 {
  height: 240px;
}
.relative {
  position: relative;
}
.h-170 {
  height: 170px;
}
.item-mask{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(132, 148, 166, 0.5647058824);
  z-index: 1;
  opacity: 0;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
img, object, input, textarea, select {
  vertical-align: middle;
}
fieldset, img {
  border: 0;
  width: 100%;
}
.pr20 {
  padding-right: 20px;
}
.pl20 {
  padding-left: 20px;
}
.p-14, .p14 {
  padding: 14px;
}
.shadow-opacity-80 {
  --un-shadow-opacity: 0.8;
}
.rd-10 {
  border-radius: 10px;
}
.w-32 {
  width: 32px;
}
.h-32 {
  height: 32px;
}
.ml16 {
  margin-left: 16px;
}
.lh-24, .line-height-24 {
  line-height: 24px;
}
.font-600 {
  font-weight: 600;
}
.text-14 {
  font-size: 14px;
}
.lh-20 {
  line-height: 20px;
}
.c-\#8693ab {
  --un-text-opacity: 1;
  color: rgb(134 147 171 / var(--un-text-opacity));
}
.text-12 {
  font-size: 12px;
}
.relative {
  position: relative;
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

.item {
  margin-bottom: 60px;
  .item-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #8494a690;
    z-index: 1;
    opacity: 0;

    .item-mask-text {
      position: absolute;
      font-size: 16px;
      color: #fff;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    }
  }
  &:hover {
    .item-mask {
      opacity: 1;
    }
    .item-cover {
      transform: scale(1.05);
      transition: all 0.3s;
    }
  }
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
</style>
