<template>
  <div ref="leftPanelRoot" class="leftMenuPanel__1fi_B" datatype="leftMenu"
       :style="{left:'40px',width:leftMenuPanelWidth+'px'}">
    <div class="leftPanelHeader__1GjLk">
      <ul class="vikingMenu__2dqwW menuLine__M5Q8l blueFocusVisibleLine__9r-RK switchTab__2-YsP" tabindex="0">
        <li @click="handlePickTabItem" :class="[pickedTabIndex==0?'isActive__1D-bU':'']"
            class="menuItem__Wp88Y undefined" id="layerCatalogue"
            style="width: auto; padding: 0px 8px;" data-tabindex="0">
          <span class="" style="position: relative;">页面</span>
        </li>
        <li @click="handlePickTabItem" :class="[pickedTabIndex==1?'isActive__1D-bU':'']" class="menuItem__Wp88Y"
            id="styleManage" style="width: auto; padding: 0px 8px;" data-tabindex="1">
          <span class="" style="position: relative;">组件</span>
        </li>
        <li @click="handlePickTabItem" :class="[pickedTabIndex==2?'isActive__1D-bU':'']" class="menuItem__Wp88Y"
            id="styleManage" style="width: auto; padding: 0px 8px;" data-tabindex="2">
          <span class="" style="position: relative;">导航</span>
        </li>
        <div ref="bottomLineElem" class="bottomLine__rocs1" style="width: 33.333%; left: 0px;"></div>
      </ul>
    </div>
    <div class="leftPanel__U4gGk">
      <div v-if="pickedTabIndex===0" class="leftMenuPanel__We_O3">
        <div class="pageHeadPanel__3E95l" :style="{height:pageHeight+'px'}">
          <div class="headToolPanel__3mmAe">
            <div class="pageCount__2Px8N" style="max-width: 212px;">页数：{{ pageCount }}</div>
            <div class="buttonPanel__3oPi0">
              <div class="addButtonWrapper__2E-7M" @click="addPage">
                <div data-eventkey="" class="a_c defaultIcon__1dJFM blueFocusVisibleLine__9r-RK addButton__1m8VX"
                     data-contr="hovertip" data-option="{&quot;text&quot;:&quot;新建页面&quot;,&quot;delay&quot;:500}"
                     style="pointer-events: auto;">
                  <div
                      class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h hoverBg__1OUWP isSvgIcon__eg-t6 hasChangeColor__2xmCT"
                      style="pointer-events: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                         height="16" viewBox="0 0 16 16" fill="none">
                      <g opacity="1"
                         transform="translate(5.684341886080802e-14 -1.7053025658242404e-13)  rotate(0 8 8)">
                        <path id="Rectangle 5" fill-rule="evenodd" fill="currentColor"
                              transform="translate(3 7.399999999999636)  rotate(0 5 0.6)" opacity="1"
                              d="M10,1.2L10,0L0,0L0,1.2L10,1.2Z "></path>
                        <path id="Rectangle 5" fill-rule="evenodd" fill="currentColor"
                              transform="translate(3 7.399999999999636)  rotate(-90 5 0.6)" opacity="1"
                              d="M10,1.2L10,0L0,0L0,1.2L10,1.2Z "></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="selectBox__3DZUq">
                  <div id=""
                       class="selectBox__3tblH hasLightTheme__1o8Yp noBackground__3YTQz undefined isHideBtn__3OArF isHideText__1F16u noFixedWidth__KRju0"
                       data-text="" data-value="" style="height: 16px; line-height: 16px;">
                    <div
                        class="expandIcon__yjBfN noFixedIcon__HQ9d5 hasLightTheme__1o8Yp hasTransform__1wRTm addMenu__3VGoW">
                      <div class="wrapperIcon__3sHfR blueFocusVisibleLine__9r-RK selectIcon__34c_Q expandIcon">
                        <div data-eventkey="" data-tab="true"
                             class="a_c defaultIcon__1dJFM blueFocusVisibleLine__9r-RK advIcon__1vhDw undefined"
                             style="pointer-events: auto;">
                          <div
                              class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h hoverBg__1OUWP isSvgIcon__eg-t6 hasChangeColor__2xmCT noOpacity__3_E0k"
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
              </div>
              <div @click="()=>isCollapsed=!isCollapsed" data-eventkey=""
                   class="a_c defaultIcon__1dJFM blueFocusVisibleLine__9r-RK packButton__3Kxha"
                   data-contr="hovertip" data-option="{&quot;text&quot;:&quot;收起&quot;,&quot;delay&quot;:500}"
                   style="pointer-events: auto;">
                <div class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h hoverBg__1OUWP isSvgIcon__eg-t6"
                     style="pointer-events: none;">
                  <svg v-if="!isCollapsed" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       width="16"
                       height="16" viewBox="0 0 16 16" fill="none">
                    <defs>
                      <rect id="path_0" x="0" y="0" width="16" height="16"></rect>
                    </defs>
                    <g opacity="1" transform="translate(0 0)  rotate(0 8 8)">
                      <g>
                        <path id="iconSvg" fill-rule="evenodd" fill="rgba(32, 32, 32, 1)"
                              transform="translate(4 5)  rotate(0 4 2.2499999999999996)" opacity="1"
                              d="M7.96,4.19C7.97,4.16 7.98,4.13 7.99,4.1C8,4.07 8,4.03 8,4C8,3.97 8,3.93 7.99,3.9C7.98,3.87 7.97,3.84 7.96,3.81C7.95,3.78 7.93,3.75 7.92,3.72C7.9,3.69 7.88,3.67 7.85,3.65L4.35,0.15C4.31,0.1 4.25,0.06 4.19,0.04C4.13,0.01 4.07,0 4,0C3.93,0 3.87,0.01 3.81,0.04C3.75,0.06 3.69,0.1 3.65,0.15L0.15,3.65C0.1,3.69 0.06,3.75 0.04,3.81C0.01,3.87 0,3.93 0,4C0,4.07 0.01,4.13 0.04,4.19C0.06,4.25 0.1,4.31 0.15,4.35C0.17,4.38 0.19,4.4 0.22,4.42C0.25,4.43 0.28,4.45 0.31,4.46C0.34,4.47 0.37,4.48 0.4,4.49C0.43,4.5 0.47,4.5 0.5,4.5C0.53,4.5 0.57,4.5 0.6,4.49C0.63,4.48 0.66,4.47 0.69,4.46C0.72,4.45 0.75,4.43 0.78,4.42C0.81,4.4 0.83,4.38 0.85,4.35L4,1.21L7.15,4.35C7.17,4.38 7.19,4.4 7.22,4.42C7.25,4.43 7.28,4.45 7.31,4.46C7.34,4.47 7.37,4.48 7.4,4.49C7.43,4.5 7.47,4.5 7.5,4.5C7.53,4.5 7.57,4.5 7.6,4.49C7.63,4.48 7.66,4.47 7.69,4.46C7.72,4.45 7.75,4.43 7.78,4.42C7.81,4.4 7.83,4.38 7.85,4.35C7.88,4.33 7.9,4.31 7.92,4.28C7.93,4.25 7.95,4.22 7.96,4.19Z "></path>
                      </g>
                    </g>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                       height="16" viewBox="0 0 16 16" fill="none">
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
          <div class="sc-dChVcU hCFKFZ">
            <div class="customScrollContainer__3XqlB">
              <div class="customScrollPanel__2D7nr" id="page-panel-tree-custom-scroll-area">
                <div id="page-panel-tree-custom-scroll-content">
                  <div role="tree" class="page-panel-tree">
                    <div><input tabindex="0" aria-label="for screen reader" value=""
                                style="width: 0px; height: 0px; display: flex; overflow: hidden; opacity: 0; border: 0px; padding: 0px; margin: 0px;">
                    </div>
                    <div class="page-panel-tree-treenode" aria-hidden="true"
                         style="position: absolute; pointer-events: none; visibility: hidden; height: 0px; overflow: hidden; border: 0px; padding: 0px;">
                      <div class="page-panel-tree-indent">
                        <div class="page-panel-tree-indent-unit"></div>
                      </div>
                    </div>
                    <div class="page-panel-tree-list" style="position: relative;">
                      <div class="page-panel-tree-list-holder">
                        <div>
                          <div class="page-panel-tree-list-holder-inner"
                               style="display: flex; flex-direction: column;" v-for="(page, index) in pages"
                               :key="index"
                               @click="pickedItem(index)"
                               @dblclick="editPage(index)"
                               :class="{ editing: page.isEditing }">
                            <div data-id="d2NIZHA98c1V4LLGL5Blg"
                                 :class="[page.isPicked?'page-panel-tree-treenode-bottom-selected page-panel-tree-treenode-bottom-selected page-panel-tree-treenode-selected':'']"
                                 class="page-panel-tree-treenode page-panel-tree-treenode-switcher-close page-panel-tree-treenode-leaf-last page-panel-tree-treenode-draggable">
                              <span aria-hidden="true" class="page-panel-tree-indent"></span><span
                                class="page-panel-tree-switcher page-panel-tree-switcher-noop"></span><span
                                class="page-panel-tree-node-content-wrapper page-panel-tree-node-content-wrapper-normal"><span
                                :style="{opacity:page.isPicked?1:0}" class="page-panel-tree-iconEle page-panel-tree-icon__customize"><div
                                class="page-panel-tree-type-icon-wrapper page-panel-tree-is-select"><div
                                class="a_c cursor-pointer__34ZCy baseIconBox__QdtZC canHover__26i2q hasHoverBg__2jPIy undefined"
                                data-contr="hovertip"
                                data-option="{&quot;text&quot;:&quot;点击切换为白板模式&quot;,&quot;shortcut&quot;:&quot;Shift W&quot;}"
                                style="width: 24px; height: 24px;"><div class="baseIcon__3CiFl undefined"
                                                                        data-theme="false"
                                                                        style="pointer-events: none;"><svg
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="16" height="16" viewBox="0 0 16 16" fill="none"><g opacity="1"
                                                                                          transform="translate(0 0)  rotate(0 8 8)"><g
                                opacity="1" transform="translate(2 2)  rotate(0 6 6)"><path id="形状结合"
                                                                                            fill-rule="evenodd"
                                                                                            fill="currentColor"
                                                                                            transform="translate(0.6366642549999142 1.9602259944999787)  rotate(0 5.363335745 4.039774005500001)"
                                                                                            opacity="1"
                                                                                            d="M3.57,5.82L1.59,3.84C1.3,3.55 0.82,3.55 0.53,3.84L0.53,3.84C0.39,3.98 0.31,4.17 0.31,4.37C0.31,4.57 0.39,4.76 0.53,4.9L3,7.37C3.39,7.76 4.02,7.76 4.41,7.37L10.2,1.59C10.49,1.3 10.49,0.82 10.2,0.53L10.2,0.53C10.06,0.39 9.87,0.31 9.67,0.31C9.47,0.31 9.28,0.39 9.14,0.53L3.85,5.82C3.77,5.9 3.65,5.9 3.57,5.82Z "></path></g></g></svg></div></div></div></span><span
                                class="page-panel-tree-title"><div id="page-rename-input-d2NIZHA98c1V4LLGL5Blg"
                                                                   class="sc-gJCZQp jtRfni"><div
                                class="list-change-name__1iUrS C-name-input__2hfj-">
                              <div class="readonly-input" v-if="!page.isEditing">{{ page.name }}</div>
                              <input
                                  v-else
                                  class="readonly-input"
                                  v-model="page.name"
                                  @blur="saveEdit(index)"
                                  @keyup.enter="saveEdit(index)"
                                  ref="inputRefs"
                              >
                            </div></div></span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="customScrollbarWrapper__3XaFn" style="right: -6px;">
                <div class="customScrollbar__2YlZl" id="customScrollbar" style="height: 0px;"></div>
              </div>
            </div>
          </div>
          <div class="sc-rPWID gqxRnQ cursor-row-resize__3kQrz" @mousedown="doResizePanelHeight"></div>
        </div>
        <div class="searchPanel__3WAhP">
          <div class="rowBox__20W7k canFold__1Z0SO">
            <div class="a_c searchButton__2W9Lg" data-contr="hovertip"
                 data-option="{&quot;text&quot;:&quot;筛选&quot;}">
              <div id="" class="selectBox__26CVl selectBox__3tblH hasLightTheme__1o8Yp noBackground__3YTQz undefined"
                   data-text="" data-value="" style="height: 28px; width: 32px; max-width: 32px; line-height: 28px;">
                <div class="expandIcon__yjBfN hasLightTheme__1o8Yp hasTransform__1wRTm">
                  <div class="wrapperIcon__3sHfR blueFocusVisibleLine__9r-RK selectIcon__34c_Q expandIcon">
                    <div data-eventkey="" data-tab="true"
                         class="a_c defaultIcon__1dJFM blueFocusVisibleLine__9r-RK advIcon__1vhDw undefined"
                         style="pointer-events: auto;">
                      <div
                          class="iconPanel__11XjX isBaseIcon__afPna isSvgIcon__eg-t6 hasChangeColor__2xmCT noOpacity__3_E0k"
                          style="pointer-events: none;">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                             height="16" viewBox="0 0 16 16" fill="none">
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
              <div data-eventkey="" class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK baseIcon__35dUa"
                   style="pointer-events: auto;">
                <div class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h isSvgIcon__eg-t6"
                     style="pointer-events: none;">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                       height="16" viewBox="0 0 16 16" fill="none">
                    <g opacity="1" transform="translate(0 0)  rotate(0 8 8)">
                      <path id="iconSvg" fill-rule="evenodd" fill="rgba(32, 32, 32, 1)"
                            transform="translate(2 2)  rotate(0 6 6)" opacity="1"
                            d="M5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C6.20186 10 7.30512 9.57524 8.16775 8.86775L11.15 11.85C11.17 11.88 11.19 11.9 11.22 11.92C11.25 11.93 11.28 11.95 11.31 11.96L11.4 11.99C11.43 12 11.47 12 11.5 12C11.53 12 11.57 12 11.6 11.99L11.69 11.96C11.72 11.95 11.75 11.93 11.78 11.92C11.81 11.9 11.83 11.88 11.85 11.85C11.88 11.83 11.9 11.81 11.92 11.78C11.93 11.75 11.95 11.72 11.96 11.69L11.99 11.6C12 11.57 12 11.53 12 11.5C12 11.47 12 11.43 11.99 11.4L11.96 11.31C11.95 11.28 11.93 11.25 11.92 11.22C11.9 11.19 11.88 11.17 11.85 11.15L8.86775 8.16775C9.57524 7.30512 10 6.20186 10 5C10 2.24 7.76 0 5 0Z M5 1C2.79 1 1 2.79 1 5C1 7.21 2.79 9 5 9C7.21 9 9 7.21 9 5C9 2.79 7.21 1 5 1Z "></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="cursor-pointer__34ZCy baseIconBox__QdtZC canHover__26i2q dropIcon__3tSgC"
                   style="width: 16px; height: 16px;">
                <div class="baseIcon__3CiFl undefined" data-theme="false" style="pointer-events: none;">
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
            <input class="searchInput__2WK-1" id="resourceSearchInput" placeholder="搜索" spellcheck="false"
                   autocomplete="off" value="" style="width: calc(100% - 48px);"></div>
          <div data-eventkey="" class="a_c defaultIcon__1dJFM blueFocusVisibleLine__9r-RK foldIcon__hv-G9"
               data-contr="hovertip" title="展开全部"
               data-option="{&quot;text&quot;:&quot;展开全部&quot;,&quot;shortcut&quot;:&quot;Ctrl Shift F&quot;,&quot;delay&quot;:500}"
               style="pointer-events: auto;">
            <div
                class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h hoverBg__1OUWP isSvgIcon__eg-t6 hasChangeColor__2xmCT"
                style="pointer-events: none;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16"
                   height="16" viewBox="0 0 16 16" fill="none">
                <g opacity="1" transform="translate(0 0)  rotate(0 8 7.999999999999999)">
                  <path id="路径 3 (轮廓)" fill="currentColor"
                        transform="translate(4.173530000000028 3.869456999999784)  rotate(0 3.8253999999999997 2.0195415)"
                        opacity="1" d="M0.65,0L0,0.76L3.8,4.04L7.65,0.76L7,0L3.81,2.72L0.65,0Z "></path>
                  <path id="路径 3 (轮廓)" fill="currentColor"
                        transform="translate(4.173530000000028 8.369456999999784)  rotate(0 3.8253999999999997 2.0195415000000003)"
                        opacity="1" d="M0.65,0L0,0.76L3.8,4.04L7.65,0.76L7,0L3.81,2.72L0.65,0Z "></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="fileListPanel__BY544" id="leftMenuListPanel">
          <div>
            <div aria-label="grid" aria-readonly="true" class="ReactVirtualized__Grid ReactVirtualized__List"
                 id="fileMenuList" role="grid"
                 style="box-sizing: border-box; direction: ltr; height: 461px; position: relative; width: 235px; will-change: transform; overflow: hidden; outline: none; scrollbar-width: none;">
              <div class="ReactVirtualized__Grid__innerScrollContainer" role="rowgroup"
                   style="width: auto; height: 32px; max-width: 235px; max-height: 32px; overflow: hidden; position: relative;">
                <div style="height: 32px; left: 0px; position: absolute; top: 0px; width: 100%;">
                  <div data-folder="true" data-id="0:1" data-deep="0" data-isfixed="false"
                       class="layerPanel__1TQCJ framePanel__1IDIL" contenteditable="false">
                    <div style="width: 6px; height: 100%; flex-shrink: 0;"></div>
                    <div data-drag="hide" class="designIcon__1566t triangleIcon__1pPRl noTriangleIcon__2KgJw"></div>
                    <div class="shape__3k6A7">
                      <div>
                        <div class="designIcon__1566t">
                          <div style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;">
                            <!--?xml version="1.0" encoding="UTF-8"?-->
                            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <g id="画板备份" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path
                                    d="M5,2.3 L5,3.799 L11,3.799 L11,2.3 L12.2,2.3 L12.2,3.799 L13.7,3.8 L13.7,5 L12.2,4.999 L12.2,10.999 L13.7,11 L13.7,12.2 L12.2,12.199 L12.2,13.7 L11,13.7 L11,12.199 L5,12.199 L5,13.7 L3.8,13.7 L3.8,12.199 L2.3,12.2 L2.3,11 L3.8,10.999 L3.8,4.999 L2.3,5 L2.3,3.8 L3.8,3.799 L3.8,2.3 L5,2.3 Z M11,4.999 L5,4.999 L5,10.999 L11,10.999 L11,4.999 Z"
                                    id="iconSvg" fill="rgba(32, 32, 32, 1)"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frameName__2pv0V">
                      <div class="list-change-name__1iUrS C-name-input__2hfj- isFirstFrame__1GH8g">
                        <div class="readonly-input"
                             style="width: 184px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                          iPhone 14 Pro Max 1
                        </div>
                        <pre>iPhone 14 Pro Max 1</pre>
                      </div>
                    </div>
                    <div data-drag="hide" class="lockInvisibleButton__qTnQ3 undefined" style="right: 14px;">
                      <div class="emptyIcon__1gh8q"></div>
                      <div class="emptyIcon__1gh8q"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListWidgetsComponents v-else-if="pickedTabIndex===1" v-model="initializing"/>
      <ListWidgetsComponents v-else-if="pickedTabIndex===2" v-model="navInitializing"/>
    </div>
    <div class="dragListLine__1NQSJ" @mousedown="doResizePanelWidth"></div>
    <div id="leftMenuPanelCover" class="leftPanelCover__G9Cps"></div>
  </div>
