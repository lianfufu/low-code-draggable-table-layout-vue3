<template>
  <header class="header__366yk changeTheme__1kQvz">
    <div class="headContentBox__3CS_R undefined">
      <div class="menuButton__3T9f-"
           @click="backToWorkSpace" title="回工作台">
        <div id="showPreference" data-eventkey="" class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK "
             style="pointer-events: auto;">
          <div
              class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h bigHover__3siWf hoverBg__1OUWP isSvgIcon__eg-t6 hasChangeColor__2xmCT noOpacity__3_E0k"
              style="pointer-events: none;">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16" fill="none"><defs><rect id="path_0" x="0" y="0" width="16" height="16"></rect></defs><g opacity="1" transform="translate(0 0)  rotate(0 8 8)"><mask id="bg-mask-0" fill="white"><use xlink:href="#path_0"></use></mask><g mask="url(#bg-mask-0)"><path id="并集" fill-rule="evenodd" fill="currentColor" transform="translate(0.4009485218884947 0.4457977129449091)  rotate(0 7.60018469431979 6.730833621785769)" opacity="1" d="M15.0233 7.96025C14.995 7.98854 14.9667 8.01682 14.9314 8.03804C14.896 8.05925 14.8678 8.07339 14.8253 8.08753C14.79 8.10875 14.7546 8.11582 14.7193 8.12289C14.6768 8.13703 14.6344 8.13703 14.5991 8.12996C14.5637 8.13703 14.5213 8.13703 14.4788 8.12289C14.4435 8.11582 14.4081 8.10875 14.3728 8.08753C14.3304 8.07339 14.3021 8.05925 14.2667 8.03804C14.2314 8.01682 14.2031 7.98854 14.1748 7.96025L13.3859 7.17132L13.3859 12.7517C13.3859 12.9517 13.3159 13.1217 13.1759 13.2517C13.0459 13.3917 12.8759 13.4617 12.6759 13.4617L2.50585 13.4617C2.30585 13.4617 2.13585 13.3917 2.00585 13.2517C1.86585 13.1217 1.79585 12.9517 1.79585 12.7617L1.79585 7.22943L1.0226 8.00268C0.994317 8.03097 0.958961 8.05218 0.923606 8.07339C0.902392 8.0946 0.859966 8.10875 0.824611 8.12996C0.789256 8.13703 0.753901 8.15825 0.711474 8.15825C0.676119 8.16532 0.640763 8.17239 0.598337 8.17239C0.555911 8.17239 0.520556 8.16532 0.478129 8.16532C0.442773 8.15825 0.400348 8.1441 0.364992 8.12289C0.336708 8.10875 0.294282 8.0946 0.265998 8.06632C0.230642 8.04511 0.202357 8.03097 0.174073 8.00268C0.145789 7.9744 0.124576 7.93904 0.103362 7.90369C0.075078 7.8754 0.060936 7.83298 0.0467939 7.80469C0.0326519 7.76227 0.0185099 7.73398 0.0114374 7.68448C0.00436687 7.64913 -0.00270367 7.61377 -0.00270367 7.57135C-0.00270367 7.52892 0.00436783 7.49356 0.0114393 7.45821C0.0185099 7.42285 0.0326509 7.38043 0.0467939 7.338C0.060936 7.30972 0.0821486 7.27436 0.103362 7.23901C0.124576 7.20365 0.15286 7.17537 0.174073 7.15415L7.11786 0.210365C7.25928 0.0689435 7.42899 -0.00176716 7.61991 0.00530386C7.81083 -0.00176716 7.98053 0.068943 8.11488 0.203294L15.0233 7.11173C15.0516 7.14001 15.0799 7.1683 15.1011 7.20365C15.1223 7.23901 15.1365 7.26729 15.1506 7.30972C15.1718 7.34507 15.1789 7.38043 15.186 7.41578C15.2001 7.45821 15.2001 7.50064 15.193 7.53599C15.2001 7.57135 15.2001 7.61377 15.186 7.6562C15.1789 7.69155 15.1718 7.72691 15.1506 7.76226C15.1365 7.80469 15.1223 7.83298 15.1011 7.86833C15.0799 7.90369 15.0516 7.93197 15.0233 7.96025ZM2.99585 6.02943L2.99585 12.2617L12.1859 12.2617L12.1859 5.97132L7.61991 1.40538L2.99585 6.02943Z "></path></g></g></svg>
          </div>
        </div>
      </div>
      <div class="fileNameWrapper__3_0-2">
        <div class="fileNameBox__2HrjF">
          <div class="fileClassify__3K8gC" id="fileClassifyProcess">个人文件</div>
          <div class="separator__grrxT">/</div>
          <div class="">
            <div class="dropBox__24rvG" @dblclick="editPage">
              <div class="readonly-input" v-if="!isEditing">{{productTitle}}</div>
              <input
                  v-else
                  class="readonly-input"
                  v-model="productTitle"
                  style="width:60px"
                  @blur="saveEdit"
                  @keyup.enter="saveEdit"
                  ref="inputRefs"
              >
            </div>
          </div>
          <div id="menuButtonProcess" data-eventkey=""
               class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK dropIconBox__25Yls"
               style="pointer-events: auto;">
            <div class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h isSvgIcon__eg-t6 hasChangeColor__2xmCT"
                 style="pointer-events: none;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                   height="16" viewBox="0 0 16 16" fill="none">
                <g opacity="1" transform="translate(0 0)  rotate(0 8 8)">
                  <path id="矩形 1 (轮廓)" fill-rule="evenodd" fill="currentColor"
                        transform="translate(4.869552607606693 4.224633491377972)  rotate(-45 3.125 3.125)"
                        opacity="1"
                        d="M6.25,6.25L6.25,5.25L1,5.25L1,0L0,0L0,5.55C0,5.74 0.07,5.91 0.21,6.04C0.34,6.18 0.51,6.25 0.7,6.25L6,6.25L6.25,6.25Z "></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="centerHeadButton__35tSe"></div>
      <div class="save_button">
        <span class="save" title="保存" @click="doSave" v-show="!isProcessing"></span>
        <span class="loading" title="保存" v-show="isProcessing"></span>
        <Transition name="fade">
          <span class="save_success" v-show="isShowSaveSuccess">保存成功</span>
        </Transition>
      </div>
      <div class="rightButtonPanel__1uVHS">
        <div class="rightButtonsBox__1pUUP">
          <div class="synergyAvatarPanel__1FrdA noRightLine__1SiuV">
            <div id="avatar-SGtkZ-BEJFidC3ub9UCt" @mouseenter="changeIsShowUserAvatarDropDown(true)" @mouseleave="changeIsShowUserAvatarDropDown(false)" class="a_c avatarsBox__2LVGi" style="">
              <div class="defaultAvatarComp__ESnVt smallSize__35RnG" style="background: rgb(65, 124, 252);">
                <div class="avatarName__2ns9w">Y</div>
              </div>
              <div class="hoverBorder__FNMO8" style="width: 24px; height: 24px;"></div>
              <div class="avatarTipsBox__3hi28 synergyUserTips__1erwO">
                <div class="dummyBox__220Fy">
                  <div class="tipsText__2zq-S">lianfufu</div>
                </div>
              </div>
            </div>
          </div>
          <div style="position: relative;">
            <div class="shareButton__uf3qX blueBg__ZVTVq shareBtn__31Zjs" id="shareCooperativeProcess"
                 style="width: 50px;">
              <div class="shareBtnIcon__3ieky" style="right: 42px;"></div>
              <div class="shareBtnText__3xTn1">分享</div>
              <div class="coverBox__31Eni blueBg__ZVTVq"></div>
            </div>
            <div class="redPoint__3arKS" style="display: none;"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="isShowUserAvatarDropDown" @mouseenter="isShowUserAvatarDropDown&&changeIsShowUserAvatarDropDown(true)"
         @mouseleave="isShowUserAvatarDropDown&&changeIsShowUserAvatarDropDown(false)"
         class="dropDown__17ejW hasLightTheme__K-mpM scrollListBox__1TwtG hasScrollBar__1c7Bs"
         style="width: 96px; right: 30px; max-height: 140px; top: 55px; overflow: visible;">
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
  </header>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {doLogout} from "@/components/workspace-components/CreateAndImportProject";
