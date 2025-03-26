<template>
  <div class="workbenchHeaderPanel__1jXeQ">
    <div class="Dropdown__24b4J DropdownBg__3WVTE" @click="changeIsShowCreateDropDown">
      <div data-eventkey=""
           class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK addIcon__5S30F cursor-pointer__34ZCy"
           style="pointer-events: auto;">
        <div class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h hoverBg__1OUWP isDisable__3GDgO"
             style="pointer-events: none;"></div>
      </div>
      <div id="" class="selectBox__3tblH hasLightTheme__1o8Yp noBackground__3YTQz undefined" data-text="创建文件"
           data-value="project" style="height: 28px; width: 28px; line-height: 28px; font-size: 13px;"></div>
    </div>
    <div class="separatorLine__34OSg"></div>
    <div class="globalSearchPanel__36CuW" id="globalSearchInputBox">
      <div class="cursor-pointer__34ZCy">
        <div class="cursor-pointer__34ZCy baseIconBox__QdtZC canHover__26i2q searchIcon__3yIn6"
             style="width: 28px; height: 28px;">
          <div class="baseIcon__3CiFl undefined" data-theme="false" style="pointer-events: none;">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
                 height="20" viewBox="0 0 20 20" fill="none">
              <g opacity="1" transform="translate(0 3.552713678800501e-15)  rotate(0 10 10)">
                <path id="并集" fill-rule="evenodd" fill="currentColor"
                      transform="translate(2.5 2.5)  rotate(0 7.650000000000034 7.649999999999864)" opacity="1"
                      d="M6.25 0C2.8 0 0 2.8 0 6.25C0 9.7 2.8 12.5 6.25 12.5C7.68462 12.5 9.00685 12.0158 10.0621 11.2021L13.93 15.07C13.97 15.1 14.01 15.14 14.06 15.17C14.1 15.19 14.15 15.22 14.19 15.24C14.24 15.26 14.29 15.27 14.34 15.28C14.4 15.29 14.45 15.3 14.5 15.3C14.55 15.3 14.6 15.29 14.66 15.28C14.71 15.27 14.76 15.26 14.81 15.24C14.85 15.22 14.9 15.19 14.94 15.17C14.99 15.14 15.03 15.1 15.07 15.07C15.1 15.03 15.14 14.99 15.17 14.94C15.19 14.9 15.22 14.85 15.24 14.81C15.26 14.76 15.27 14.71 15.28 14.66C15.29 14.6 15.3 14.55 15.3 14.5C15.3 14.45 15.29 14.4 15.28 14.34C15.27 14.29 15.26 14.24 15.24 14.19C15.22 14.15 15.19 14.1 15.17 14.06C15.14 14.01 15.1 13.97 15.07 13.93L11.2021 10.0621C12.0158 9.00685 12.5 7.68462 12.5 6.25C12.5 2.8 9.7 0 6.25 0Z M6.25 1.25C3.49 1.25 1.25 3.49 1.25 6.25C1.25 9.01 3.49 11.25 6.25 11.25C9.01 11.25 11.25 9.01 11.25 6.25C11.25 3.49 9.01 1.25 6.25 1.25Z "></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <input ref="inputRef" class="searchInput__2SqRd hasContent__1Mi_S" tabindex="-1" id="globalSearchInput" autocomplete="off"
             placeholder="搜索文件、文件夹、协作者" data-type="renameInput" value="">
      <div class="cutKeyWrapper__3Kv2E">
        <div class="cutKeyBox__1FBPD isWin__1-wtN">ctrl</div>
        <div class="cutKeyBox__1FBPD isDot__2zjx7">.</div>
      </div>
      <div></div>
    </div>
    <div class="headerRightBox__2VlDz isInWorkspace__m9Wpa">
      <div class="featBox__3yq4O undefined">
        <div class="uploadPanel__3FgfI cursor-pointer__34ZCy">
          <div data-eventkey="" class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK importIcon__1DWe7 xd__1IW7H"
               style="pointer-events: auto;">
            <div class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h noOpacity__3_E0k"
                 style="pointer-events: none;"></div>
          </div>
          <div class="text__3bes2">导入文件</div>
          <input class="uploadBtn__32aiE" type="file" accept=".fig">
          <canvas id="paperCanvas" width="600" height="300"
                  style="pointer-events: none; display: none; -webkit-user-drag: none; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 300px; height: 150px;"></canvas>
        </div>
      </div>
      <header class="headerRightBox__tgn2J isInWorkspace__23vAp">
        <div class="separatorLine__21UxM"></div>
        <div class="a_c Dropdown__3LFCv" data-contr="hovertip" data-option="{&quot;text&quot;:&quot;下载&quot;}">
          <div id="" class="selectBox__3D4kF selectBox__3tblH hasLightTheme__1o8Yp noBackground__3YTQz undefined"
               data-text="downloadIcon" data-value="downloadIcon"
               style="height: 28px; width: 28px; max-width: 28px; line-height: 28px;">
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
          <div data-eventkey="" class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK baseIcon__lHBfc"
               style="pointer-events: auto;">
            <div class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h hoverBg__1OUWP isSvgIcon__eg-t6"
                 style="pointer-events: none;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
                   height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="1" transform="translate(0 0)  rotate(0 10 10)">
                  <path id="并集" fill-rule="evenodd" fill="rgba(32, 32, 32, 1)"
                        transform="translate(2 1.8999999999999773)  rotate(0 8 8.050000000000011)" opacity="1"
                        d="M8.55 0.38C8.54 0.34 8.52 0.31 8.5 0.27C8.48 0.24 8.45 0.21 8.42 0.18C8.4 0.15 8.37 0.13 8.33 0.1C8.3 0.08 8.27 0.06 8.23 0.05C8.19 0.03 8.16 0.02 8.12 0.01C8.08 0 8.04 0 8 0C7.96 0 7.92 0 7.88 0.01C7.84 0.02 7.81 0.03 7.77 0.05C7.73 0.06 7.7 0.08 7.67 0.1C7.63 0.13 7.6 0.15 7.58 0.18C7.55 0.21 7.52 0.24 7.5 0.27C7.48 0.31 7.46 0.34 7.45 0.38C7.43 0.42 7.42 0.46 7.41 0.5C7.4 0.54 7.4 0.58 7.4 0.62L7.4 9.76583L3.89999 6.64997C3.86999 6.62997 3.83999 6.59997 3.79999 6.57997C3.76999 6.55997 3.72999 6.54997 3.69999 6.52997C3.65999 6.51997 3.61999 6.50997 3.57999 6.50997C3.53999 6.49997 3.49999 6.49997 3.45999 6.49997C3.42999 6.49997 3.38999 6.50997 3.34999 6.51997C3.30999 6.52997 3.26999 6.53997 3.23999 6.55997C3.19999 6.57997 3.16999 6.59997 3.13999 6.61997C3.10999 6.64997 3.07999 6.66997 3.04999 6.69997C3.02999 6.72997 2.99999 6.75997 2.97999 6.79997C2.95999 6.82997 2.94999 6.86997 2.92999 6.89997C2.91999 6.93997 2.90999 6.97997 2.90999 7.01997C2.89999 7.05997 2.89999 7.09997 2.89999 7.13997C2.89999 7.16997 2.90999 7.20997 2.91999 7.24997C2.92999 7.28997 2.93999 7.32997 2.95999 7.35997C2.97999 7.39997 2.99999 7.42997 3.01999 7.45997C3.04999 7.48997 3.06999 7.51997 3.09999 7.54997L7.59999 11.55L7.68999 11.61C7.72 11.63 7.74999 11.65 7.78999 11.66C7.81999 11.67 7.85999 11.68 7.88999 11.69C7.93 11.7 7.95999 11.7 7.99999 11.7C8.04 11.7 8.06999 11.7 8.10999 11.69C8.13999 11.68 8.17999 11.67 8.21 11.66C8.24999 11.65 8.27999 11.63 8.30999 11.61L8.39999 11.55L12.9 7.54997C12.93 7.51997 12.95 7.48997 12.98 7.45997C13 7.42997 13.02 7.39997 13.04 7.35997C13.06 7.32997 13.07 7.28997 13.08 7.24997C13.09 7.20997 13.1 7.16997 13.1 7.13997C13.1 7.09997 13.1 7.05997 13.09 7.01997C13.09 6.97997 13.08 6.93997 13.07 6.89997C13.05 6.86997 13.04 6.82997 13.02 6.79997C13 6.75997 12.97 6.72997 12.95 6.69997C12.9 6.63997 12.83 6.58997 12.76 6.55997C12.69 6.52997 12.61 6.50997 12.54 6.49997C12.46 6.49997 12.38 6.50997 12.3 6.52997C12.23 6.55997 12.16 6.59997 12.1 6.64997L8.6 9.76582L8.6 0.62C8.6 0.58 8.6 0.54 8.59 0.5C8.58 0.46 8.57 0.42 8.55 0.38Z M14.9 9.67C14.88 9.7 14.86 9.73 14.85 9.77C14.83 9.81 14.82 9.84 14.81 9.88C14.8 9.92 14.8 9.96 14.8 10L14.8 13.5C14.8 13.88 14.66 14.21 14.39 14.49C14.11 14.76 13.78 14.9 13.4 14.9L2.6 14.9C2.22 14.9 1.89 14.76 1.61 14.49C1.34 14.21 1.2 13.88 1.2 13.5L1.2 10C1.2 9.96 1.2 9.92 1.19 9.88C1.18 9.84 1.17 9.81 1.15 9.77C1.14 9.73 1.12 9.7 1.1 9.67C1.08 9.63 1.05 9.6 1.02 9.58C1 9.55 0.97 9.52 0.93 9.5C0.9 9.48 0.87 9.46 0.83 9.45C0.79 9.43 0.76 9.42 0.72 9.41C0.68 9.4 0.64 9.4 0.6 9.4C0.56 9.4 0.52 9.4 0.48 9.41C0.44 9.42 0.41 9.43 0.37 9.45C0.33 9.46 0.3 9.48 0.27 9.5C0.23 9.52 0.2 9.55 0.18 9.58C0.15 9.6 0.12 9.63 0.1 9.67C0.08 9.7 0.06 9.73 0.05 9.77C0.03 9.81 0.02 9.84 0.01 9.88C0 9.92 0 9.96 0 10L0 13.5C0 13.85 0.07 14.19 0.21 14.51C0.34 14.82 0.52 15.1 0.76 15.34C1 15.58 1.28 15.76 1.59 15.89C1.91 16.03 2.25 16.1 2.6 16.1L13.4 16.1C13.75 16.1 14.09 16.03 14.41 15.89C14.72 15.76 15 15.58 15.24 15.34C15.48 15.1 15.66 14.82 15.79 14.51C15.93 14.19 16 13.85 16 13.5L16 10C16 9.96 16 9.92 15.99 9.88C15.98 9.84 15.97 9.81 15.95 9.77C15.94 9.73 15.92 9.7 15.9 9.67C15.88 9.63 15.85 9.6 15.82 9.58C15.8 9.55 15.77 9.52 15.73 9.5C15.7 9.48 15.67 9.46 15.63 9.45C15.59 9.43 15.56 9.42 15.52 9.41C15.48 9.4 15.44 9.4 15.4 9.4C15.36 9.4 15.32 9.4 15.28 9.41C15.24 9.42 15.21 9.43 15.17 9.45C15.13 9.46 15.1 9.48 15.07 9.5C15.03 9.52 15 9.55 14.98 9.58C14.95 9.6 14.92 9.63 14.9 9.67Z "></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="a_c cursor-pointer__34ZCy messageIcon__1UiSq" data-contr="hovertip"
             data-option="{&quot;text&quot;:&quot;消息&quot;,&quot;direction&quot;:&quot;top&quot;}">
          <div data-eventkey="" class="defaultIcon__1dJFM blueFocusVisibleLine__9r-RK baseIcon__lHBfc"
               style="pointer-events: auto;">
            <div class="iconPanel__11XjX isBaseIcon__afPna canHover__2iU7h isSvgIcon__eg-t6"
                 style="pointer-events: none;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
                   height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="1" transform="translate(0 0)  rotate(0 10 10)">
                  <path id="并集" fill-rule="evenodd" fill="rgba(32, 32, 32, 1)"
                        transform="translate(2.4742837166013487 1.2000000000000455)  rotate(0 7.489729404449463 8.699999809265137)"
                        opacity="1"
                        d="M0.93 7.4C0.93 4.08873 3.35788 1.35356 6.5337 0.87442C6.562 0.652952 6.66399 0.450159 6.81572 0.29C7.00572 0.11 7.25572 0 7.52572 0C7.79572 0 8.04572 0.11 8.23572 0.29C8.38715 0.449843 8.48904 0.652152 8.51756 0.873107C11.6977 1.34854 14.13 4.08569 14.13 7.4L14.13 11.3C14.13 11.95 14.46 12.71 14.84 13.35C15.01 13.64 15.03 14 14.87 14.29C14.72 14.59 14.42 14.78 14.08 14.8L10.1257 14.8C10.1257 15.15 10.0557 15.49 9.91572 15.81C9.78572 16.12 9.60572 16.4 9.36572 16.64C9.12572 16.88 8.84572 17.06 8.53572 17.19C8.21572 17.33 7.87572 17.4 7.52572 17.4C7.17572 17.4 6.83572 17.33 6.51572 17.19C6.20572 17.06 5.92572 16.88 5.68572 16.64C5.44572 16.4 5.26572 16.12 5.13572 15.81C4.99572 15.49 4.92572 15.15 4.92572 14.8L0.98 14.8C0.67 14.84 0.36 14.71 0.18 14.46C-0.01 14.21 -0.05 13.88 0.08 13.6C0.51 12.9 0.93 12.03 0.93 11.3L0.93 7.4Z M6.12572 14.8C6.12572 15.18 6.26572 15.51 6.53572 15.79C6.81572 16.06 7.14572 16.2 7.52572 16.2C7.90572 16.2 8.23572 16.06 8.51572 15.79C8.78572 15.51 8.92572 15.18 8.92572 14.8L6.12572 14.8Z M5.42 2.42C6.09 2.14 6.79 2 7.53 2Q8.625 2 9.63 2.42C10.28 2.7 10.85 3.08 11.35 3.58C11.84 4.08 12.23 4.65 12.5 5.3C12.78 5.96 12.93 6.67 12.93 7.4L12.93 11.3C12.93 11.99 13.15 12.76 13.6 13.6L1.46 13.6C1.9 12.74 2.13 11.98 2.13 11.3L2.13 7.4C2.13 6.67 2.27 5.96 2.55 5.3C2.82 4.65 3.21 4.08 3.71 3.58C4.2 3.08 4.78 2.7 5.42 2.42Z "></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="avatarBox__30aQZ">
          <div class="avatar__2DJCA cursor-pointer__34ZCy">
            <div class="defaultAvatarComp__ESnVt mediumSize__1p_xt" style="background: rgb(65, 124, 252);">
              <div class="avatarName__2ns9w">L</div>
            </div>
            <div id=""
                 class="selectBox__3D4kF selectBox__3tblH hasLightTheme__1o8Yp noBackground__3YTQz undefined"
                 data-text="avatar" data-value="avatar"
                 style="height: 28px; width: 28px; max-width: 42px; line-height: 28px;">
              <div class="expandIcon__yjBfN hasLightTheme__1o8Yp hasTransform__1wRTm">
                <div class="wrapperIcon__3sHfR blueFocusVisibleLine__9r-RK selectIcon__34c_Q expandIcon">
                  <div data-eventkey="" data-tab="true" @mouseenter="changeIsShowUserAvatarDropDown(true)"
                       @mouseleave="changeIsShowUserAvatarDropDown(false)"
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
        </div>
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  importJsonToCreateWidgetsProject,
  jumpToCreateSchemaProject, jumpToCreateWidgetsProject
} from "@/components/workspace-components/CreateAndImportProject";
import {inject, onBeforeUnmount, onMounted,ref} from "vue";