</template>

<script setup lang="ts">
import {computed, onBeforeUnmount, nextTick, onMounted, ref, watch} from "vue";
import {useResizeDomColumnSize, useResizeDomRowSize} from "@/hooks/useResizeDomSize";
import ListWidgetsComponents from "@/components/designview-components/core-design-components/ListWidgetsComponents.vue";
import {useDesignStore} from "@/store/designStatusStore";
import {useStore} from "@/store";

const designStore = useDesignStore();

const store=useStore();
const initializing=computed(()=>{
  console.log(store.initializing,"store.initializing");
  return store.initializing;
});
const navInitializing=ref([{
  "component": "McNav",
  "name": "导航",
  "icon": "icon-daohang",
  "tabList": [
    {
      "id": "0001",
      "text": "推荐酒店",
      "icon": "icon-shop"
    },
    {
      "id": "0002",
      "text": "热销抢购",
      "icon": "icon-sort"
    },
    {
      "id": "0003",
      "text": "促销门票",
      "icon": "icon-goods"
    },
    {
      "id": "0004",
      "text": "机票团购",
      "icon": "icon-my"
    }
  ],
  "styles": {
    "color": "#000000",
    "backgroundColor": "#ffffff",
    "pickedColor": "#008efa",
    "height": 50
  }
}]);

