<template>
  <div class="commonPadding__2aIR5">
    <div class="bgBoard__3ITDU">
      <div class="head__18GSP"><h3>精选资源</h3>
        <div class="headRight__3nVF4">
          <span data-type="button" class="blueHoverText__1zYQ2" style="cursor: pointer" @click="navigateToCommunity">更多资源</span>
        </div>
      </div>
      <div class="resourceWrapperContainer__3SHkX">
        <ul style="list-style: none;margin:0;padding:0;display:flex;">
          <li v-for="item in communityResource" :key="item.productId" style="margin:5px;width:170px;cursor: pointer" @click="handleNavigateToProductPreview(item.productId)">
            <div style="border-radius: 10px;width: 150px;display:block;line-height: 0;overflow:hidden;margin:0 auto">
              <img style="width: 100%" :src="item.cover" />
            </div>
            <div style="text-align: center;font-size: 18px;line-height: 18px;margin-top: 10px;padding-left: 5px;padding-right: 5px">{{item.productName}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, inject, ref} from "vue";
import lyCover from "@/assets/lyhome.png";
import gyCover from "@/assets/gyhome.png";
import {useRouter} from "vue-router";
import {EnumTabType} from "@/components/workspace-components/EnumTabType";
import {useUserStore} from "@/store/userStore";

const communityResource=ref([
  {
    productName:"旅游吧-设计",
    productId:`/product?productId=ly001`,
    cover:lyCover,
  },
  {
    productName:"公园吧-设计",
    productId:`/product?productId=gy001`,
    cover:gyCover,
  }
]);
const userStore=useUserStore();
function navigateToCommunity(){
  userStore.pickedTabType=EnumTabType.ResourceCommunity;
}
const router=useRouter();
function handleNavigateToProductPreview(path:string){
  router.push(path);
}
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
  height: 350px;
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