const changeIsShowCreateDropDown = inject("changeIsShowCreateDropDown");
const changeIsShowUserAvatarDropDown = inject("changeIsShowUserAvatarDropDown");

//控制点击ctrl+.
const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref<boolean>(false)

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.ctrlKey && (event.key === '.' || event.code === 'Period')) {
    event.preventDefault()
    if (inputRef.value) {
      inputRef.value.focus()
      isFocused.value = true
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown as EventListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown as EventListener)
})
</script>

<style scoped lang="scss">
.lightTheme .workbenchHeaderPanel__1jXeQ {
  background: #fff;
  border-bottom: 1px solid hsla(240, 3%, 86%, .6);
}

.workbenchHeaderPanel__1jXeQ {
  align-items: center;
  background: #1c1c1c;
  border-bottom: 1px solid hsla(0, 0%, 100%, .05);
  box-sizing: border-box;
  display: flex;
  height: 60px;
  min-width: 817px;
  position: relative;
  width: 100%;
  z-index: 11;
}

.Dropdown__24b4J {
  align-items: center;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  height: 28px;
  justify-content: center;
  margin-left: 16px;
  position: relative;
  width: 28px;
}

.Dropdown__24b4J:before {
  background-color: transparent;
  border-radius: 6px;
  content: "";
  height: 28px;
  position: absolute;
  width: 28px;
}

