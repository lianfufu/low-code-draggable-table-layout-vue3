<template>
  <div class="main lightTheme fixPage__2YBqG" data-preferred-theme="LIGHT" id="dragFileContainer"
       style="user-select: none; position: fixed; inset: 0px;">
    <div class="baseWorkSpacePage__TwT88">
      <LeftSidePanel/>
      <WorkSpaceContent :picked-tab="pickedTabType"/>
    </div>
    <div v-show="isShowCreateDropDown"
         class="dropDown__17ejW hasLightTheme__K-mpM scrollListBox__1TwtG hasScrollBar__1c7Bs"
         style="width: 150px; left: 235px; max-height: 108px; top: 46.5px; overflow: auto;">
      <ul style="margin-top: 0px;">
        <div @click="createProject"
             class="optionBox__w6b5q isUndefined__l4Gcb hasLightTheme__K-mpM isSelect__R6kMB hoverBlueBg__3J8-i"
             data-text="创建文件" data-value="project">
          <div data-eventkey=""
               class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK optionIcon__3kdke dropOptionIcon__TUVaW"
               style="pointer-events: auto;">
            <div class="iconPanel__11XjX isBaseIcon__afPna isSvgIcon__eg-t6" style="pointer-events: none;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
                   viewBox="0 0 16 16" fill="none">
                <g opacity="1">
                  <mask id="bg-mask-0" fill="white">
                    <use xlink:href="#path_0"></use>
                  </mask>
                  <g mask="url(#bg-mask-0)">
                    <path id="并集" fill="rgba(32, 32, 32, 1)" fill-rule="evenodd" opacity="1"
                          d="M14.0032,5.0179l-2.3,2.34001l0.22,3.49l-9.92003,3.26l3.01,-10.03001l0.37,0.02l3.14,0.13l2.28003,-2.33zM6.89317,9.77791l-2.47,2.53l6.51003,-2.13l-0.21,-3.18l1.92,-1.96001l-1.83,-1.8l-1.91003,1.97l-3.2,-0.14l-1.98,6.62001l2.52,-2.59c-0.19,-0.46 -0.1,-1 0.27,-1.38c0.5,-0.51 1.31,-0.53 1.82,-0.03c0.51,0.5 0.52,1.32 0.02,1.83c-0.39,0.4 -0.98,0.49 -1.46,0.26z"></path>
                  </g>
                </g>
                <defs>
                  <rect id="path_0" x="0" y="0" width="16" height="16"></rect>
                </defs>
              </svg>
            </div>
          </div>
          <li class="active liClass__qdU3l isSelect__R6kMB hasLightTheme__K-mpM" style="font-size: 13px; height: 32px;">
            <div class="textSpace__1MuP6">创建文件</div>
          </li>
        </div>
        <div @click="createProject"
             class="optionBox__w6b5q isUndefined__l4Gcb hasLightTheme__K-mpM hoverBlueBg__3J8-i" data-text="创建白板"
             data-value="whiteBoardFile">
          <div data-eventkey=""
               class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK optionIcon__3kdke dropOptionIcon__TUVaW"
               style="pointer-events: auto;">
            <div class="iconPanel__11XjX isBaseIcon__afPna isSvgIcon__eg-t6" style="pointer-events: none;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
                   viewBox="0 0 16 16" fill="none">
                <g opacity="1">
                  <mask id="bg-mask-0" fill="white">
                    <use xlink:href="#path_0"></use>
                  </mask>
                  <g mask="url(#bg-mask-0)">
                    <path id="并集" fill="rgba(32, 32, 32, 1)" fill-rule="evenodd" opacity="1"
                          d="M2.97995,9.92999l7.27005,-7.27999c0.15,-0.15 0.33,-0.25 0.52,-0.34c0.19,-0.07 0.38,-0.11 0.59,-0.11c0.2,0 0.4,0.04 0.58,0.11c0.2,0.09 0.37,0.19 0.52,0.34l0.88,0.88c0.15,0.15 0.27,0.33 0.35,0.52c0.07,0.19 0.11,0.38 0.11,0.59c0,0.2 -0.04,0.4 -0.11,0.58c-0.08,0.2 -0.2,0.37 -0.35,0.52l-7.26005,7.27999l-3.88,0.78l0.73,-3.59zM3.39995,12.59999l1,-0.2l1.21,-0.25l5.52005,-5.52l-1.76005,-1.76999l0.66005,-0.66l1.76,1.76l0.89,-0.88c0.24,-0.25 0.24,-0.65 0,-0.89l-0.88,-0.87c-0.25,-0.24 -0.65,-0.24 -0.89,0l-7.07005,7.06999z"></path>
                  </g>
                </g>
                <defs>
                  <rect id="path_0" x="0" y="0" width="16" height="16"></rect>
                </defs>
              </svg>
            </div>
          </div>
          <li class=" liClass__qdU3l hasLightTheme__K-mpM" style="font-size: 13px; height: 32px;">
            <div class="textSpace__1MuP6">创建Schema</div>
          </li>
        </div>
      </ul>
    </div>
    <div v-show="isShowUserAvatarDropDown" @mouseenter="isShowUserAvatarDropDown&&changeIsShowUserAvatarDropDown(true)"
         @mouseleave="isShowUserAvatarDropDown&&changeIsShowUserAvatarDropDown(false)"
         class="dropDown__17ejW hasLightTheme__K-mpM scrollListBox__1TwtG hasScrollBar__1c7Bs"
         style="width: 96px; right: 10px; max-height: 140px; top: 62.5px; overflow: visible;">
      <ul style="margin-top: 0px;">
        <div @click="doLogout(userStore)" class="optionBox__w6b5q isUndefined__l4Gcb hasLightTheme__K-mpM isSelect__R6kMB logout"
             data-text="创建文件" data-value="project">
          <li class="active isSelect__R6kMB hasLightTheme__K-mpM"
              style="font-size: 13px; height: 32px; text-align: center">
            <div class="textSpace__1MuP6">退出登录</div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, provide, ref, watch} from "vue";
