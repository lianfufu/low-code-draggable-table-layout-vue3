<template>
  <div class="workspaceHeadTabPanelWrap__2rmLw">
    <div class="workspaceHeadTabPanel__YrlYK">
      <div class="rowPanel__1eCJi firstRowPanel__CM7Vm">
        <div ref="indictor" class="indicator__1baPp" id="tab-indicator"
             style="background: rgb(0, 142, 250); width: 56px; left: 0px;"></div>
        <div @click="pickWorkSpaceTab" class="oneTab__1JgYY cursor-pointer__34ZCy tab-item"
             data-type="all" id="firstTab" style="font-weight: bold;">全部文件
        </div>
        <div @click="pickWorkSpaceTab" class="oneTab__1JgYY cursor-pointer__34ZCy tab-item" data-type="create"
             style="font-weight: normal;">我创建的
        </div>
        <div @click="pickWorkSpaceTab" class="oneTab__1JgYY cursor-pointer__34ZCy tab-item" data-type="trash"
             style="font-weight: normal;">回收站
        </div>
      </div>
      <div class="rowPanel__1eCJi">
        <div class="fileFilterBox__3uNmE">
          <div id=""
               class="selectBox__3tblH hasLightTheme__1o8Yp noBackground__3YTQz cancelDropDownBg__1XDv9"
               data-text="所有文件" data-value="all" style="font-size: 13px;"><span class=""
                                                                                    data-text="所有文件"
                                                                                    style="text-indent: 0px;">所有文件</span>
            <div class="expandIcon__yjBfN hasLightTheme__1o8Yp hasTransform__1wRTm" @click="changeIsShowFilterFileDropDown">
              <div class="wrapperIcon__3sHfR blueFocusVisibleLine__9r-RK selectIcon__34c_Q expandIcon">
                <div data-eventkey="" data-tab="true"
                     class="a_c defaultIcon__1dJFM blueFocusVisibleLine__9r-RK advIcon__1vhDw undefined"
                     style="pointer-events: auto;">
                  <div
                      class="iconPanel__11XjX isBaseIcon__afPna isSvgIcon__eg-t6 hasChangeColor__2xmCT noOpacity__3_E0k"
                      style="pointer-events: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g opacity="1" transform="translate(0 0)  rotate(0 8 8)">
                        <path id="矩形 1 (轮廓)" fill-rule="evenodd" fill="rgba(32, 32, 32, 1)"
                              transform="translate(4.869552607606693 4.224633491377972)  rotate(-45 3.125 3.125)"
                              opacity="1"
                              d="M6.25,6.25L6.25,5.25L1,5.25L1,0L0,0L0,5.55C0,5.74 0.07,5.91 0.21,6.04C0.34,6.18 0.51,6.25 0.7,6.25L6,6.25L6.25,6.25Z "></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fileFilterBox__2W8Z0">
          <div id=""
               class="selectBox__3tblH hasLightTheme__1o8Yp noBackground__3YTQz cancelDropDownBg__3_i0s"
               data-text="更新时间" data-value="updateDate" style="font-size: 13px;"><span class=""
                                                                                           data-text="更新时间"
                                                                                           style="text-indent: 0px;">更新时间</span>
            <div class="expandIcon__yjBfN hasLightTheme__1o8Yp hasTransform__1wRTm" @click="changeIsShowUpdateTimeDropDown">
              <div class="wrapperIcon__3sHfR blueFocusVisibleLine__9r-RK selectIcon__34c_Q expandIcon">
                <div data-eventkey="" data-tab="true"
                     class="a_c defaultIcon__1dJFM blueFocusVisibleLine__9r-RK advIcon__1vhDw undefined"
                     style="pointer-events: auto;">
                  <div
                      class="iconPanel__11XjX isBaseIcon__afPna isSvgIcon__eg-t6 hasChangeColor__2xmCT noOpacity__3_E0k"
                      style="pointer-events: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g opacity="1" transform="translate(0 0)  rotate(0 8 8)">
                        <path id="矩形 1 (轮廓)" fill-rule="evenodd" fill="rgba(32, 32, 32, 1)"
                              transform="translate(4.869552607606693 4.224633491377972)  rotate(-45 3.125 3.125)"
                              opacity="1"
                              d="M6.25,6.25L6.25,5.25L1,5.25L1,0L0,0L0,5.55C0,5.74 0.07,5.91 0.21,6.04C0.34,6.18 0.51,6.25 0.7,6.25L6,6.25L6.25,6.25Z "></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-eventkey="" class="a_c defaultIcon__1dJFM blueFocusVisibleLine__9r-RK "
             data-contr="hovertip"
             data-option="{&quot;text&quot;:&quot;网格视图&quot;,&quot;direction&quot;:&quot;top&quot;,&quot;delay&quot;:500}"
             style="pointer-events: auto;">
          <div class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h hoverBg__1OUWP isSvgIcon__eg-t6"
               style="pointer-events: none;">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                 height="16" viewBox="0 0 16 16" fill="none">
              <g opacity="1" transform="translate(0 0)  rotate(0 8 8)">
                <path id="并集" fill-rule="evenodd" fill="rgba(32, 32, 32, 1)"
                      transform="translate(2 2)  rotate(0 6 6)" opacity="1"
                      d="M0 4.5C0 5.05 0.45 5.5 1 5.5L4.5 5.5C5.05 5.5 5.5 5.05 5.5 4.5L5.5 1C5.5 0.45 5.05 0 4.5 0L1 0C0.45 0 0 0.45 0 1L0 4.5Z M11 5.5C11.55 5.5 12 5.05 12 4.5L12 1C12 0.45 11.55 0 11 0L7.5 0C6.95 0 6.5 0.45 6.5 1L6.5 4.5C6.5 5.05 6.95 5.5 7.5 5.5L11 5.5Z M1 1L1 4.5L4.5 4.5L4.5 1L1 1Z M11 4.5L11 1L7.5 1L7.5 4.5L11 4.5Z M0 11C0 11.55 0.45 12 1 12L4.5 12C5.05 12 5.5 11.55 5.5 11L5.5 7.5C5.5 6.95 5.05 6.5 4.5 6.5L1 6.5C0.45 6.5 0 6.95 0 7.5L0 11Z M6.5 7.5L6.5 11C6.5 11.55 6.95 12 7.5 12L11 12C11.55 12 12 11.55 12 11L12 7.5C12 6.95 11.55 6.5 11 6.5L7.5 6.5C6.95 6.5 6.5 6.95 6.5 7.5Z M4.5 7.5L1 7.5L1 11L4.5 11L4.5 7.5Z M11 11L11 7.5L7.5 7.5L7.5 11L11 11Z "></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AllAndMyCreateTabItem v-if="pickedWorkSpaceTabType!==EnumWorkSpaceTabType.trash"/>
  <RecycleBinTabItem v-else/>