.addIcon__5S30F {
  border-radius: 4px;
  height: 20px;
  position: absolute;
  width: 20px;
}

.cursor-pointer__34ZCy, div[data-type=button], span[data-type=button] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.lightTheme .addIcon__5S30F:before {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAAAXNSR0IArs4c6QAAAOJJREFUWAntlmEOwyAIhbtdyfsfwTNtsQkLEp+BlGS0ef2jIiB8iOlxlPhaax8J5C0TPfqF2io+14GI9Usmq03Z673/9ER2jjujSfFPCxTfkvgqRrfiyQcdNzyHGbqPdiuuEiwkG/R2BHWo6TmnO5waxpuWTnHM4aWxirJ+FkPJiuPdCDzrHqY/DvUdpj9f6Sm7WoL3cIspvSjpDrfhc5MEbklgel2vZGB/LMM/jODw8n3MAEHl3GISdKMCirCLbVcC+zQx6vryJYYEo2gscUQk6rc8QQYYLanVJ0FLhGsSMAS+GQAxAlZtN4YAAAAASUVORK5CYII=);
}

.addIcon__5S30F:before {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAA30lEQVRYCe2WUQ7EIAhE273/nbvVhGQkYqBls7QZf8QKCE8h3bYS4ziHBPIRAWf/R7SKyxiIWO8izDZlbz+HyMO8MhoU/7Sw4psSn8XoVux8rOOa5zBD99FuxVmChb41em14QkrPOd3hUDDetHTq5qPRirLuAF/DULLi/DQC73qH6c2hvsP09pWesqsk+A6XmNIvJd3hMnxuksAjCQzd9U4Grb+hffiHEY1BLl/HDBBu65JIgpewgZFZxboqweYnolX15a/YJBjFpIlbRKJ+yxNkgNEr1fokqIlwTQKKwBfMT1AW/wN5zwAAAABJRU5ErkJggg==);
  background-size: 20px 20px;
  content: "";
  height: 20px;
  opacity: 1;
  width: 20px;
}