const bottomLineElem = ref(null);
const pickedTabIndex = computed(()=>designStore.pickedDesignMode);

function handlePickTabItem(event) {
  designStore.pickedDesignMode = Number(event.currentTarget.dataset["tabindex"]);
  let left;
  switch (pickedTabIndex.value) {
    case 0:
      left=0;
      break;
    case 1:
      left="33.333%";
      break;
    case 2:
      left="66.667%";
      break;
  }
  bottomLineElem.value.style.left = left;
}

interface PageItem {
  name: string;
  isEditing: boolean;
  isPicked:boolean;
}

const inputRefs = ref<HTMLInputElement[]>([]);
//控制页面页数和页的增删改及重命名
const pickedPageName = computed(() => designStore.currentPageName);
const pages = ref<PageItem[]>([]);
const pageCount = computed(() => pages.value.length);
// watch(()=>designStore.pageNamesWithPageDataMap.ke)
onMounted(() => {
  const results:PageItem[] = [];
  // console.log(1);
  designStore.pageNamesWithPageDataMap.forEach((value, key) => {
    results.push({name: key, isEditing: false,isPicked:false});
  });
  // console.log(2);
  results[0].isPicked=true;//默认选中第一项
  pages.value = results;
})
// 添加新页面
const addPage = () => {
  const newPage = {
    name: `页面${pages.value.length + 1}`,
    isEditing: true, // 新增页面自动进入编辑状态
    isPicked:false
  };
  //防止默认名称存在冲突
  let i=pages.value.length + 1;
  while (pages.value.findIndex(item=>item.name===`页面${i}`)!==-1){
    i++;
  }
  newPage.name=`页面${i}`;

  pages.value.push(newPage);

  // 自动聚焦到新输入框
  nextTick(() => {
    const lastInput = inputRefs.value[inputRefs.value.length - 1];
    lastInput?.focus();
    lastInput?.select();
  });
};

