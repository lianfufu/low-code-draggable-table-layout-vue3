<template>
  <div class="commonPadding__2aIR5">
    <div class="bgBoard__3ITDU">
      <div class="head__18GSP"><h3>精选资源</h3>
        <div class="headRight__3nVF4">
          <span data-type="button" class="blueHoverText__1zYQ2">更多资源</span>
        </div>
      </div>
      <div class="resourceWrapperContainer__3SHkX">
        <!--              <js-frame id="resourceWrapper" src="https://js.design/backend/elements/i_74EfyO43d"></js-frame>-->
        动态渲染的区域
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.commonPadding__2aIR5 {
  background: #1c1c1c;
  padding: 20px 40px;
  position: relative;
  z-index: 9;
}

.lightTheme .bgBoard__3ITDU {
  background-color: #f8f8f8;
  color: #202020;
}

.bgBoard__3ITDU {
  background-color: #050505;
  border-radius: 12px;
  box-sizing: border-box;
  height: 182px;
  padding: 12px 10px 0;
}

.head__18GSP {
  align-items: center;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  line-height: 20px;
  margin-bottom: 9px;
  padding: 0 2px 0 6px;
}

.lightTheme .head__18GSP h3 {
  color: #202020;
}

.head__18GSP h3 {
  color: hsla(0, 0%, 100%, .9);
  font-size: 13px;
}

.head__18GSP .headRight__3nVF4 {
  align-items: center;
  display: flex;
}

.head__18GSP .headRight__3nVF4 span {
  color: rgba(69, 150, 255, .8);
  font-size: 12px;
  margin-right: 8px;
}

.cursor-pointer__34ZCy, div[data-type=button], span[data-type=button] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.blueHoverText__1zYQ2 {
  color: #008efa !important;
}

.commonPadding__2aIR5 .resourceWrapperContainer__3SHkX {
  width: 100%;
}
</style>