</template>

<script setup lang="ts">

import AllAndMyCreateTabItem
  from "@/components/workspace-components/WorkMain/WorkSpaceTabItem/AllAndMyCreateTabItem/AllAndMyCreateTabItem.vue";
import {inject, ref} from "vue";
import {EnumWorkSpaceTabType} from "@/components/workspace-components/WorkMain/EnumWorkSpaceTabType";
import RecycleBinTabItem from "@/components/workspace-components/WorkMain/WorkSpaceTabItem/RecycleBinTabItem.vue";

const pickedWorkSpaceTabType=ref<EnumWorkSpaceTabType>(EnumWorkSpaceTabType.all);
const indictor=ref(null);
//点击table栏
function pickWorkSpaceTab(event:any){
  const tabText=event.target.dataset['type'];
  console.log(tabText,event.target.dataset);
  let leftOffsetVal=0;
  switch (tabText) {
    case "all":
      pickedWorkSpaceTabType.value=EnumWorkSpaceTabType.all;
      leftOffsetVal=0;
      break;
    case "create":
      pickedWorkSpaceTabType.value=EnumWorkSpaceTabType.create;
      leftOffsetVal=76;
      break;
    case "trash":
      pickedWorkSpaceTabType.value=EnumWorkSpaceTabType.trash;
      leftOffsetVal=142;
      break;
  }
  if(indictor.value){
    indictor.value.style.left=leftOffsetVal+'px';
  }
}
//过滤下拉
const changeIsShowFilterFileDropDown = inject("changeIsShowFilterFileDropDown");
const changeIsShowUpdateTimeDropDown = inject("changeIsShowUpdateTimeDropDown");
</script>