// 置为选中状态，单击事件
function setPickedItemStatus(index:number){
  //更新isPicked的值
  pages.value.forEach(item=>{
    item.isPicked=false;
  });
  pages.value[index].isPicked = true;
}
let isDbClick=false;
let timer:number=0;
// const store=useStore();
function pickedItem(index: number){
  isDbClick=false;
  timer = setTimeout(()=>{
    if(isDbClick){
      return;
    }
    console.log("执行了单击事件");
    designStore.currentPageName = pages.value[index].name;
    store.curComponent=null;
    setPickedItemStatus(index);
  },200);
}

// 开始编辑，双击事件
const editPage = (index: number) => {
  isDbClick=true;
  clearTimeout(timer);
  console.log("开始编辑时触发的编辑索引为：",index);
  pages.value[index].isEditing = true;
  nextTick(() => {
    inputRefs.value[index]?.focus();
    inputRefs.value[index]?.select(); // 新增此行
  });
};

// 保存编辑
const saveEdit = (index: number) => {
  pages.value[index].isEditing = false;
  //为了确保页面上修改的内容影响到了对应的data了
  nextTick(() => {
    //代表是新增项
    console.log("失去焦点时执行：",designStore.pageNamesWithPageDataMap.size === pageCount.value,designStore.pageNamesWithPageDataMap.size,pageCount.value);
    if (designStore.pageNamesWithPageDataMap.size !== pageCount.value) {
      designStore.pageNamesWithPageDataMap.set(pages.value[index].name, {pageGlobalStyles:{padding:0,backgroundColor:"purple"},pages:[]});
      console.log("/代表是新增项");
    } else {
      const mapArray = Array.from(designStore.pageNamesWithPageDataMap);
      const modifiedArray = mapArray.map(([key,  value],index2) => {
        return index2 === index ? [pages.value[index].name, value] : [key, value];
      });
      designStore.pageNamesWithPageDataMap=new Map(modifiedArray);
    }
    designStore.currentPageName = pages.value[index].name;
    setPickedItemStatus(index);
    store.curComponent=null;
    console.log("修改后的编辑状态值",Array.from(designStore.pageNamesWithPageDataMap));
  })
};

