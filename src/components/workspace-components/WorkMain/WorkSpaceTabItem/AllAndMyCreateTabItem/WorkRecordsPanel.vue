<template>
  <div class="cardListBox__1V4Cv" id="cardListPanel" style="position: relative;">
    <div class="sc-epALIP dnileC">
      <div class="gird-wrapper">
        <div v-for="item in operationRecord" :key="item.id" class="sc-dJiZtA hLvKZi minCss__3r855" data-id="67ce8b58970c2fff36784dfd" data-type="file"
             data-selectable="true" @click="navigateToDesignPage(item.id)" style="cursor: pointer;">
          <div class="empty-box"></div>
          <div class="cardPanel__28Rxy cursor-pointer__34ZCy cardBorder__2ci0X"
               data-id="67ce8b58970c2fff36784dfd" data-recentteamid="" data-recentpermission="false">
            <div class="cardHeaderWrap__gz9CA">
              <div class="cardImg__hkb_D">
                <div class="coverImg__3A3It undefined">
                  <div class="containImg__2c-Hn baseFillClass__2T0Cl"
                       :style="{backgroundImage: `url(${item.image})`}"></div>
                </div>
                <div class="newAvatarsBox__3evzo">
                  <div class="avatarWrapCss__12kZa">
                    <div class="avatarItem__2I8YO cursor-pointer__34ZCy avatarItemHover__OQkQl"
                         style="z-index: 5;">
                      <div class="defaultAvatarComp__ESnVt teamSize__2hFaO"
                           style="background: rgb(65, 124, 252);">
                        <div class="avatarName__2ns9w">L</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cardBottom__44sGZ">
              <div class="cardInfoBox__1wjo2">
                <div class="cardNameBox__Pe2Mk">
                  <div class="cardName__264_J" title="趣易搭<新人进阶指南>"
                       style="max-width: calc(100% - 24px);">{{item.title}}
                  </div>
                </div>
                <div class="createDateBox__2oHo0">
                  <div class="popupPortal__1ytgj" style="width: 100%;">
                    <div role="tooltip" class="" style="width: 100%;">
                      <div class="date__29AkG">{{item.operationTime}}</div>
                    </div>
                    <div class="textCalculateContainer__yN-IV" style="font-size: 12px;">{{item.operationTime}}</div>
                  </div>
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
// import ly from "@/assets/lyrecord.png";
// import gy from "@/assets/gyrecord.png";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useUserStore} from "@/store/userStore";
type OperationRecordItemType={
  id:string,
  image:string,
  title:string,
  operationTime:string,
}
const NoImageRecord:OperationRecordItemType={
  id:"news001",
  title:"无标题",
  image:"https://img.js.design/assets/coverImg/YU0T6_845b61a0e0bf22383dd7754df70998c0.png",
  operationTime:"2025-03-21 13:14"
}
const operationRecord=ref<any[]>([
  // {
  //   ...NoImageRecord,
  // },
  // {
  //   title:"旅游吧-设计",
  //   id:"ly001",
  //   image:ly,
  //   operationTime:"2025-03-25 17:18"
  // },
  // {
  //   id:"gy001",
  //   title:"公园吧-设计",
  //   image:gy,
  //   operationTime:"2025-03-27 9:42"
  // }
]);
const userStore=useUserStore();
// operationRecord.push(...NoImageRecord);
userStore.userCreatedProducts.forEach(item=>{
  operationRecord.value.push({
    id:item.id,
    title:item.name,
    image:item.recordCover,
    operationTime:item.updateTime
  });
});

const router=useRouter();
function navigateToDesignPage(id:string){
  router.push(`/designbuild?productId=${id}`);
}
</script>

