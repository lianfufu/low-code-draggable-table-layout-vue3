<template>
  <div id="toolBar" class="leftToolPanel__1M65o fixedBar__PTIhS" style="top: 48px; left: 0px;">
    <div id="vectorToolsProcess" class="a_c">
      <div>
        <div title="设计" @click="doPickBarItem('Design')" class="buttonBox__fkOxw">
          <div data-eventkey="" class="a_c defaultIcon__1dJFM blueFocusVisibleLine__9r-RK toolButton__2OAKy"
               data-contr="hovertip"
               data-option="{&quot;text&quot;:&quot;选择工具&quot;,&quot;direction&quot;:&quot;left&quot;,&quot;shortcut&quot;:&quot;V&quot;,&quot;delay&quot;:500}"
               style="pointer-events: auto;">
            <div
                :class="[pickedDesignBar==='Design'?'svgLightFill__2FI4d beforePseudoBlueBg__w9x9_':'']"
                class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h bigHover__3siWf hoverBg__1OUWP isSvgIcon__eg-t6 hasChangeColor__2xmCT noOpacity__3_E0k"
                style="pointer-events: none;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
                   height="20" viewBox="0 0 20 20" fill="none">
                <defs>
                  <rect id="path_0" x="0" y="0" width="20" height="20"></rect>
                </defs>
                <g opacity="1" transform="translate(0 0)  rotate(0 10 10)">
                  <g>
                    <path id="矩形 2 (轮廓)" fill-rule="evenodd" fill="currentColor"
                          transform="translate(3.0850519999999317 1.782070769230927)  rotate(0 7.315023999999999 8.48223)"
                          opacity="1"
                          d="M14.63 9.01L0 0L3.46 16.96L4.25 15.48L6.95 10.34L14.63 9.01ZM11.3 8.37L6.16 9.26L3.97 13.43L1.73 2.47L11.3 8.37Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div title="预览" @click="doPickBarItem('Preview')" class="buttonBox__fkOxw">
          <div id="createFrameProcess" data-eventkey=""
               class="a_c defaultIcon__1dJFM blueFocusVisibleLine__9r-RK toolButton__2OAKy" data-contr="hovertip"
               data-option="{&quot;text&quot;:&quot;画板&quot;,&quot;direction&quot;:&quot;left&quot;,&quot;shortcut&quot;:&quot;F&quot;,&quot;delay&quot;:500}"
               style="pointer-events: auto;">
            <div
                :class="[pickedDesignBar==='Preview'?'svgLightFill__2FI4d beforePseudoBlueBg__w9x9_':'']"
                class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h bigHover__3siWf hoverBg__1OUWP isSvgIcon__eg-t6 hasChangeColor__2xmCT"
                style="pointer-events: none;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
                   height="20" viewBox="0 0 20 20" fill="none">
                <defs>
                  <rect id="path_0" x="0" y="0" width="20" height="20"></rect>
                </defs>
                <g opacity="1" transform="translate(0 0)  rotate(0 10 10)">
                  <g>
                    <g opacity="1" transform="translate(2.5 2.5)  rotate(0 7.5 7.499999985239221)">
                      <g opacity="1" transform="translate(0 0)  rotate(0 7.5 7.499999985239221)">
                        <path id="直线 1 (轮廓)" fill-rule="evenodd" fill="currentColor"
                              transform="translate(3.1499999999999773 0)  rotate(0 0.6 7.5)" opacity="1"
                              d="M0,0L0,15L1.2,15L1.2,0L0,0Z "></path>
                        <path id="直线 1 (轮廓)" fill-rule="evenodd" fill="currentColor"
                              transform="translate(10.649999999999977 0)  rotate(0 0.6 7.5)" opacity="1"
                              d="M0,0L0,15L1.2,15L1.2,0L0,0Z "></path>
                        <path id="直线 1 (轮廓)" fill-rule="evenodd" fill="currentColor"
                              transform="translate(0 3.150000000000091)  rotate(0 7.5 0.6)" opacity="1"
                              d="M0,1.2L15,1.2L15,0L0,0L0,1.2Z "></path>
                        <path id="直线 1 (轮廓)" fill-rule="evenodd" fill="currentColor"
                              transform="translate(0 10.650000000000091)  rotate(0 7.5 0.6)" opacity="1"
                              d="M0,1.2L15,1.2L15,0L0,0L0,1.2Z "></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="a_c bottomIcon__1ojxG" id="toolBarProcess">
      <div data-eventkey="" class="a_c defaultIcon__1dJFM blueFocusVisibleLine__9r-RK " style="pointer-events: auto;">
        <div
            class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h bigHover__3siWf hoverBg__1OUWP isSvgIcon__eg-t6 hasChangeColor__2xmCT fixedHover__Ef_eO"
            style="pointer-events: none;">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"
               viewBox="0 0 16 16" fill="none">
            <defs>
              <rect id="path_0" x="0" y="0" width="15.999999999999998" height="15.999999999999998"></rect>
            </defs>
            <g opacity="1" transform="translate(0 0)  rotate(0 7.999999999999999 7.999999999999999)">
              <g mask="url(#bg-mask-0)">
                <path id="矩形 1" fill-rule="evenodd" fill="#000000" transform="translate(1 6.5)  rotate(0 1.5 1.5)"
                      opacity="1"
                      d="M2.56 2.56C2.84 2.28 3 1.9 3 1.5C3 1.1 2.84 0.72 2.56 0.44C2.28 0.16 1.9 0 1.5 0C1.1 0 0.72 0.16 0.44 0.44C0.16 0.72 0 1.1 0 1.5C0 1.9 0.16 2.28 0.44 2.56C0.72 2.84 1.1 3 1.5 3C1.9 3 2.28 2.84 2.56 2.56Z"></path>
                <path id="矩形 1" fill-rule="evenodd" fill="#000000" transform="translate(6.5 6.5)  rotate(0 1.5 1.5)"
                      opacity="1"
                      d="M0.44 2.56C0.72 2.84 1.1 3 1.5 3C1.9 3 2.28 2.84 2.56 2.56C2.84 2.28 3 1.9 3 1.5C3 1.1 2.84 0.72 2.56 0.44C2.28 0.16 1.9 0 1.5 0C1.1 0 0.72 0.16 0.44 0.44C0.16 0.72 0 1.1 0 1.5C0 1.9 0.16 2.28 0.44 2.56Z"></path>
                <path id="矩形 1" fill-rule="evenodd" fill="#000000" transform="translate(12 6.5)  rotate(0 1.5 1.5)"
                      opacity="1"
                      d="M1.5 0C1.1 0 0.72 0.16 0.44 0.44C0.16 0.72 0 1.1 0 1.5C0 1.9 0.16 2.28 0.44 2.56C0.72 2.84 1.1 3 1.5 3C1.9 3 2.28 2.84 2.56 2.56C2.84 2.28 3 1.9 3 1.5C3 1.1 2.84 0.72 2.56 0.44C2.28 0.16 1.9 0 1.5 0Z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PickedBarModeType, useDesignStore} from "@/store/designStatusStore";
