<template>
  <div class="contentBox__1gYQr">
    <div id="contentBoxLeft" class="contentBoxleft__1uphq" style="width: calc(100% - 46px); overflow-y: auto;">
      <div class="page">
        <div class="c-#222529 font-extrabold text-20px mb-24px">推荐小程序</div>
        <div style="height:1px;border-bottom: 1px solid #ccc;transform: translateY(-15px)"/>
        <div class="flex flex-wrap gap-30 mb-50" style="margin-top: 5px">
          <div>
            <div class="cover" data-v-5bdda5d3="">
              <div class="relative" data-v-5bdda5d3="">
                <div data-v-5bdda5d3="" style="position: relative;">
                  <iframe class="canvas"
                          src="http://www.sunmao-design.top/sunmao/render/#/pages/render/screenshot?type=wechat&amp;id=1730097774ZvRqPBGO"
                          data-v-5bdda5d3=""></iframe>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="cover" data-v-5bdda5d3="">
              <div class="relative" data-v-5bdda5d3="">
                <div data-v-5bdda5d3="" style="position: relative;">
                  <iframe class="canvas"
                          src="https://www.sunmao-design.top/sunmao/render/#/pages/render/screenshot?type=wechat&amp;id=1731634631kStBUdrX"
                          data-v-5bdda5d3=""></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RightPanel/>
  </div>
</template>

<script setup lang="ts">

import RightPanel from "@/components/workspace-components/RightPanel.vue";
</script>

<style scoped lang="scss">
.contentBox__1gYQr {
  align-content: space-between;
  display: flex;
  height: calc(100% - 60px);
  min-width: 817px;
}

.lightTheme .commonPadding__2aIR5, .lightTheme .contentBoxleft__1uphq {
  background: #fff;
}

.contentBoxleft__1uphq {
  background: #1c1c1c;
  overflow-y: auto;
  position: relative;
  width: calc(100% - 46px);
  z-index: 0;
}

.lightTheme .commonPadding__2aIR5, .lightTheme .contentBoxleft__1uphq {
  background: #fff;
}

.page{
  background-color: #fff;
  margin:24px 40px;
}
.font-extrabold {
  font-weight: 800;
}
.c-\#222529, [color~="#222529"] {
  --un-text-opacity: 1;
  color: rgb(34 37 41 / 1);
}
.text-20px {
  font-size: 16px;
  font-weight: bold;
}
.mb-24px {
  margin-bottom: 24px;
}
.gap-30, [gap~="30"] {
  gap: 50px;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex, [flex=""] {
  display: flex;
}
.mb-50 {
  margin-bottom: 50px;
}
.cover {
  position: relative;
  width: 200px;
  height: 404px;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 14px #0000001a;
}
.canvas{
  width: 200px;
  height: 420px;
  border: none;
  overflow: auto;
}
iframe {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

</style>