import {nextTick, onBeforeUnmount, ref, toRaw,watch} from "vue";
import {useDesignStore} from "@/store/designStatusStore";
import {useUserStore} from "@/store/userStore";

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

const router=useRouter();
function backToWorkSpace(){
  router.push("/workspace");
}

const isProcessing=ref(false);
const isShowSaveSuccess=ref(false);
const designStore=useDesignStore();
const userStore=useUserStore();

let timerId=0;
let loadingTimerId=100;

async function doSave(){
  clearTimeout(timerId);
  isProcessing.value=true;
  await new Promise((resolve)=>{
    loadingTimerId = setTimeout(()=>{
      resolve();
    },200);
  });
  const curProduct = userStore.userCreatedProducts.filter(item=>item.id===designStore.product.id)[0];
  const curPage = curProduct.pages.filter(item=>item.id===designStore.currentPageData.id)[0];
  curPage.pageWidgets=JSON.parse(JSON.stringify(toRaw(designStore.currentPageData.pages)));
  curProduct.configs.pageGlobalStyles=JSON.parse(JSON.stringify(toRaw(designStore.currentPageData.pageGlobalStyles)));
  curProduct.configs.navigations=JSON.parse(JSON.stringify(toRaw(designStore.curNavigationConfig)));
  isProcessing.value=false;
  isShowSaveSuccess.value=true;
  timerId = setTimeout(()=>{
    isShowSaveSuccess.value=false;
  },500);
}