import {computed} from "vue";

const designStore=useDesignStore();
const pickedDesignBar=computed(()=>designStore.pickedBarModel);

function doPickBarItem(barItemFlag:PickedBarModeType){
  designStore.pickedBarModel=barItemFlag;
}
</script>

<style scoped lang="scss">
.lightTheme .leftToolPanel__1M65o {
  background: #fff;
  border-right: 1px solid hsla(240,3%,86%,.6);
}
.fixedBar__PTIhS {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 5px;
}
.leftToolPanel__1M65o {
  box-sizing: border-box;
  height: calc(100% - 45px);
  padding-top: 4px;
  position: fixed !important;
  width: 40px;
  z-index: 101;
}
.buttonBox__fkOxw {
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  position: relative;
  width: 100%;
}
.toolButton__2OAKy {
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 32px;
  justify-content: center;
  margin: 2px;
  position: relative;
  width: 32px;
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
.defaultIcon__1dJFM .iconPanel__11XjX.svgLightFill__2FI4d.bigHover__3siWf:before {
  height: 30px;
  width: 30px;
}
.defaultIcon__1dJFM .iconPanel__11XjX.svgLightFill__2FI4d:before {
  border-radius: 4px;
  z-index: -1;
}
.defaultIcon__1dJFM .iconPanel__11XjX:before {
  content: "";
  position: absolute;
  text-align: center;
}
.beforePseudoBlueBg__w9x9_:before {
  background: #008efa !important;
}
.svgLightFill__2FI4d.iconPanel__11XjX svg path:not(#filter), .svgLightFill__2FI4d.iconPanel__11XjX svg rect:not(#filter) {
  fill: currentColor;
  color: #fff !important;
}
</style>