<style scoped lang="scss">
.lightTheme .workspaceHeadTabPanelWrap__2rmLw {
  background-color: #fff;
}
.workspaceHeadTabPanelWrap__2rmLw {
  background-color: #1c1c1c;
  padding: 0 40px;
  position: sticky;
  top: 0;
  z-index: 99;
}
.lightTheme .workspaceHeadTabPanel__YrlYK {
  border-bottom: 1px solid hsla(240,3%,86%,.6);
}
.rowPanel__1eCJi, .workspaceHeadTabPanel__YrlYK {
  align-items: center;
  display: flex;
}
.workspaceHeadTabPanel__YrlYK {
  border-bottom: 1px solid hsla(0,0%,100%,.05);
  height: 43px;
  justify-content: space-between;
}
.rowPanel__1eCJi.firstRowPanel__CM7Vm {
  margin-right: 20px;
  position: relative;
  width: 100%;
}
.rowPanel__1eCJi, .workspaceHeadTabPanel__YrlYK {
  align-items: center;
  display: flex;
}
//底部蓝色栏
.indicator__1baPp {
  bottom: 0;
  height: 2px;
  position: absolute;
  width: 56px;
}
//每个tabHeader的样式
//x选中状态的样式
.lightTheme .oneTab__1JgYY.isSelect__2_OHt {
  color: #202020;
}
.oneTab__1JgYY.isSelect__2_OHt, .recentText__1gD5l {
  color: hsla(0,0%,100%,.8);
  font-weight: 700;
}
//一般样式
.oneTab__1JgYY {
  color: hsla(0,0%,100%,.6);
  font-size: 14px;
  line-height: 44px;
  margin-right: 20px;
  position: relative;
  white-space: nowrap;
}
.cursor-pointer__34ZCy{
  cursor: pointer;
}
.cursor-pointer__34ZCy, div[data-type=button], span[data-type=button] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.lightTheme .oneTab__1JgYY {
  color: rgba(32, 32, 32, .8);
}
//右上角操作符号
.rowPanel__1eCJi, .workspaceHeadTabPanel__YrlYK {
  align-items: center;
  display: flex;
}
.fileFilterBox__3uNmE {
  margin-right: 8px;
}
.lightTheme .selectBox__3tblH.hasLightTheme__1o8Yp {
  color: #000;
}
.selectBox__3tblH.noBackground__3YTQz {
  background: transparent;
}
.cancelDropDownBg__1XDv9 {
  width: -moz-fit-content;
  width: fit-content !important;
}
.selectBox__3tblH {
  align-items: center;
  border-radius: 4px;
  display: flex;
  float: left;
  font-size: 12px;
  height: 26px;
  line-height: 26px;
  position: relative;
  width: 130px;
  z-index: 1;
}
.selectBox__3tblH span, .selectBox__3tblH span.textOverflow__3rckw {
  text-overflow: ellipsis;
  width: calc(100% - 28px);
}
.selectBox__3tblH span {
  display: block;
  height: 100%;
  overflow-x: hidden;
  text-indent: 6px;
  white-space: nowrap;
}
.selectBox__3tblH .expandIcon__yjBfN {
  align-items: center;
  display: flex;
  height: 28px;
  justify-content: center;
  width: 28px;
  z-index: 1;
}
.selectBox__3tblH .expandIcon__yjBfN .selectIcon__34c_Q {
  opacity: .5;
}
.wrapperIcon__3sHfR {
  grid-column-end: span 2;
}
.checkBoxPanel__PUf2m, .wrapperIcon__3sHfR {
  align-items: center;
  display: flex;
  height: 28px;
  justify-content: center;
  width: 28px;
}
.advIcon__1vhDw {
  align-items: center;
  display: flex;
  height: 28px;
  justify-content: center;
  width: 28px;
}
.defaultIcon__1dJFM:before {
  content: "";
  position: absolute;
  text-align: center;
}
.defaultIcon__1dJFM .iconPanel__11XjX.isActive__1lYua.isBaseIcon__afPna, .defaultIcon__1dJFM .iconPanel__11XjX.noOpacity__3_E0k.isBaseIcon__afPna {
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
//更新时间
.fileFilterBox__2W8Z0 {
  margin-right: 8px;
}
.lightTheme .selectBox__3tblH.hasLightTheme__1o8Yp {
  color: #000;
}
.selectBox__3tblH.noBackground__3YTQz {
  background: transparent;
}
.cancelDropDownBg__3_i0s {
  width: -moz-fit-content;
  width: fit-content;
}
.selectBox__3tblH span, .selectBox__3tblH span.textOverflow__3rckw {
  text-overflow: ellipsis;
  width: calc(100% - 28px);
}
//视图切换
.defaultIcon__1dJFM:before {
  content: "";
  position: absolute;
  text-align: center;
}
.defaultIcon__1dJFM:hover .canHover__2iU7h.isBaseIcon__afPna {
  opacity: 1;
}
.lightTheme .defaultIcon__1dJFM:hover .isSvgIcon__eg-t6.hoverBg__1OUWP.canHover__2iU7h:before {
  background-color: rgba(0,0,0,.05);
  border-radius: 4px;
  height: 28px;
  width: 28px;
  z-index: 1;
}
.defaultIcon__1dJFM:hover .isSvgIcon__eg-t6.hoverBg__1OUWP.canHover__2iU7h:before {
  background-color: hsla(0,0%,100%,.05);
  border-radius: 4px;
  height: 28px;
  width: 28px;
  z-index: 1;
}
.lightTheme .defaultIcon__1dJFM:hover .isSvgIcon__eg-t6.hoverBg__1OUWP.canHover__2iU7h svg {
  position: relative;
  z-index: 2;
}
.defaultIcon__1dJFM:hover .isSvgIcon__eg-t6.hoverBg__1OUWP.canHover__2iU7h svg {
  position: relative;
  z-index: 2;
}
</style>