import LeftSidePanel from "@/components/workspace-components/LeftSidePanel.vue";
import WorkSpaceContent from "@/components/workspace-components/WorkSpaceContent.vue";
import {EnumTabType} from "@/components/workspace-components/EnumTabType";
import {
  doLogout,
  jumpToCreateSchemaProject,
  jumpToCreateWidgetsProject,
  addNewProject
} from "@/components/workspace-components/CreateAndImportProject";

import {useUserStore} from "@/store/userStore";
const userStore=useUserStore();
function createProject(){
  addNewProject(userStore);
}

const isShowCreateDropDown = ref<boolean>(false);
const isShowUserAvatarDropDown = ref<boolean>(false);
const isShowFilterFileDropDown = ref<boolean>(false);
const isShowUpdateTimeDropDown = ref<boolean>(false);


provide("changeIsShowCreateDropDown", changeIsShowCreateDropDown);
provide("changeIsShowUserAvatarDropDown", changeIsShowUserAvatarDropDown);
provide("changeIsShowFilterFileDropDown", changeIsShowFilterFileDropDown);
provide("changeIsShowUpdateTimeDropDown", changeIsShowUpdateTimeDropDown);
provide("isShowUpdateTimeDropDown",isShowUpdateTimeDropDown);
provide("isShowFilterFileDropDown",isShowFilterFileDropDown);


const pickedTabType = computed(()=>userStore.pickedTabType);
// watch(() => pickedTabType.value, () => {
//   console.log("pickedTabType.value", pickedTabType.value);
// });
// provide("pickedTabTypeKey",pickedTabType);

function changeIsShowCreateDropDown() {
  isShowCreateDropDown.value = !isShowCreateDropDown.value;
  isShowUserAvatarDropDown.value = false;
  isShowFilterFileDropDown.value = false;
  isShowUpdateTimeDropDown.value = false;
}

function changeIsShowFilterFileDropDown() {
  isShowFilterFileDropDown.value = !isShowFilterFileDropDown.value;
  isShowUserAvatarDropDown.value = false;
  isShowCreateDropDown.value = false;
  isShowUpdateTimeDropDown.value = false;
}

function changeIsShowUpdateTimeDropDown() {
  isShowUpdateTimeDropDown.value = !isShowUpdateTimeDropDown.value;
  isShowUserAvatarDropDown.value = false;
  isShowFilterFileDropDown.value = false;
  isShowCreateDropDown.value = false;
}

let executeTimes = 0;

function changeIsShowUserAvatarDropDown(isShow: boolean) {
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
  isShow ? isShowCreateDropDown.value = false : '';
  isShow ? isShowFilterFileDropDown.value = false : '';
}
</script>

<style scoped lang="scss">
.lightTheme::-webkit-scrollbar-thumb {
  background: transparent !important;
  border: 2px solid transparent;
  box-shadow: inset 4px 0 0 rgba(32, 32, 32, .1);
}

.fixPage__2YBqG {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

::-webkit-scrollbar {
  height: 0;
  width: 0;
}

.lightTheme::-webkit-scrollbar {
  height: 8px;
  position: absolute;
  top: 0;
  width: 8px;
}

.baseWorkSpacePage__TwT88 {
  display: flex;
  height: 100%;
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