.defaultIcon__1dJFM:before {
  content: "";
  position: absolute;
  text-align: center;
}

.defaultIcon__1dJFM .iconPanel__11XjX.isDisable__3GDgO {
  opacity: .3 !important;
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

.defaultIcon__1dJFM .iconPanel__11XjX.isDisable__3GDgO.canHover__2iU7h:before {
  opacity: .3 !important;
}

.defaultIcon__1dJFM .iconPanel__11XjX.isBaseIcon__afPna:before {
  background-size: cover;
}

.defaultIcon__1dJFM .iconPanel__11XjX:before {
  content: "";
  position: absolute;
  text-align: center;
}

.lightTheme .selectBox__3tblH.hasLightTheme__1o8Yp {
  color: #000;
}

.selectBox__3tblH.noBackground__3YTQz {
  background: transparent;
}

.selectBox__3tblH {
  align-items: center;
  background-color: rgba(0, 0, 0, .03);
  border-radius: 4px;
  color: #000;
  display: flex;
  float: left;
  font-size: 12px;
  height: 26px;
  line-height: 26px;
  position: relative;
  width: 130px;
  z-index: 1;
}

.lightTheme .separatorLine__34OSg {
  background: hsla(240, 3%, 86%, .6);
}

.separatorLine__34OSg {
  background: hsla(0, 0%, 100%, .1);
  height: 16px;
  margin: 0 16px;
  width: 1px;
}

.globalSearchPanel__36CuW {
  align-items: center;
  display: flex;
  height: 60px;
  position: relative;
  transition: width .3s;
  -webkit-transition: width .3s;
  width: 365px;
}

.cursor-pointer__34ZCy, div[data-type=button], span[data-type=button] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.searchIcon__3yIn6 {
  height: 20px;
  left: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
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
  color: var(--color-icon);
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.lightTheme .searchInput__2SqRd.hasContent__1Mi_S {
  border: 1px solid rgba(0, 0, 0, .06);
}

.searchInput__2SqRd.hasContent__1Mi_S {
  border: 1px solid hsla(0, 0%, 100%, .12);
}

.lightTheme .searchInput__2SqRd {
  color: #202020;
}

.searchInput__2SqRd {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  box-sizing: border-box;
  color: hsla(0, 0%, 100%, .8);
  font-size: 13px;
  height: 100%;
  height: 40px;
  outline: none;
  padding-left: 38px;
  padding-right: 36px;
  width: 100%;
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

.cutKeyWrapper__3Kv2E {
  grid-gap: 4px;
  display: flex;
  gap: 4px;
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
}

.cutKeyWrapper__3Kv2E .cutKeyBox__1FBPD.isWin__1-wtN {
  width: -moz-fit-content;
  width: fit-content;
}

.cutKeyWrapper__3Kv2E .cutKeyBox__1FBPD {
  align-items: center;
  background: #fafafa;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-sizing: border-box;
  color: #333;
  display: flex;
  font-size: 12px;
  height: 24px;
  justify-content: center;
  line-height: 10px;
  min-width: 24px;
  opacity: 1;
  padding: 0 6px;
  width: 24px;
}

.lightTheme .cutKeyBox__1FBPD {
  background: transparent;
  border: 1px solid #202020;
  color: #fff;
}

.cutKeyWrapper__3Kv2E .cutKeyBox__1FBPD.isDot__2zjx7 {
  font-size: 20px;
}

.cutKeyWrapper__3Kv2E .cutKeyBox__1FBPD {
  align-items: center;
  background: #fafafa;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-sizing: border-box;
  color: #333;
  display: flex;
  font-size: 12px;
  height: 24px;
  justify-content: center;
  line-height: 10px;
  min-width: 24px;
  opacity: 1;
  padding: 0 6px;
  width: 24px;
}

//右半侧
.headerRightBox__2VlDz.isInWorkspace__m9Wpa {
  height: 100%;
  z-index: 100;
}

.headerRightBox__2VlDz {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
}

.featBox__3yq4O {
  align-items: center;
  display: flex;
  justify-content: flex-end;
}

.lightTheme .uploadPanel__3FgfI {
  outline: 1px solid rgba(0, 0, 0, .1);
}

.uploadPanel__3FgfI {
  align-items: center;
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  outline: 1px solid hsla(0, 0%, 100%, .15);
  padding: 6px 12px 6px 10px;
}

.cursor-pointer__34ZCy, div[data-type=button], span[data-type=button] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.lightTheme .uploadPanel__3FgfI .text__3bes2 {
  color: #202020;
}

.text__3bes2 {
  font-size: 13px;
  line-height: 20px;
}

.uploadBtn__32aiE {
  height: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  width: 0;
}

button, input, keygen, select, textarea {
  border: none;
  color: #702424;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Helvetica Neue, sans-serif;
  outline: none;
}

.headerRightBox__tgn2J.isInWorkspace__23vAp {
  z-index: 100;
}

.headerRightBox__tgn2J {
  align-items: center;
  display: flex;
}

.lightTheme .separatorLine__21UxM {
  background-color: rgba(0, 0, 0, .1);
}

//下载和通知按钮
.separatorLine__21UxM {
  background-color: hsla(0, 0%, 100%, .1);
  height: 16px;
  margin: 0 12px;
  width: 1px;
}

.Dropdown__3LFCv, .baseIcon__lHBfc {
  margin-right: 8px;
}

.Dropdown__3LFCv {
  border-radius: 6px;
  height: 28px;
  position: relative;
  width: 28px;
}

.lightTheme .selectBox__3tblH.hasLightTheme__1o8Yp {
  color: var(--color-black);
}

.selectBox__3tblH.noBackground__3YTQz {
  background: transparent;
}

//.selectBox__3tblH {
//  align-items: center;
//  border-radius: 4px;
//  display: flex;
//  float: left;
//  font-size: 12px;
//  height: 26px;
//  line-height: 26px;
//  position: relative;
//  width: 130px;
//  z-index: 1;
//}
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

.selectBox__3D4kF {
  height: 28px;
  left: 0;
  opacity: 0;
  position: absolute !important;
  top: 0;
  width: 28px;
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

.lightTheme .baseIcon__lHBfc {
  opacity: 1;
}

.baseIcon__lHBfc {
  align-items: center;
  border-radius: 6px;
  display: flex;
  height: 28px;
  justify-content: center;
  opacity: .8;
  width: 28px;
}

.Dropdown__3LFCv, .baseIcon__lHBfc {
  margin-right: 8px;
}

.baseIcon__lHBfc:before {
  background-size: 20px 20px;
  height: 20px;
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

.messageIcon__1UiSq {
  align-items: center;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  border-radius: 6px;
  display: flex;
  height: 28px;
  justify-content: center;
  margin-right: 12px;
  opacity: .8;
  position: relative;
  width: 28px;
}

.cursor-pointer__34ZCy, div[data-type=button], span[data-type=button] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.messageIcon__1UiSq .baseIcon__lHBfc {
  margin-right: 0;
}

.lightTheme .baseIcon__lHBfc {
  opacity: 1;
}

.baseIcon__lHBfc {
  align-items: center;
  border-radius: 6px;
  display: flex;
  height: 28px;
  justify-content: center;
  opacity: .8;
  width: 28px;
}

.baseIcon__lHBfc:before {
  background-size: 20px 20px;
  height: 20px;
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

//头像
.avatarBox__30aQZ {
  margin-top: 14px;
  padding-bottom: 14px;
  position: relative;
}

.avatar__2DJCA {
  border-radius: 50%;
  height: 28px;
  margin-right: 20px;
  position: relative;
  width: 28px;
}

.cursor-pointer__34ZCy, div[data-type=button], span[data-type=button] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.defaultAvatarComp__ESnVt.mediumSize__1p_xt {
  height: 32px;
  width: 32px;
}

.defaultAvatarComp__ESnVt {
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.defaultAvatarComp__ESnVt.mediumSize__1p_xt .avatarName__2ns9w {
  font-size: 12px;
  line-height: 12px;
}

.avatarName__2ns9w {
  color: #fff;
  font-weight: 700;
}

.lightTheme .selectBox__3tblH.hasLightTheme__1o8Yp {
  color: #000;
}

.selectBox__3tblH.noBackground__3YTQz {
  background: transparent;
}

.selectBox__3D4kF {
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


//输入框 获取焦点
.lightTheme .searchInput__2SqRd:focus {
  border-color: transparent;
  box-shadow: 0 0 0 2px #0091ff;
}
.lightTheme .searchInput__2SqRd.hasContent__1Mi_S {
  border: 1px solid rgba(0,0,0,.06);
}
.searchInput__2SqRd.hasContent__1Mi_S {
  border: 1px solid hsla(0,0%,100%,.12);
}
.defaultIcon__1dJFM:hover .canHover__2iU7h.isBaseIcon__afPna {
  opacity: 1;
}
.defaultIcon__1dJFM:hover .isDisable__3GDgO {
  opacity: .3;
}
.defaultIcon__1dJFM:hover .canHover__2iU7h:before {
  z-index: 1;
}
.defaultIcon__1dJFM:hover .isDisable__3GDgO.canHover__2iU7h:before {
  opacity: .3;
}
.defaultIcon__1dJFM .iconPanel__11XjX.isDisable__3GDgO.canHover__2iU7h:before {
  opacity: .3 !important;
}
.lightTheme .Dropdown__24b4J.DropdownBg__3WVTE:hover:before {
  background-color: rgba(0, 0, 0, .05);
}

</style>