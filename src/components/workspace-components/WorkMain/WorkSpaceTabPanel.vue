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
              <div v-show="isShowFilterFileDropDown" class="dropDown__17ejW hasLightTheme__K-mpM scrollListBox__1TwtG hasScrollBar__1c7Bs"
                   style="width: 140px; right: 0; max-height: 148px; top: 31.5px; overflow: auto;">
                <ul style="margin-top: 0px;">
                  <div
                      class="optionBox__w6b5q isUndefined__l4Gcb hasLightTheme__K-mpM hasBottomLine__20PpG isSelect__R6kMB hoverBlueBg__3J8-i"
                      data-text="所有文件" data-value="all">
                    <div data-eventkey=""
                         class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK optionIcon__3kdke dropOptionIcon__5zUQD"
                         style="pointer-events: auto;">
                      <div class="iconPanel__11XjX isBaseIcon__afPna isSvgIcon__eg-t6" style="pointer-events: none;">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.10736 3.57154C4.10736 3.27568 4.34721 3.03583 4.64308 3.03583H10.7145C10.8565 3.03583 10.9927 3.0922 11.0931 3.19256L15.736 7.83118C15.8366 7.93166 15.8931 8.068 15.8931 8.21016V16.4286C15.8931 16.7245 15.6533 16.9643 15.3574 16.9643H4.64308C4.34721 16.9643 4.10736 16.7245 4.10736 16.4286V3.57154ZM5.17879 4.10726V15.8929H14.8217V8.74588L10.7145 8.74594C10.5724 8.74594 10.4362 8.6895 10.3357 8.58903C10.2352 8.48856 10.1788 8.3523 10.1788 8.21022V4.10726H5.17879ZM11.2502 4.86403L14.0632 7.67446L11.2502 7.6745V4.86403Z"
                                fill="currentcolor"></path>
                        </svg>
                      </div>
                    </div>
                    <li class="active liClass__2h462 haveSelectPoint__2qJA2 isSelect__R6kMB hasLightTheme__K-mpM hasBottomLine__20PpG"
                        style="font-size: 13px; height: 32px;">
                      <div data-eventkey="" class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK svgIcon__3Uq0-"
                           style="pointer-events: auto;">
                        <div
                            class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h isSvgIcon__eg-t6 hasChangeColor__2xmCT noOpacity__3_E0k isActive__1lYua blueSvgFill__1dObi"
                            style="pointer-events: none;">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                               height="16" viewBox="0 0 16 16" fill="none">
                            <g opacity="1" transform="translate(0 0)  rotate(0 8 8)">
                              <g opacity="1" transform="translate(2 2)  rotate(0 6 6)">
                                <path id="形状结合" fill-rule="evenodd" fill="currentColor"
                                      transform="translate(0.6366642549999142 1.9602259944999787)  rotate(0 5.363335745 4.039774005500001)"
                                      opacity="1"
                                      d="M3.57,5.82L1.59,3.84C1.3,3.55 0.82,3.55 0.53,3.84L0.53,3.84C0.39,3.98 0.31,4.17 0.31,4.37C0.31,4.57 0.39,4.76 0.53,4.9L3,7.37C3.39,7.76 4.02,7.76 4.41,7.37L10.2,1.59C10.49,1.3 10.49,0.82 10.2,0.53L10.2,0.53C10.06,0.39 9.87,0.31 9.67,0.31C9.47,0.31 9.28,0.39 9.14,0.53L3.85,5.82C3.77,5.9 3.65,5.9 3.57,5.82Z "></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div class="textSpace__1MuP6">所有文件</div>
                    </li>
                  </div>
                  <div class="optionBox__w6b5q isUndefined__l4Gcb hasLightTheme__K-mpM hoverBlueBg__3J8-i" data-text="设计文件"
                       data-value="1">
                    <div data-eventkey=""
                         class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK optionIcon__3kdke dropOptionIcon__5zUQD"
                         style="pointer-events: auto;">
                      <div class="iconPanel__11XjX isBaseIcon__afPna isSvgIcon__eg-t6" style="pointer-events: none;">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.5173 6.25739L14.6394 9.19189L14.9152 13.5688L2.47021 17.6559L6.23905 5.07659L6.70574 5.10489L10.6443 5.26749L13.501 2.34009L17.5173 6.25739ZM8.59688 12.2252L5.5034 15.3942L13.6636 12.7274L13.409 8.73939L15.8132 6.27869L13.5222 4.03009L11.1251 6.49789L7.11586 6.32109L4.6271 14.6169L7.78898 11.3778C7.55152 10.8013 7.66176 10.1148 8.12558 9.64049C8.74778 9.00409 9.77308 8.98289 10.4095 9.60509C11.0459 10.2274 11.0601 11.2597 10.4378 11.8961C9.94568 12.3994 9.20149 12.5091 8.59688 12.2252Z"
                                fill="currentcolor"></path>
                        </svg>
                      </div>
                    </div>
                    <li class=" liClass__2h462 haveSelectPoint__2qJA2 hasLightTheme__K-mpM"
                        style="font-size: 13px; height: 32px;">
                      <div class="textSpace__1MuP6">设计文件</div>
                    </li>
                  </div>
                  <div class="optionBox__w6b5q isUndefined__l4Gcb hasLightTheme__K-mpM hoverBlueBg__3J8-i" data-text="白板文件"
                       data-value="2">
                    <div data-eventkey=""
                         class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK optionIcon__3kdke dropOptionIcon__5zUQD"
                         style="pointer-events: auto;">
                      <div class="iconPanel__11XjX isBaseIcon__afPna isSvgIcon__eg-t6" style="pointer-events: none;">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.94 12.33L12.71 3.55C12.9 3.37 13.11 3.24 13.35 3.13C13.57 3.05 13.81 3 14.05 3C14.3 3 14.53 3.05 14.76 3.13C15 3.24 15.2 3.37 15.38 3.55L16.45 4.6C16.63 4.79 16.77 5 16.86 5.23C16.96 5.46 17 5.7 17 5.94C17 6.19 16.96 6.42 16.86 6.65C16.77 6.89 16.63 7.09 16.45 7.27L7.68 16.06L3 17L3.88 12.67L3.94 12.33ZM4.44 15.55L5.65 15.32L7.11 15.01L13.78 8.33999L11.65 6.22L12.45 5.41L14.58 7.54L15.65 6.47C15.94 6.18 15.94 5.7 15.65 5.4L14.58 4.35C14.29 4.06 13.81 4.06 13.52 4.35L4.98 12.88L4.44 15.55Z"
                                fill="currentcolor"></path>
                        </svg>
                      </div>
                    </div>
                    <li class=" liClass__2h462 haveSelectPoint__2qJA2 hasLightTheme__K-mpM"
                        style="font-size: 13px; height: 32px;">
                      <div class="textSpace__1MuP6">Schema文件</div>
                    </li>
                  </div>
                </ul>
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
            <div class="expandIcon__yjBfN hasLightTheme__1o8Yp hasTransform__1wRTm" style="position: relative;" @click="changeIsShowUpdateTimeDropDown">
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
              <div v-show="isShowUpdateTimeDropDown" class="dropDown__17ejW hasLightTheme__K-mpM scrollListBox__1TwtG hasScrollBar__1c7Bs"
                   style="width: 100px; right:0; max-height: 148px; top: 31.5px; overflow: auto;">
                <ul style="margin-top: 0px;">
                  <div class="optionBox__w6b5q isUndefined__l4Gcb hasLightTheme__K-mpM hoverBlueBg__3J8-i" data-text="设计文件"
                       data-value="1">
                    <li class="haveSelectPoint__2qJA2 hasLightTheme__K-mpM"
                        style="font-size: 13px; height: 52px; text-align: center">
                      <div class="textSpace__1MuP6">最新更新</div>
                    </li>
                  </div>
                  <div class="optionBox__w6b5q isUndefined__l4Gcb hasLightTheme__K-mpM hoverBlueBg__3J8-i" data-text="白板文件"
                       data-value="2">
                    <li class="haveSelectPoint__2qJA2 hasLightTheme__K-mpM"
                        style="font-size: 13px; height: 32px; text-align: center">
                      <div class="textSpace__1MuP6">最早更新</div>
                    </li>
                  </div>
                </ul>
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
const isShowUpdateTimeDropDown = inject("isShowUpdateTimeDropDown");
const isShowFilterFileDropDown = inject("isShowFilterFileDropDown");
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