onBeforeUnmount(()=>{
  clearTimeout(timerId);
  clearTimeout(loadingTimerId);
});

//编辑当前product的名称
const isEditing=ref<boolean>(false);
const productTitle=ref("");
watch(()=>designStore.product.name,(value:string) => {
  productTitle.value=value;
},{
  immediate:true
});

const saveEdit = () => {
  isEditing.value = false;
  //为了确保页面上修改的内容影响到了对应的data了
  nextTick(() => {
    if(productTitle.value===designStore.product.name){
      return;
    }
    const curProduct = userStore.userCreatedProducts.filter(item=>item.id===designStore.product.id)[0];
    curProduct.name=productTitle.value;
  })
};

let isDbClick=false;
// let timer:number=0;
const inputRefs = ref<HTMLInputElement[]>([]);
// 开始编辑，双击事件
const editPage = (index: number) => {
  isDbClick=true;
  console.log("开始编辑时触发的编辑索引为：",index);
  isEditing.value = true;
  nextTick(() => {
    inputRefs.value[index]?.focus();
    inputRefs.value[index]?.select(); // 新增此行
  });
};
</script>

<style scoped lang="scss">
@keyframes loading-rotate {
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform:rotate(180deg);
  }
  100%{
    transform:rotate(360deg);
  }
}
:root {
  --color-bg-brand: #1890ff; // 定义原始 CSS 变量
  --color-theme-blue: var(--color-bg-brand);
}
button, input, keygen, select, textarea {
  border: none;
  color: black;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Helvetica Neue, sans-serif;
  outline: none;
}

