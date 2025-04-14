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
              <svg t="1743409751063" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8412" width="20" height="20"><path d="M950.613333 720.533333L742.186667 512l196.906666-196.906667c12.48-12.48 12.48-32.746667 0-45.226666L754.24 84.906667c-12.48-12.48-32.746667-12.48-45.226667 0L512 281.813333 442.453333 212.266667c-0.106667-0.106667-0.106667-0.213333-0.213333-0.213334-0.106667-0.106667-0.213333-0.106667-0.213333-0.213333L303.466667 73.386667c-12.48-12.48-32.746667-12.48-45.226667 0L73.386667 258.24c-12.48 12.48-12.48 32.746667 0 45.226667L281.92 512 84.906667 708.906667c-5.973333 5.973333-9.386667 14.08-9.386667 22.613333v184.853333c0 17.706667 14.293333 32 32 32h184.853333c8.533333 0 16.64-3.413333 22.613334-9.386666L512 742.08l208.533333 208.533333c6.293333 6.293333 14.4 9.386667 22.613334 9.386667s16.426667-3.093333 22.613333-9.386667l184.853333-184.853333c12.48-12.48 12.48-32.746667 0-45.226667zM731.52 152.853333l139.626667 139.626667-93.44 93.44-139.52-139.733333 93.333333-93.333334z m-590.293333 128l139.626666-139.626666 93.44 93.44-46.72 46.72c-12.48 12.48-12.48 32.746667 0 45.226666 6.293333 6.293333 14.4 9.386667 22.613334 9.386667s16.426667-3.093333 22.613333-9.386667l46.72-46.72 47.253333 47.146667-139.626666 139.733333-185.92-185.92z m137.92 603.626667H139.52V744.853333l453.333333-453.333333 139.626667 139.626667-453.333333 453.333333z m464-1.706667L557.226667 696.853333l139.626666-139.626666 47.146667 47.146666-46.72 46.72c-12.48 12.48-12.48 32.746667 0 45.226667 6.293333 6.293333 14.4 9.386667 22.613333 9.386667s16.426667-3.093333 22.613334-9.386667l46.72-46.72 93.44 93.44-139.52 139.733333z" p-id="8413"></path></svg>
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
              <svg t="1743409542868" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16604" width="20" height="20"><path d="M845.272615 679.817846L789.228308 467.101538 735.744 680.408615 557.764923 746.889846 736.492308 811.323077 792.536615 1024 846.060308 810.614154 1024 744.172308Z" p-id="16605"></path><path d="M415.586462 467.771077L408.733538 624.915692 293.572923 697.068308 428.032 716.484923 497.821538 857.481846 504.713846 700.297846 619.795692 628.184615 485.376 608.728615Z" p-id="16606"></path><path d="M669.853538 599.945846L685.528615 506.643692 759.571692 471.945846 680.644923 450.481231 649.294769 361.117538 633.698462 454.537846 559.616 489.235692 638.503385 510.660923Z" p-id="16607"></path><path d="M433.506462 897.811692L182.350769 897.811692c-59.273846 0-107.52-48.246154-107.52-107.52L74.830769 182.350769c0-59.273846 48.246154-107.52 107.52-107.52l607.901538 0c59.313231 0 107.52 48.246154 107.52 107.52l0 255.369846c28.711385 20.637538 53.956923 45.686154 74.830769 74.279385L972.603077 182.350769c0-100.745846-81.604923-182.350769-182.390154-182.350769L182.350769 0C81.604923 0 0 81.604923 0 182.350769l0 607.901538c0 100.785231 81.604923 182.390154 182.350769 182.390154l323.899077 0C478.286769 951.611077 453.632 926.444308 433.506462 897.811692z" p-id="16608"></path></svg>
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