<style scoped lang="scss">
.cardListBox__1V4Cv {
  padding: 24px 40px 40px;
}
@media (min-width: 1910px) and (max-width: 3.40282e+38px) {
  .dnileC .gird-wrapper {
    grid-template-columns: repeat(6, 1fr);
  }
}
.dnileC .gird-wrapper {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(6, 1fr);
  flex: 1 1 auto;
  position: relative;
}
//gridItem
.minCss__3r855 {
  min-width: 241px;
}
.hLvKZi {
  position: relative;
  user-select: none;
}
.hLvKZi .empty-box {
  padding-top: calc(68% + 52px);
}
.lightTheme .cardBorder__2ci0X {
  outline: 1px solid #e9e9e9;
}
.lightTheme .cardPanel__28Rxy {
  background-color: #fff;
}
.cardBorder__2ci0X {
  border-radius: 8px;
  box-sizing: border-box;
  height: 100%;
  outline: 1px solid transparent;
  outline: 1px solid #000;
  position: absolute;
  width: 100%;
}
.cardPanel__28Rxy {
  background: #2c2c2e;
  border-radius: 8px;
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
}
.cursor-pointer__34ZCy, div[data-type=button], span[data-type=button] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.cardHeaderWrap__gz9CA {
  height: calc(100% - 52px);
  position: relative;
}
.lightTheme .cardImg__hkb_D {
  background: #fafafa;
  border-bottom: 1px solid hsla(240,3%,86%,.6);
}
.cardImg__hkb_D {
  box-sizing: border-box;
  display: flex;
  height: 100%;
  position: relative;
}
.lightTheme .coverImg__3A3It {
  background: #fafafa;
}
.coverImg__3A3It {
  align-items: stretch;
  background: #030303;
  display: flex;
  flex: 1 0 auto;
  height: 100%;
  justify-content: center;
  width: 100%;
}
.coverImg__3A3It .baseFillClass__2T0Cl.containImg__2c-Hn {
  background-position: 50%;
  background-size: contain;
  margin: 10px;
}
.coverImg__3A3It .baseFillClass__2T0Cl {
  align-items: center;
  background-repeat: no-repeat;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
}
.lightTheme .newAvatarsBox__3evzo {
  background: #fff;
  border: 1px solid rgba(0,0,0,.1);
}
.newAvatarsBox__3evzo, .newAvatarsBox__3evzo .avatarWrapCss__3-K9a {
  align-items: center;
  display: flex;
}
.newAvatarsBox__3evzo {
  border-radius: 16px;
  bottom: 12px;
  left: 12px;
  padding: 2px;
  position: absolute;
}
.avatarWrapCss__12kZa {
  align-items: center;
  border-radius: 50%;
  display: flex;
  padding-left: 10px;
  position: relative;
}
.lightTheme .avatarWrapCss__12kZa .avatarItem__2I8YO {
  border: 2px solid white;
}
.avatarWrapCss__12kZa .avatarItem__2I8YO {
  align-items: center;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin-left: -10px;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.cursor-pointer__34ZCy, div[data-type=button], span[data-type=button] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.defaultAvatarComp__ESnVt.teamSize__2hFaO {
  height: 18px;
  width: 18px;
}
.defaultAvatarComp__ESnVt {
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.defaultAvatarComp__ESnVt.teamSize__2hFaO .avatarName__2ns9w {
  font-size: 18px !important;
  line-height: 18px !important;
  transform: scale(50%);
}
.avatarName__2ns9w {
  color: #fff;
  font-weight: 700;
}
.cardBottom__44sGZ {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  padding: 8px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.cardBottom__44sGZ .cardInfoBox__1wjo2 {
  width: 100%;
}
.cardNameBox__Pe2Mk {
  align-items: center;
  display: flex;
  height: 18px;
  overflow: hidden;
  position: relative;
}
.lightTheme .cardName__264_J {
  color: #161616;
}
.cardName__264_J {
  color: hsla(0,0%,100%,.8);
  font-size: 14px;
  font-weight: 600;
  height: 100%;
  line-height: 18px;
  margin-right: 2px;
  max-width: calc(100% - 24px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.createDateBox__2oHo0 {
  align-items: center;
  display: flex;
  position: relative;
}
.popupPortal__1ytgj {
  align-items: center;
  display: flex;
  position: relative;
}
.lightTheme .date__29AkG {
  color: rgba(32,32,32,.5);
}
.date__29AkG {
  color: hsla(0,0%,100%,.4);
  font-size: 12px;
  line-height: 18px;
  max-width: calc(100% - 24px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.textCalculateContainer__yN-IV {
  position: absolute;
  top: -8000px;
  visibility: hidden;
}

</style>