// watch(()=>designStore.currentPageName)


//控制页面选项栏的折叠和展开
const pageHeight = ref(32);
const isCollapsed = ref(false);
const lastExpandHeight = ref(161);
watch(() => isCollapsed.value, (val) => {
  if (val) {
    lastExpandHeight.value = pageHeight.value;
    pageHeight.value = 32;
  } else {
    pageHeight.value = lastExpandHeight.value;
  }
}, {
  immediate: true
});

//控制高度
function doResizePanelHeight(event: any) {
  useResizeDomRowSize(event, pageHeight, ref(Number.NaN), [100, 400]);
}

//控制左侧侧边栏的宽度
const leftMenuPanelWidth = computed(() => designStore.leftMenuPanelWidth);
console.log("designStore.leftMenuPanelWidth", typeof designStore.leftMenuPanelWidth);

function doResizePanelWidth(event: any) {
  useResizeDomColumnSize(event, designStore, designStore, [200, 400]);
}
</script>

<style scoped lang="scss">
.lightTheme .leftMenuPanel__1fi_B {
  background-color: #fff;
  border-right: 1px solid #ebeced;
}

.leftMenuPanel__1fi_B {
  background: #2e2f33;
  border-right: 1px solid #1a1b1c;
  height: calc(100vh - 48px);
  left: 40px;
  position: fixed;
  top: 48px;
  z-index: 100;
}

a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  border: 0;
  font: inherit;
  margin: 0;
  padding: 0;
}

//头部切换tab
.lightTheme .menuLine__M5Q8l {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
}

.switchTab__2-YsP {
  margin-left: 4px;
}

.menuLine__M5Q8l {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 40px;
}

.vikingMenu__2dqwW {
  font-size: 12px;
  position: relative;
}

//item
.lightTheme .isActive__1D-bU, .lightTheme .menuItem__Wp88Y {
  color: #202020;
}

.isActive__1D-bU {
  color: #fff;
  opacity: 1;
}

.menuItem__Wp88Y {
  align-items: center;
  box-sizing: border-box;
  color: hsla(0, 0%, 100%, .8);
  display: flex;
  flex: auto;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  opacity: .5;
  position: relative;
  z-index: 1;
}

.menuItem__Wp88Y :first-child {
  pointer-events: none !important;
}

.menuItem__Wp88Y {

}

//页面和树状结构
.lightTheme .leftPanel__U4gGk {
  background-color: #fff;
}

.leftPanel__U4gGk {
  height: 100%;
  width: 100%;
}

.lightTheme .leftMenuPanel__We_O3 {
  background: #fff;
}

.leftMenuPanel__We_O3 {
  background: #2e2f33;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.lightTheme .pageHeadPanel__3E95l {
  color: #202020;
}

.pageHeadPanel__3E95l {
  box-sizing: border-box;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  position: relative;
}

.headToolPanel__3mmAe {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 32px;
  justify-content: space-between;
  padding: 0 9px 0 11px;
}

.pageCount__2Px8N {
  opacity: .7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}

.buttonPanel__3oPi0 {
  display: flex;
}

.addButtonWrapper__2E-7M {
  align-items: center;
  display: flex;
  height: 28px;
  justify-content: center;
  position: relative;
  width: 28px;
}