input {
  cursor: default;
}
[data-preferred-theme-light=blueThemeLight] {
  --color-theme-light: var(--color-theme-blue);
}
.lightTheme .header__366yk.changeTheme__1kQvz {
  background: #fff;
  border-bottom: none;
}
.lightTheme .header__366yk {
  border-bottom: none;
  box-shadow: inset 0 -1px 0 #e8e8e8;
}
.save_button{
  display:flex;
  width: 200px;
  height:16px;
  margin-left:10px;
  padding-top:5px;
  justify-content: center;
  align-items:center;
  position:relative;
  span.save{
    width:16px;
    height:16px;
    position:absolute;
    left:0;
    top:0;
    cursor:pointer;
    &::before{
      content:"";
      display:inline-block;
      width:16px;
      height:16px;
      background:url("@/assets/save.png") no-repeat;
    }
  }
  span.loading{
    width:16px;
    height:16px;
    position:absolute;
    left:0;
    top:0;
    cursor:pointer;
    animation: loading-rotate 800ms ease-in-out infinite;
    &::before{
      content:"";
      display:inline-block;
      width:16px;
      height:16px;
      background:url("@/assets/loading.png") no-repeat;
    }
  }
  span.save_success{
    font-size: 14px;
    color:darkgray;
    position:absolute;
    top:-2px;
    left:25px;
  }
}
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.readonly-input {
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  vertical-align: middle;
  line-height: 32px;
  font-size: 15px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.header__366yk {
  box-sizing: border-box;
  cursor: default;
  height: 48px;
  opacity: 1;
  position: fixed !important;
  transition: opacity .35s ease-in-out;
  width: 100%;
  z-index: 102;
}

.headContentBox__3CS_R {
  align-items: center;
  display: flex;
  height: 100%;
  margin: 0 auto;
  min-width: 900px;
  position: relative;
}
//最左侧按钮
.menuButton__3T9f- {
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  position: relative;
  width: 40px;
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
//个人文件
.fileNameWrapper__3_0-2 {
  height: 45px;
  margin-right: 17px;
  position: relative;
}
.fileNameBox__2HrjF, .fileNameBox__2HrjF.isExperienceMode__1MipE {
  align-items: center;
  display: flex;
}
.fileNameBox__2HrjF {
  height: 100%;
  padding-right: 4px;
}
.lightTheme .fileClassify__3K8gC {
  color: rgba(32,32,32,.6);
}
.fileClassify__3K8gC {
  color: hsla(0,0%,100%,.6);
  font-size: 13px;
  margin-left: 4px;
  max-width: 160px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.lightTheme .separator__grrxT {
  color: rgba(32,32,32,.6);
}
.separator__grrxT {
  color: hsla(0,0%,100%,.6);
  font-size: 13px;
  margin: 0 4px;
}
.dropBox__24rvG {
  height: 100%;
  position: relative;
}
.lightTheme .name__3IUc8, .lightTheme .name__3IUc8.isExperienceMode__1MipE {
  color: #202020;
}
.name__3IUc8 {
  color: hsla(0,0%,100%,.8);
  font-size: 13px;
  font-weight: 500;
  height: 100%;
  line-height: 45px;
  max-width: 182px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dropIconBox__25Yls {
  height: 45px;
  right: 0;
  top: 0;
  width: 16px;
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
.lightTheme .fileNameWrapper__3_0-2:after {
  background: #e8e8e8;
}
.fileNameWrapper__3_0-2:after {
  background: hsla(0,0%,100%,.1);
  content: "";
  height: 21px;
  position: absolute;
  right: -17px;
  top: 13px;
  width: 1px;
}
//分享和名称
.rightButtonPanel__1uVHS, .whiteBoardProtoRightPanel__WOwmg {
  align-items: center;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
}
.rightButtonsBox__1pUUP {
  align-items: center;
  display: flex;
  height: 45px;
  padding-right: 8px;
}
.synergyAvatarPanel__1FrdA.noRightLine__1SiuV {
  margin-right: 8px;
}
.synergyAvatarPanel__1FrdA {
  align-items: center;
  display: flex;
  height: 45px;
  position: relative;
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
  height: 24px;
  width: 24px;
}
.defaultAvatarComp__ESnVt {
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.defaultAvatarComp__ESnVt.smallSize__35RnG .avatarName__2ns9w {
  font-size: 10px;
  line-height: 10px;
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
.hoverBorder__FNMO8 {
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.04);
  top: 0;
}
.lightTheme .avatarTipsBox__3hi28 {
  background: #14171a;
  box-shadow: 0 1px 2px rgba(32,32,32,.25);
}
.avatarTipsBox__3hi28 {
  border-radius: 3px;
  display: none;
  left: 50%;
  position: absolute;
  top: 37px;
  transform: translateX(-50%);
}
.dummyBox__220Fy {
  animation: popup__1tkTk .3s cubic-bezier(.34,1.56,.64,1);
  background: #2e2f33;
  border-radius: 3px;
  box-shadow: 0 0 0 1px #3a3b40,0 4px 14px rgba(0,0,0,.3);
  padding: 4px 12px;
  transform-origin: top center;
}
.tipsText__2zq-S {
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  margin: 0 auto;
  max-width: 132px;
  overflow-x: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  border: 0;
  font: inherit;
  margin: 0;
  padding: 0;
}
.shareBtn__31Zjs {
  font-weight: 500;
  position: relative;
}
.shareButton__uf3qX {
  background: #008efa;
  border-radius: 6px;
  height: 28px;
  overflow: hidden;
  position: relative;
  transition: width .2s cubic-bezier(.65,0,.35,1);
  width: 50px;
}
.blueBg__ZVTVq {
  background: #008efa !important;
  z-index: 2;
}
.shareButton__uf3qX .shareBtnIcon__3ieky {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48bWFzayBpZD0iYiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDE2djE2SDBWMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2IpIj48cGF0aCBzdHJva2U9IiNmZmYiIGQ9Ik0xLjQzIDhjMCAxLjgxNC42NTMgMy4zNyAxLjkyNiA0LjY0NEM0LjYzIDEzLjkxNiA2LjE4NiAxNC41NyA4IDE0LjU3czMuMzctLjY1NCA0LjY0My0xLjkyNkMxMy45MTYgMTEuMzcgMTQuNTcgOS44MTQgMTQuNTcgOHMtLjY1NC0zLjM3LTEuOTI3LTQuNjQ0QzExLjM3MSAyLjA4MyA5LjgxMyAxLjQzIDggMS40M2MtMS44MTQgMC0zLjM3LjY1My00LjY0NCAxLjkyNkMyLjA4MyA0LjYzIDEuNDMgNi4xODYgMS40MyA4WiIvPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuOTk1IDE0LjE0NGMtMS4zMi0xLjM1LTIuMDEtMy4yNC0yLjA5LTUuNjdoMi44MXY2LjExaC45NHYtNi4xMWgyLjc2Yy0uMDggMi40My0uNzkgNC4zMi0yLjEgNS42N2wuNjcuNjZjMS41LTEuNTMgMi4yOS0zLjY0IDIuMzctNi4zM2gxLjk0di0uOTRoLTEuOTRjLS4xLTIuMjgtLjg5LTQuNC0yLjM5LTYuMzNsLS43NC41N2MxLjM2IDEuNzcgMi4wOSAzLjY5IDIuMTkgNS43NmgtMi43NnYtNi4xMWgtLjk0djYuMTFoLTIuODFjLjA5LTIuMDguODItMy45OSAyLjE5LTUuNzZsLS43NS0uNTdjLTEuNDkgMS45My0yLjI5IDQuMDQtMi4zOCA2LjMzaC0yLjM2di45NGgyLjM2Yy4wOCAyLjY5Ljg3IDQuOCAyLjM2IDYuMzNsLjY3LS42NloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvZz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDE2djE2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+);
  background-size: 16px 16px;
  height: 16px;
  position: absolute;
  right: 42px;
  top: 6px;
  transition: .2s linear;
  width: 16px;
  z-index: 1;
}
.shareButton__uf3qX .shareBtnText__3xTn1 {
  color: white;
  font-size: 13px;
  height: auto;
  line-height: 28px;
  position: absolute;
  right: 12px;
  z-index: 3;
}
.shareButton__uf3qX .coverBox__31Eni {
  background: #008efa;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 10px;
  z-index: 2;
}
.blueBg__ZVTVq {
  background: #008efa !important;
  z-index: 2;
}
.lightTheme .shareBtn__31Zjs:after {
  background: #e8e8e8;
}
.shareBtn__31Zjs:after {
  background: hsla(0,0%,100%,.1);
  content: "";
  height: 21px;
  position: absolute;
  right: -13px;
  width: 1px;
}

//左上角小屋鼠标移入效果
.defaultIcon__1dJFM .iconPanel__11XjX.isActive__1lYua.isBaseIcon__afPna, .defaultIcon__1dJFM .iconPanel__11XjX.noOpacity__3_E0k.isBaseIcon__afPna {
  opacity: 1;
}
.defaultIcon__1dJFM:hover .canHover__2iU7h.isBaseIcon__afPna {
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
.lightTheme .defaultIcon__1dJFM:hover .isSvgIcon__eg-t6.hoverBg__1OUWP.bigHover__3siWf:before {
  background-color: rgba(0,0,0,.05);
  border-radius: 4px;
  height: 30px;
  width: 30px;
  z-index: 1;
}
.lightTheme .defaultIcon__1dJFM:hover .isSvgIcon__eg-t6.hoverBg__1OUWP.bigHover__3siWf svg {
  position: relative;
  z-index: 2;
}


//退出登录效果
.lightTheme .dropDown__17ejW {
  cursor: default;
}

.dropDown__17ejW {
  animation: popup__110Q5 .3s cubic-bezier(.34, 1.56, .64, 1);
  background: #fff;
  cursor: pointer !important;
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


</style>