.addButton__1m8VX, .packButton__3Kxha {
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

//添加符号按钮
.addButtonWrapper__2E-7M .selectBox__3DZUq {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.lightTheme .selectBox__3tblH.hasLightTheme__1o8Yp {
  color: #000;
}

.selectBox__3tblH.noBackground__3YTQz {
  background: transparent;
}

.selectBox__3tblH.isHideBtn__3OArF, .selectBox__3tblH.isHideText__1F16u {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.selectBox__3tblH.isHideBtn__3OArF {
  opacity: 0;
}

.selectBox__3tblH.noFixedWidth__KRju0 {
  width: unset;
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

.selectBox__3tblH .expandIcon__yjBfN.noFixedIcon__HQ9d5 {
  position: relative;
}

.selectBox__3tblH .expandIcon__yjBfN {
  align-items: center;
  display: flex;
  height: 28px;
  justify-content: center;
  width: 28px;
  z-index: 1;
}

.addMenu__3VGoW {
  height: 16px !important;
  width: 16px !important;
}

.selectBox__3tblH .expandIcon__yjBfN .selectIcon__34c_Q {
  opacity: .5;
}

.addMenu__3VGoW > div {
  left: 0;
  position: absolute;
  top: 0;
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

//向上收叠按钮
.addButton__1m8VX, .packButton__3Kxha {
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

//页面核心内容-头
.hCFKFZ {
  height: calc(100% - 32px);
  scrollbar-width: none;
  padding: 0px 6px;
}

.customScrollContainer__3XqlB, .customScrollPanel__2D7nr {
  height: 100%;
  position: relative;
  width: 100%;
}

.customScrollPanel__2D7nr {
  display: inline-block;
  overflow: auto;
  vertical-align: top;
}

.customScrollContainer__3XqlB, .customScrollPanel__2D7nr {
  height: 100%;
  position: relative;
  width: 100%;
}

.page-panel-tree {
  border: 1px solid transparent;
  margin: 0;
}

button, input, keygen, select, textarea {
  border: none;
  color: #702424;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Helvetica Neue, sans-serif;
  outline: none;
}

input {
  cursor: default;
}

.page-panel-tree .page-panel-tree-treenode {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 32px;
  list-style: none;
  margin: 0;
  outline: 0;
  padding: 0 4px;
  position: relative;
  white-space: nowrap;
  width: 100%;
}

.page-panel-tree-indent {
  display: inline-block;
  height: 0;
  vertical-align: bottom;
}

.page-panel-tree-indent-unit {
  display: inline-block;
  width: 24px;
}

.page-panel-tree .page-panel-tree-treenode {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 32px;
  list-style: none;
  margin: 0;
  outline: 0;
  padding: 0 4px;
  position: relative;
  white-space: nowrap;
  width: 100%;
}

.page-panel-tree-indent {
  display: inline-block;
  height: 0;
  vertical-align: bottom;
}

.page-panel-tree .page-panel-tree-treenode span.page-panel-tree-switcher.page-panel-tree-switcher-noop {
  display: none;
}

.page-panel-tree .page-panel-tree-treenode span.page-panel-tree-switcher {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDYgNi4zMzNINC41NGwzLjQ2IDQgMy40Ni00WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuNiIvPjwvc3ZnPg==);
  background-position: 50%;
  background-size: auto;
}

.page-panel-tree .page-panel-tree-treenode span.page-panel-tree-iconEle, .page-panel-tree .page-panel-tree-treenode span.page-panel-tree-switcher {
  background-attachment: scroll;
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  cursor: default;
  display: inline-block;
  height: 24px;
  margin-right: 4px;
  min-width: 24px;
  outline: none;
  width: 24px;
}

.lightTheme .page-panel-tree-switcher {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDYgNi4zMzNINC41NGwzLjQ2IDQgMy40Ni00WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuNiIvPjwvc3ZnPg==) !important;
}

.page-panel-tree .page-panel-tree-treenode .page-panel-tree-node-content-wrapper {
  align-items: center;
  cursor: default;
  display: flex;
  height: 100%;
  margin: 0;
  min-width: 0;
  padding: 0;
  position: relative;
  text-decoration: none;
  vertical-align: top;
  width: 100%;
}

.page-panel-tree .page-panel-tree-treenode span.page-panel-tree-iconEle.page-panel-tree-icon__customize, .page-panel-tree .page-panel-tree-treenode span.page-panel-tree-switcher.page-panel-tree-icon__customize {
  background-image: none;
}

.page-panel-tree .page-panel-tree-treenode span.page-panel-tree-iconEle, .page-panel-tree .page-panel-tree-treenode span.page-panel-tree-switcher {
  background-attachment: scroll;
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  cursor: default;
  display: inline-block;
  height: 24px;
  margin-right: 4px;
  min-width: 24px;
  outline: none;
  width: 24px;
}

.page-panel-tree-icon__customize {
  margin-right: 2px;
  vertical-align: top;
}

.page-panel-tree .page-panel-tree-treenode span.page-panel-tree-iconEle .page-panel-tree-type-icon-wrapper.page-panel-tree-is-select, .page-panel-tree .page-panel-tree-treenode span.page-panel-tree-switcher .page-panel-tree-type-icon-wrapper.page-panel-tree-is-select {
  opacity: 1;
}

.page-panel-tree .page-panel-tree-treenode span.page-panel-tree-iconEle .page-panel-tree-type-icon-wrapper, .page-panel-tree .page-panel-tree-treenode span.page-panel-tree-switcher .page-panel-tree-type-icon-wrapper {
  opacity: .5;
}

.baseIconBox__QdtZC {
  border-radius: 4px;
}

.cursor-pointer__34ZCy, div[data-type=button], span[data-type=button] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.baseIcon__3CiFl {
  fill: currentColor;
  align-items: center;
  color: #000;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.page-panel-tree .page-panel-tree-treenode span.page-panel-tree-iconEle + .page-panel-tree-title, .page-panel-tree .page-panel-tree-treenode span.page-panel-tree-switcher + .page-panel-tree-title {
  display: flex;
  flex: 1;
  min-width: 0;
}

.page-panel-tree-title {
  display: inline-block;
  height: 100%;
  width: 100%;
}

.jtRfni {
  height: 100%;
  width: 100%;
}

.lightTheme .C-name-input__2hfj-, .lightTheme .C-name-input__2hfj-.isFirstFrame__1GH8g {
  color: #202020;
}

.C-name-input__2hfj- {
  background: transparent;
  color: #fff;
  position: relative;
}

.list-change-name__1iUrS {
  height: 100%;
}

.list-change-name__1iUrS .readonly-input {
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}

.hCFKFZ .readonly-input {
  height: 100%;
  vertical-align: middle;
  line-height: 32px;
}

.C-name-input__2hfj- pre {
  display: none;
  float: left;
}

.C-name-input__2hfj- input, .C-name-input__2hfj- pre, .C-name-input__2hfj- textarea {
  background: transparent;
  color: inherit;
  font-size: inherit;
  line-height: 1.5;
  white-space: nowrap;
}

//页面-右侧滚动条
.lightTheme .customScrollbarWrapper__3XaFn {
  width: 13px;
}

.customScrollbarWrapper__3XaFn {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 9px;
}

.lightTheme .customScrollbar__2YlZl {
  background: rgba(32, 32, 32, .16);
  width: 5px;
}

.customScrollbar__2YlZl {
  background: hsla(0, 0%, 100%, .16);
  border-radius: 4px;
  opacity: 0;
  transform: translateX(3px);
  width: 4px;
}

//页面和树形菜单上下拖拽柄

.cursor-n-resize__3vUjB, .cursor-row-resize__3kQrz, .cursor-s-resize__1c8Cj {
  cursor: ns-resize;
}

.gqxRnQ {
  width: 100%;
  height: 10px;
  position: absolute;
  bottom: -10px;
  opacity: 0;
  z-index: 111;
  display: block;
}

//树形菜单页
.lightTheme .searchPanel__3WAhP {
  border-top: 1px solid hsla(240, 3%, 86%, .6);
}

.searchPanel__3WAhP {
  align-items: center;
  display: flex;
  height: 36px;
  justify-content: space-between;
  margin-top: 4px;
  position: relative;
  width: 100%;
}

.rowBox__20W7k.canFold__1Z0SO {
  width: calc(100% - 32px);
}

.rowBox__20W7k {
  align-items: center;
  display: flex;
  width: 100%;
}

.searchButton__2W9Lg {
  border-radius: 6px;
  height: 28px;
  margin-left: 8px;
  margin-right: 4px;
  position: relative;
  width: 32px;
}

.lightTheme .selectBox__3tblH.hasLightTheme__1o8Yp {
  color: #000;
}

.selectBox__3tblH.noBackground__3YTQz {
  background: transparent;
}

.selectBox__26CVl {
  height: 28px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 28px;
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

.baseIcon__35dUa, .dropIcon__3tSgC {
  opacity: .8;
  position: absolute;
  top: 6px;
}

.baseIcon__35dUa {
  align-items: center;
  border-radius: 6px;
  display: flex;
  height: 16px;
  justify-content: center;
  left: 0;
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

.dropIcon__3tSgC {
  left: 16px;
}

.baseIcon__35dUa, .dropIcon__3tSgC {
  opacity: .8;
  position: absolute;
  top: 6px;
}

.baseIconBox__QdtZC {
  border-radius: 4px;
}

.cursor-pointer__34ZCy, div[data-type=button], span[data-type=button] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.baseIcon__3CiFl {
  fill: currentColor;
  align-items: center;
  color: #000;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.lightTheme .searchInput__2WK-1 {
  color: #202020;
}

.searchInput__2WK-1 {
  background: transparent;
  color: hsla(0, 0%, 100%, .8);
  font-size: 12px;
  height: 16px;
  line-height: 16px;
}

input {
  cursor: default;
}

button, input, keygen, select, textarea {
  border: none;
  color: #702424;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Helvetica Neue, sans-serif;
  outline: none;
}

.foldIcon__hv-G9 {
  height: 20px;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 20px;
}

.defaultIcon__1dJFM:before {
  content: "";
  position: absolute;
  text-align: center;
}

.defaultIcon__1dJFM .iconPanel__11XjX.isBaseIcon__afPna {
  opacity: 1;
}

.defaultIcon__1dJFM .iconPanel__11XjX.isBaseIcon__afPna:before {
  background-size: cover;
}

.defaultIcon__1dJFM .iconPanel__11XjX:before {
  content: "";
  position: absolute;
  text-align: center;
}

.fileListPanel__BY544 {
  flex: 1;
  overflow-y: scroll;
  position: relative;
  scrollbar-width: none;
}

//树形内容
.framePanel__1IDIL {
  color: hsla(0, 0%, 100%, .8);
}

.layerPanel__1TQCJ {
  align-items: center;
  display: inline-flex;
  font-size: 12px;
  height: 32px;
  position: relative;
  width: 100%;
}

.blueBg02__2fGn0 {
  background: rgba(0, 142, 250, .2) !important;
}

.lightTheme .layerPanel__1TQCJ.select-panel__1j9Wh > .designIcon__1566t {
  background: transparent;
}

.layerPanel__1TQCJ.select-panel__1j9Wh .designIcon__1566t, .layerPanel__1TQCJ.select-panel__1j9Wh .frameName__2pv0V, .layerPanel__1TQCJ.select-panel__1j9Wh .shape__3k6A7 {
  opacity: 1;
}

.lightTheme .layerPanel__1TQCJ > .designIcon__1566t {
  background: transparent;
}

.layerPanel__1TQCJ > .designIcon__1566t {
  background: transparent;
  flex-shrink: 0;
  height: 16px;
  position: relative;
  width: 16px;
}

.noTriangleIcon__2KgJw {
  visibility: hidden;
}

.triangleIcon__1pPRl {
  margin-left: 0;
}

.layerPanel__1TQCJ > .designIcon__1566t:before {
  background-size: 16px 16px;
  content: "";
  height: 16px;
  opacity: .6;
  position: absolute;
  width: 16px;
}

.lightTheme .triangleIcon__1pPRl:before {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDYgNi4zMzNINC41NGwzLjQ2IDQgMy40Ni00WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuNiIvPjwvc3ZnPg==);
}

.triangleIcon__1pPRl:before {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDYgNi4zMzNINC41NGwzLjQ2IDQgMy40Ni00WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuNiIvPjwvc3ZnPg==);
  transform: rotate(-90deg);
}

.layerPanel__1TQCJ.select-panel__1j9Wh .designIcon__1566t, .layerPanel__1TQCJ.select-panel__1j9Wh .frameName__2pv0V, .layerPanel__1TQCJ.select-panel__1j9Wh .shape__3k6A7 {
  opacity: 1;
}

.shape__3k6A7 {
  position: relative;
  z-index: 11;
}

.layerPanel__1TQCJ.select-panel__1j9Wh .designIcon__1566t, .layerPanel__1TQCJ.select-panel__1j9Wh .frameName__2pv0V, .layerPanel__1TQCJ.select-panel__1j9Wh .shape__3k6A7 {
  opacity: 1;
}

.shape__3k6A7 .designIcon__1566t {
  background: transparent;
  height: 16px;
  opacity: .6;
  position: relative;
  width: 16px;
}

.shape__3k6A7 .designIcon__1566t:before {
  background-size: 16px 16px;
  content: "";
  height: 16px;
  position: absolute;
  width: 16px;
}

.layerPanel__1TQCJ.select-panel__1j9Wh .designIcon__1566t, .layerPanel__1TQCJ.select-panel__1j9Wh .frameName__2pv0V, .layerPanel__1TQCJ.select-panel__1j9Wh .shape__3k6A7 {
  opacity: 1;
}

.lightTheme .frameName__2pv0V {
  color: #202020;
  opacity: 1;
}

.frameName__2pv0V {
  align-items: center;
  color: #fff;
  display: flex;
  height: 100%;
  line-height: 32px;
  margin-left: 4px;
  opacity: .8;
}

.lightTheme .C-name-input__2hfj-, .lightTheme .C-name-input__2hfj-.isFirstFrame__1GH8g {
  color: #202020;
}

.C-name-input__2hfj-.isFirstFrame__1GH8g {
  color: hsla(0, 0%, 100%, .9);
  font-weight: 700;
}

.C-name-input__2hfj- {
  background: transparent;
  color: #fff;
  position: relative;
}

.list-change-name__1iUrS {
  height: 100%;
}

.list-change-name__1iUrS .readonly-input {
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}

.list-change-name__1iUrS .readonly-input {
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}

.C-name-input__2hfj- pre {
  display: none;
  float: left;
}

.C-name-input__2hfj- input, .C-name-input__2hfj- pre, .C-name-input__2hfj- textarea {
  background: transparent;
  color: inherit;
  font-size: inherit;
  line-height: 1.5;
  white-space: nowrap;
}

.lockInvisibleButton__qTnQ3 {
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
}

.designIcon__3iVfV, .emptyIcon__1gh8q {
  height: 24px;
  position: relative;
  width: 24px;
}


//右侧宽度拖拽柄
.dragListLine__1NQSJ {
  cursor: ew-resize;
  height: 100%;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 6px;
  z-index: 111;
}

.leftPanelCover__G9Cps {
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
}

//页面和组件切换tab标识
.lightTheme .bottomLine__rocs1 {
  background-color: #4d4d4d;
}

.bottomBlock__2PiON, .bottomLine__rocs1 {
  height: 2px;
  position: absolute;
  width: 40px;
}

.bottomLine__rocs1 {
  background-color: #d5d5d6;
  bottom: -1px;
}

.lightTheme .isActive__1D-bU, .lightTheme .menuItem__Wp88Y {
  color: #202020;
}

.isActive__1D-bU {
  color: #fff;
  opacity: 1;
}

//hover的鼠标样式
.lightTheme .page-panel-tree:not(.dragging) .page-panel-tree-treenode:not(.page-panel-tree-treenode-selected):not(.page-panel-tree-treenode-parent-selected):hover {
  background-color: rgba(32, 32, 32, .08);
  border-radius: 4px;
}

//展开全部按钮
.defaultIcon__1dJFM:hover .canHover__2iU7h.isBaseIcon__afPna {
  opacity: 1;
}

.lightTheme .defaultIcon__1dJFM:hover .isSvgIcon__eg-t6.hoverBg__1OUWP.canHover__2iU7h:before {
  background-color: rgba(0, 0, 0, .05);
  border-radius: 4px;
  height: 28px;
  width: 28px;
  z-index: 1;
}

.lightTheme .defaultIcon__1dJFM:hover .isSvgIcon__eg-t6.hoverBg__1OUWP.canHover__2iU7h svg {
  position: relative;
  z-index: 2;
}

//点击加号创建
.addButtonWrapper__2E-7M:hover {
  background-color: rgba(0, 0, 0, .05);
  border-radius: 4px;
}

.hCFKFZ .page-panel-tree-treenode-selected {
  background-color: rgba(0, 142, 250, 0.2) !important;
}
.page-panel-tree-treenode-bottom-selected {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.page-panel-tree-treenode-top-selected {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>