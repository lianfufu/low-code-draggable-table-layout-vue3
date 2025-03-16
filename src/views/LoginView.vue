<template>
  <div class="login-view jpRLZt">
    <div style="z-index: 999;position: absolute;color:black;cursor:pointer;font-size:18px;right: 10px;top: 10px;width: 20px;height: 20px;display: flex;justify-content: center;align-items: center;border-radius: 10px;font-weight: bold" @click="emits('close')">
      ×
    </div>
    <div class="logo">
      <img src="../assets/yunda.png">
      <h1>易搭创</h1>
    </div>
    <div class="main-wrap">
      <div class="login-left">
        <div class="login-left_center">
          <div class="login-left_center_top"><p>直接拖拽，所见即所得的<br>前端页面搭建平台</p></div>
          <div class="login-left_center_btm">
            <span class="feature-item">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16.00363858209039" height="16.00363858209039" viewBox="0 0 16.00363858209039 16.00363858209039" fill="none"><g opacity="1" transform="translate(0 0)  rotate(0 8.00181929104502 8.00181929104502)"><path id="排除重叠" fill-rule="evenodd" style="fill:#FFFFFF" transform="translate(0 0)  rotate(0 8.00181929104502 8.00181929104502)" opacity="1" d="M0 8C0 3.58 3.58 0 8 0C12.42 0 16 3.58 16 8C16 12.42 12.42 16 8 16C3.58 16 0 12.42 0 8Z M3.53724 7.50746L4.95724 6.43746L6.62724 8.65746L11.3372 4.79746L12.4672 6.17746L6.31724 11.2075L3.53724 7.50746Z "></path></g></svg>
              </i>
              <span>永久免费</span>
            </span>
            <span class="feature-item">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16.00363858209039" height="16.00363858209039" viewBox="0 0 16.00363858209039 16.00363858209039" fill="none"><g opacity="1" transform="translate(0 0)  rotate(0 8.00181929104502 8.00181929104502)"><path id="排除重叠" fill-rule="evenodd" style="fill:#FFFFFF" transform="translate(0 0)  rotate(0 8.00181929104502 8.00181929104502)" opacity="1" d="M0 8C0 3.58 3.58 0 8 0C12.42 0 16 3.58 16 8C16 12.42 12.42 16 8 16C3.58 16 0 12.42 0 8Z M3.53724 7.50746L4.95724 6.43746L6.62724 8.65746L11.3372 4.79746L12.4672 6.17746L6.31724 11.2075L3.53724 7.50746Z "></path></g></svg>
              </i>
              <span>多种素材</span>
            </span>
            <span class="feature-item">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16.00363858209039" height="16.00363858209039" viewBox="0 0 16.00363858209039 16.00363858209039" fill="none"><g opacity="1" transform="translate(0 0)  rotate(0 8.00181929104502 8.00181929104502)"><path id="排除重叠" fill-rule="evenodd" style="fill:#FFFFFF" transform="translate(0 0)  rotate(0 8.00181929104502 8.00181929104502)" opacity="1" d="M0 8C0 3.58 3.58 0 8 0C12.42 0 16 3.58 16 8C16 12.42 12.42 16 8 16C3.58 16 0 12.42 0 8Z M3.53724 7.50746L4.95724 6.43746L6.62724 8.65746L11.3372 4.79746L12.4672 6.17746L6.31724 11.2075L3.53724 7.50746Z "></path></g></svg>
              </i>
              <span>灵活交互</span>
            </span>
          </div>
        </div>
      </div>
      <div class="card-wrap" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
        <div class="cardWrap__11T-W cardShow__3tsNI">
          <main class="loginCard__ScNRM">
            <div class="loginCardHeader__Vo7k5" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
              <h1>登录易搭创账户</h1>
              <div class="switchAccount__2CSnM">
                <span>没有账户？</span>
                <div data-type="button" class="cursor-new-pointer__bO-95">
                  免费注册
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16" fill="none"><defs><rect id="path_0" x="0" y="0" width="16" height="16"></rect></defs><g opacity="1" transform="translate(0 0)  rotate(0 8 8)"><rect fill="currentColor" opacity="1" transform="translate(0 0)  rotate(0 8 8)" x="0" y="0" width="16" height="16"></rect><mask id="bg-mask" fill="white"><use xlink:href="#path_0"></use></mask><g mask="url(#bg-mask)"><path id="路径 23" style="stroke:#F3F7FB; stroke-width:1.4; stroke-opacity:1; stroke-dasharray:0 0" transform="translate(6.055555555555657 4.5)  rotate(0 1.9444444444444446 3.5)" d="M0,0L3.89,3.5L0,7 "></path></g></g></svg>
                  </i>
                </div>
              </div>
            </div>
            <div class="loginCardForm__3jjSi" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
              <div class="sc-gweoQa ilXARf">
                <div class="input-wrap">
                  <div class="input-area">
                    <div class="input-item">
                      <div class="sc-eDPEul hEdkFP">
                        <div class="error-card-input">
                          <div class="error-input input-all">
                            <div class="input-wrapper">
                              <img class="prefix-icon icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PGcgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSAgcm90YXRlKDAgMTIgMTIpIj48cGF0aCBpZD0i6Lev5b6EIDEgKOi9ruW7kykiIGZpbGxSdWxlPSJldmVub2RkIiBzdHlsZT0iZmlsbDojMjczMzQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjk2OTkyMDAwMDAwMDAwMiAwLjA3MTY3Nzk5OTk5OTc5MjUyKSAgcm90YXRlKDAgOC4wMjk5IDExLjkyODMpIiBvcGFjaXR5PSIxIiBkPSJNMTYuMDYgMjAuMDdDMTYuMDYgMjEuMTIgMTUuNjkgMjIuMDEgMTQuOTUgMjIuNzVRMTMuODQgMjMuODYgMTIuMjggMjMuODZMMy43OCAyMy44NkMxLjI2IDIzLjg2IDAgMjIuNTkgMCAyMC4wN0wwIDMuNzhRMCAyLjIyIDEuMTEgMS4xMVEyLjIyIDAgMy43OCAwTDEyLjI4IDBRMTMuODQgMCAxNC45NSAxLjExUTE2LjA2IDIuMjIgMTYuMDYgMy43OEwxNi4wNiAyMC4wN1pNMTMuNTQgMjEuMzNDMTMuODkgMjAuOTkgMTQuMDYgMjAuNTYgMTQuMDYgMjAuMDdMMTQuMDYgMy43OEMxNC4wNiAzLjI5IDEzLjg5IDIuODcgMTMuNTQgMi41MkMxMy4xOSAyLjE3IDEyLjc3IDIgMTIuMjggMkwzLjc4IDJDMy4yOSAyIDIuODcgMi4xNyAyLjUyIDIuNTJDMi4xNyAyLjg3IDIgMy4yOSAyIDMuNzhMMiAyMC4wN0MyIDIwLjU2IDIuMTcgMjAuOTkgMi41MiAyMS4zM0MyLjg3IDIxLjY4IDMuMjkgMjEuODYgMy43OCAyMS44NkwxMi4yOCAyMS44NkMxMi43NyAyMS44NiAxMy4xOSAyMS42OCAxMy41NCAyMS4zM1oiIC8+PHBhdGggaWQ9Iui3r+W+hCAyICjova7lu5MpIiBmaWxsUnVsZT0iZXZlbm9kZCIgc3R5bGU9ImZpbGw6IzI3MzM0NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS40ODAwODAwMDAwMDAwNDQgMTguMjExNjk5OTk5OTk5ODM3KSAgcm90YXRlKDAgMi41MiAxKSIgb3BhY2l0eT0iMSIgZD0iTTEsMEMwLjkzLDAgMC44NywwLjAxIDAuOCwwLjAyQzAuNzQsMC4wMyAwLjY4LDAuMDUgMC42MiwwLjA4QzAuNTYsMC4xIDAuNSwwLjEzIDAuNDQsMC4xN0MwLjM5LDAuMjEgMC4zNCwwLjI1IDAuMjksMC4yOUMwLjI1LDAuMzQgMC4yMSwwLjM5IDAuMTcsMC40NEMwLjEzLDAuNSAwLjEsMC41NiAwLjA4LDAuNjJDMC4wNSwwLjY4IDAuMDMsMC43NCAwLjAyLDAuOEMwLjAxLDAuODcgMCwwLjkzIDAsMUMwLDEuMDcgMC4wMSwxLjEzIDAuMDIsMS4yQzAuMDMsMS4yNiAwLjA1LDEuMzIgMC4wOCwxLjM4QzAuMSwxLjQ0IDAuMTMsMS41IDAuMTcsMS41NkMwLjIxLDEuNjEgMC4yNSwxLjY2IDAuMjksMS43MUMwLjM0LDEuNzUgMC4zOSwxLjc5IDAuNDQsMS44M0MwLjUsMS44NyAwLjU2LDEuOSAwLjYyLDEuOTJDMC42OCwxLjk1IDAuNzQsMS45NyAwLjgsMS45OEMwLjg3LDEuOTkgMC45MywyIDEsMkw0LjA0LDJDNC4xMSwyIDQuMTcsMS45OSA0LjI0LDEuOThDNC4zLDEuOTcgNC4zNiwxLjk1IDQuNDIsMS45MkM0LjQ4LDEuOSA0LjU0LDEuODcgNC42LDEuODNDNC42NSwxLjc5IDQuNywxLjc1IDQuNzUsMS43MUM0Ljc5LDEuNjYgNC44MywxLjYxIDQuODcsMS41NkM0LjkxLDEuNSA0Ljk0LDEuNDQgNC45NiwxLjM4QzQuOTksMS4zMiA1LjAxLDEuMjYgNS4wMiwxLjJDNS4wMywxLjEzIDUuMDQsMS4wNyA1LjA0LDFDNS4wNCwwLjkzIDUuMDMsMC44NyA1LjAyLDAuOEM1LjAxLDAuNzQgNC45OSwwLjY4IDQuOTYsMC42MkM0Ljk0LDAuNTYgNC45MSwwLjUgNC44NywwLjQ0QzQuODMsMC4zOSA0Ljc5LDAuMzQgNC43NSwwLjI5QzQuNywwLjI1IDQuNjUsMC4yMSA0LjYsMC4xN0M0LjU0LDAuMTMgNC40OCwwLjEgNC40MiwwLjA4QzQuMzYsMC4wNSA0LjMsMC4wMyA0LjI0LDAuMDJDNC4xNywwLjAxIDQuMTEsMCA0LjA0LDBMMSwwWiAiIC8+PC9nPjwvc3ZnPgo=" alt=""><input tabindex="0" spellcheck="false" type="text" autocomplete="new-password" maxlength="11" placeholder="输入手机号" class="" value=""></div></div>
                          <div class="error-msg">手机号不能为空</div>
                        </div>
                      </div>
                    </div>
                    <div class="input-item show-input-item">
                      <div class="sc-eDPEul hEdkFP">
                        <div class="error-card-input">
                          <div class="error-input input-all">
                            <div class="input-wrapper">
                              <img class="prefix-icon icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PGcgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSAgcm90YXRlKDAgMTIgMTIpIj48ZyBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzIDIpICByb3RhdGUoMCA5IDkuNSkiPjxwYXRoIGlkPSLnn6nlvaIgMSAo6L2u5buTKSIgZmlsbFJ1bGU9ImV2ZW5vZGQiIHN0eWxlPSJmaWxsOiMyNzMzNDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNykgIHJvdGF0ZSgwIDkgNikiIG9wYWNpdHk9IjEiIGQ9Ik0yIDBDMS40NSAwIDAuOTggMC4yIDAuNTkgMC41OUMwLjIgMC45OCAwIDEuNDUgMCAyTDAgMTBDMCAxMC41NSAwLjIgMTEuMDIgMC41OSAxMS40MUMwLjk4IDExLjggMS40NSAxMiAyIDEyTDE2IDEyQzE3LjMzIDEyIDE4IDExLjMzIDE4IDEwTDE4IDJDMTggMS40NSAxNy44IDAuOTggMTcuNDEgMC41OUMxNy4wMiAwLjIgMTYuNTUgMCAxNiAwTDIgMFpNMTYgMkwxNiAxMEwyIDEwTDIgMkwxNiAyWiIgLz48cGF0aCBpZD0i55+p5b2iIDIgKOi9ruW7kykiIGZpbGxSdWxlPSJldmVub2RkIiBzdHlsZT0iZmlsbDojMjczMzQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzIDApICByb3RhdGUoMCA2IDQpIiBvcGFjaXR5PSIxIiBkPSJNMTIsNkMxMiw0LjM0IDExLjQxLDIuOTMgMTAuMjQsMS43NkM5LjA3LDAuNTkgNy42NiwwIDYsMEM0LjM0LDAgMi45MywwLjU5IDEuNzYsMS43NkMwLjU5LDIuOTMgMCw0LjM0IDAsNkwwLDhMMiw4TDIsNkMyLDQuOSAyLjM5LDMuOTUgMy4xNywzLjE3QzMuOTUsMi4zOSA0LjksMiA2LDJDNy4xLDIgOC4wNSwyLjM5IDguODMsMy4xN0M5LjYxLDMuOTUgMTAsNC45IDEwLDZMMTAsOEwxMiw4TDEyLDZaICIgLz48L2c+PC9nPjwvc3ZnPgo=" alt="">
                              <input tabindex="0" spellcheck="false" type="password" autocomplete="new-password" maxlength="20" placeholder="输入密码（6-20个字符）" class="" aria-autocomplete="list">
                            </div>
                            <img class="suffix-icon icon cursor-new-pointer__bO-95" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PGRlZnM+PHJlY3QgaWQ9InBhdGhfMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiAvPjwvZGVmcz48ZyBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApICByb3RhdGUoMCAxMiAxMikiPjxtYXNrIGlkPSJiZy1tYXNrIiBmaWxsPSJ3aGl0ZSI+PHVzZSB4bGluazpocmVmPSIjcGF0aF8wIj48L3VzZT48L21hc2s+PGcgbWFzaz0idXJsKCNiZy1tYXNrKSIgPjxwYXRoICBpZD0i5bm26ZuGIiBzdHlsZT0ic3Ryb2tlOiMyNzMzNDc7IHN0cm9rZS13aWR0aDoyOyBzdHJva2Utb3BhY2l0eTowLjQ7IHN0cm9rZS1kYXNoYXJyYXk6MCAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjEzIDguOTMpICByb3RhdGUoMCA4Ljg2NzExODgzNTQ0OTIxOSAzLjU2NTAwMDA1NzIyMDQ1OSkiIGQ9Ik0xNy43MzQyIDBDMTcuNzM0MiAwIDE0Ljk2OTUgNC4yOTIxNCA5LjAwODU0IDQuNDU0NzdDMi45MjAzNSA0LjYxNzQxIDAgMCAwIDAgTTMuMzQ2MzUgMy42MzA1N0wyLjA5NjM1IDUuMTMwNTcgTTE0LjkyNDEgMy42Mjc2OUwxNi4xNzQxIDUuMTI3NjkgTTguOTkgNS4xM0w4Ljk5IDcuMTMgIiAvPjwvZz48L2c+PC9zdmc+" alt="隐藏密码">
                          </div>
                          <div class="error-msg">密码不能为空</div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"><div class="remenber-me-wrap">
                      <label for="remenber-me_checkbox">
                        <input type="checkbox" id="remenber-me_checkbox">
                        <span class="remenber-me_text">记住账号</span>
                      </label>
                    </div>
                    </div>
                    <div class="bottom-buttons">
                      <div data-type="button" class="sc-iGgWBj isXmoM action-btn" disabled="" width="100%">
                              <div class="primary-button button-disabled">登录</div>
                      </div>
                    </div>
                    <div class="protocol">点击「登录」表示已阅读并同意 <a class="cursor-new-pointer__bO-95">服务条款</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="loginCardOther__6A4kX" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
              <div class="divider__1tbNU">
                <span>其他方式</span>
                <i></i>
              </div>
              <div class="otherButtons__1kvrm">
<!--                <div data-type="button" class="sc-dcJsrY gjvkSe" width="100%" @click="handleLoginByVisitor">-->
<!--                  <i>-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20" fill="none"><g opacity="0.8" transform="translate(0 0)  rotate(0 10 10)"><g opacity="1" transform="translate(0.2578125000000379 2.0878906249999813)  rotate(0 9.74218750000001 7.93554687500001)"><path id="分组 1" fill-rule="evenodd" style="fill:#00C800" transform="translate(7.761718749999982 5.173828125000028)  rotate(0 5.861328125000003 5.348632812500002)" opacity="1" d="M5.87 0C2.58 0 0 2.25 0 5C0 7.77 2.58 10.01 5.87 10.01C6.55 10.01 7.25 9.83 7.94 9.66L9.83 10.7L9.31 8.97C10.69 7.94 11.72 6.56 11.72 5C11.72 2.25 8.96 0 5.87 0Z M7.84445 2.66992C8.27445 2.66992 8.62445 3.01992 8.62445 3.44992C8.62445 3.87992 8.27445 4.22992 7.84445 4.22992C7.41445 4.22992 7.06445 3.87992 7.06445 3.44992C7.06445 3.01992 7.41445 2.66992 7.84445 2.66992Z M4.82953 3.45578C4.82953 3.02578 4.47953 2.67578 4.04953 2.67578C3.61953 2.67578 3.26953 3.02578 3.26953 3.45578C3.26953 3.88578 3.61953 4.23578 4.04953 4.23578C4.47953 4.23578 4.82953 3.88578 4.82953 3.45578Z "></path><path id="分组 2" fill-rule="evenodd" style="fill:#00C800" transform="translate(0 0)  rotate(0 6.927734375000002 6.297851562500001)" opacity="1" d="M13.86 4.84C13.26 2.06 10.29 0 6.9 0C3.11 0 0 2.58 0 5.87C0 7.76 1.03 9.31 2.76 10.52L2.07 12.6L4.48 11.39C5.34 11.56 6.04 11.73 6.9 11.73C7.11 11.73 7.33 11.72 7.54 11.71C7.41 11.24 7.33 10.76 7.33 10.26C7.33 7.25 9.92 4.8 13.19 4.8C13.42 4.8 13.64 4.82 13.86 4.84Z M5.52258 3.79742C5.52258 3.27742 5.10258 2.85742 4.58258 2.85742C4.06258 2.85742 3.64258 3.27742 3.64258 3.79742C3.64258 4.31742 4.06258 4.73742 4.58258 4.73742C5.10258 4.73742 5.52258 4.31742 5.52258 3.79742Z M9.39898 2.85742C9.91898 2.85742 10.339 3.27742 10.339 3.79742C10.339 4.31742 9.91898 4.73742 9.39898 4.73742C8.87898 4.73742 8.45898 4.31742 8.45898 3.79742C8.45898 3.27742 8.87898 2.85742 9.39898 2.85742Z "></path></g></g></svg>-->
<!--                  </i>-->
<!--                  <p class="" style="margin-left: 4px;">游客方式登录</p>-->
<!--                </div>-->
                <button class="magic-btn" @click="handleLoginByVisitor">
                  <span class="btn-content">
                    <!-- 这里放按钮内容 -->
                    游客方式登录
                  </span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const emits=defineEmits(["close"]);
const router=useRouter();
function handleLoginByVisitor(){
  setTimeout(()=>{
    router.push("/workspace");
  },200);
}
</script>

<style scoped lang="scss">
.login-view{
  position: absolute;
  background: url("../assets/login-bg-5.jpg") no-repeat;
  background-size: 100% auto;
}
.jpRLZt {
  border-radius: 20px;
  width: 80vw;
  height: 87vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.main-wrap {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 85vw;
  max-width: 1180px;
  justify-content: space-around;
  z-index: 1;
}
.card-wrap{
  border: 0;
  font-size: 100%;
  font: inherit;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  .cardWrap__11T-W {
    background: #fff;
    border-radius: 24px;
    box-shadow: rgba(23, 25, 29, .2) 0px 16px 16px -16px, rgb(23 25 29 / 3%) 0px 14px 20px 0px, rgb(23 25 29 / 4%) 0px 0px 0px 1px;
    height: fit-content;
    opacity: 0;
    overflow: hidden;
    position: relative;
    transform: scale(.98) translateX(0);
    transition: all .35s ease-out;
    visibility: hidden;
    width: fit-content;
  }
  .cardShow__3tsNI {
    opacity: 1 !important;
    transform: scale(1) translateX(0) !important;
    transition: all .4s cubic-bezier(.83,0,.17,1) !important;
    visibility: visible !important;
  }
  main.loginCard__ScNRM{
    height: fit-content;
    margin: 50px;
    overflow: hidden;
    padding: 14px;
    position: relative;
    width: calc(360px + 14px);
    .loginCardHeader__Vo7k5{
      margin-bottom: 56px;
      h1 {
        font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Helvetica Neue, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Source Han Sans CN", sans-serif;
        font-size: 40px;
        font-weight: 700;
        line-height: 40px;
        margin: 0 0 24px 0;
      }
      .switchAccount__2CSnM{
        display: flex;
        font: 400 16px / 23px "PingFang SC", "Microsoft YaHei", "Microsoft JhengHei", "黑体", arial, "STHeiti", "\5b8b\4f53";
        span{
          opacity: .7;
        }
        .cursor-new-pointer__bO-95{
          align-items: center;
          color: #009dff;
          display: flex;
          font-weight: 500;
          user-select: none;
          cursor: pointer;
          i {
            align-items: center;
            border-radius: 1000px;
            display: flex;
            height: 16px;
            justify-content: center;
            margin-left: 2px;
            overflow: hidden;
            width: 16px;
          }
        }
      }
    }
    .loginCardForm__3jjSi{
      display: flex;
      flex-direction: column;
      .tabWrap__3yFv5{
        .formTab__-_X_K{
          align-items: center;
          background: #f3f7fb;
          border-radius: 10px;
          display: flex;
          margin-bottom: 12px;
          padding: 4px;
          position: relative;
          width: fit-content;
          .hideIndicator__2r8sb {
            opacity: 0 !important;
            width: 0 !important;
          }
          .indicator__1BIQG {
            background: #fff;
            border-radius: 8px;
            box-shadow: 0px 2px 4px rgba(23, 28, 39, .14);
            color: #009dff;
            font-weight: 500;
            height: 38px;
            opacity: 1;
            position: absolute;
          }
          .tabItem__iE_Y4 {
            border-radius: 8px;
            font: 400 16px / 23px "PingFang SC", "Microsoft YaHei", "Microsoft JhengHei", "黑体", arial, "STHeiti", "\5b8b\4f53";;
            font-weight: 400;
            margin-right: 4px;
            opacity: .7;
            padding: 8px 12px;
            z-index: 1;
          }
          .tabActiveIndicator__2g9Rf {
            background: #fff;
          }
          .tabItemActive__361x5 {
            color: #243042 !important;
            font-weight: 500 !important;
            opacity: 1 !important;
          }
        }
      }
      .ilXARf{
        .input-wrap{
          position: relative;
          width: 100%;
          .input-area {
            width: 100%;
            .input-item{
              .hEdkFP {
                cursor: text;
                .error-card-input {
                  height: 84px;
                  position: relative;
                }
                .input-all {
                  box-sizing: content-box;
                  position: relative;
                  width: 346px;
                  height: 32px;
                  padding: 6px;
                  border-radius: 12px;
                  background-color: white;
                  display: flex;
                  -webkit-box-align: center;
                  align-items: center;
                  -webkit-box-pack: justify;
                  justify-content: space-between;
                  .input-wrapper {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    width: 100%;
                  }
                  .icon {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                  }
                  .prefix-icon {
                    opacity: 0.4;
                    margin-left: 10px;
                    margin-right: 12px;
                    width: 25px;
                    height: 25px;
                    user-select: none;
                  }
                  input {
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    background-color: transparent !important;
                    font-size: 18px;
                    line-height: 18px;
                    color: #222;
                    vertical-align: baseline;
                    cursor: default;
                    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Helvetica Neue, sans-serif;
                  }
                }
                .error-input {
                  border: 2px solid red;
                }
                .error-msg {
                  font-size: 13px;
                  color: rgb(255, 87, 51);
                  text-align: end;
                  margin-top: 8px;
                }
              }
            }
            .show-input-item {
              opacity: 1;
              visibility: visible;
              margin-top: 0px;
              .hEdkFP {
                cursor: text;
                .error-card-input {
                  height: 84px;
                  position: relative;
                }
                .input-all {
                  box-sizing: content-box;
                  position: relative;
                  width: 346px;
                  height: 32px;
                  padding: 6px;
                  border-radius: 12px;
                  background-color: white;
                  display: flex;
                  -webkit-box-align: center;
                  align-items: center;
                  -webkit-box-pack: justify;
                  justify-content: space-between;
                  .input-wrapper {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    width: 100%;
                  }
                  .icon {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                  }
                  .prefix-icon {
                    opacity: 0.4;
                    margin-left: 10px;
                    margin-right: 12px;
                    width: 25px;
                    height: 25px;
                    user-select: none;
                    vertical-align: middle;
                  }
                  input {
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    background-color: transparent !important;
                    font-size: 18px;
                    line-height: 18px;
                    color: #222;
                    vertical-align: baseline;
                    margin: 0;
                    cursor: default;
                  }
                  .suffix-icon {
                    margin-right: 8px;
                    cursor: pointer;
                    vertical-align: middle;
                  }
                }
                .error-input {
                  border: 2px solid red;
                }
                .error-msg {
                  font-size: 13px;
                  color: rgb(255, 87, 51);
                  text-align: end;
                  margin-top: 8px;
                }
              }
            }
            .clearfix{
              margin-bottom: 24px;
              .remenber-me-wrap {
                float: left;
                margin-left: 3px;
                label {
                  cursor: pointer;
                }
                #remenber-me_checkbox {
                  vertical-align: middle;
                  cursor: pointer !important;
                  box-sizing: border-box;
                  padding: 0;
                  color: #222;
                  line-height: normal;
                  border: none;
                  outline: none;
                }
                .remenber-me_text {
                  font-size: 14px;
                  animation: 0.05s ease-in 0s 1 normal forwards running show-pwd;
                  vertical-align: middle;
                  margin-left: 9px;
                  user-select: none;
                }
              }
            }
            .bottom-buttons {
              display: flex;
              width: 100%;
              margin-top: 24px;
              .isXmoM {
                width: 100%;
                height: 45px;
                position: relative;
                left: auto;
                margin-top: 0px;
                z-index: auto;
                pointer-events: none;
                user-select: none;
                .button-disabled {
                  opacity: 0.5;
                }
                .primary-button {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  -webkit-box-pack: center;
                  justify-content: center;
                  -webkit-box-align: center;
                  align-items: center;
                  box-sizing: border-box;
                  color: white;
                  padding: 10px 20px;
                  background: #009dff;
                  border-radius: 8px;
                  box-shadow: rgba(0, 0, 0, .08) 0px 4px 6px 0px, rgba(0, 0, 0, .05) 0px 0px 0px 1px;
                  word-break: keep-all;
                  font: 500 18px / 26px Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Helvetica Neue, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Source Han Sans CN", sans-serif;
                }
              }
            }
            .protocol {
              text-align: center;
              margin-top: 20px;
              color: rgba(35, 48, 65, 0.7);
              font-size: 14px;
              user-select: none;
              a {
                color: rgb(0, 157, 255);
                cursor: pointer;
                text-decoration: none;
              }
            }
          }
        }

      }
    }
    .loginCardOther__6A4kX {
      display: flex;
      flex-direction: column;
      margin-top: 48px;
      width: 100%;
      .divider__1tbNU {
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        width: 100%;
        span {
          background: #fff;
          color: #b1b5bc;
          display: block;
          font-size: 13px;
          padding: 0 8px;
          position: absolute;
          z-index: 1;
        }
        i {
          background: #e6e6e6;
          height: 1px;
          position: absolute;
          width: 100%;
        }
      }
      .otherButtons__1kvrm {
        display: flex;
        margin-top: 24px;
        width: 100%;
        div[data-type=button] {
          align-items: center;
          display: flex;
          height: 48px;
          justify-content: center;
        }
        div[data-type=button]:first-child {
          margin-right: 8px;
          i {
            margin-right: 6px;
          }
        }
        .gjvkSe {
          cursor: pointer;
          box-sizing: border-box;
          text-align: center;
          display: inline-flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          position: relative;
          left: auto;
          margin-top: 0px;
          font: 500 16px / 24px Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Helvetica Neue, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Source Han Sans CN", sans-serif;
          color: #243042;
          padding: 10px 20px;
          background: white;
          border-radius: 8px;
          box-shadow: rgba(0, 0, 0, .08) 0px 4px 6px 0px, rgba(0, 0, 0, .05) 0px 0px 0px 1px;;
          width: 100%;
          user-select: none;
          white-space: nowrap;
          p {
            line-height: 1.5;
            font: 500 18px / 24px Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Helvetica Neue, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Source Han Sans CN", sans-serif;
          }
          i {
            align-items: center;
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
@keyframes show-pwd {
  0% {
    opacity: 0;
    height: 0px;
  }
  100% {
    opacity: 0.7;
    height: auto;
  }
}
.logo{
  position: absolute;
  left: 50px;
  top: 30px;
  img{
    width: 40px;
    vertical-align: middle;
  }
  h1{
    font-size: 22px;
    padding-left: 15px;
    display: inline-block;
    color: #FFFFFF;
  }
}
.login-left {
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: rgb(255, 255, 255);
  z-index: 1;
  .login-left_center{
    backface-visibility: hidden;
    border: 0;
    font-size: 100%;
    font: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    .login-left_center_top{
      p{
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 24px;
        line-height: 1.4;
      }
    }
    .login-left_center_btm{
      display: flex;
      .feature-item {
        font: 400 18px / 28px "PingFang SC", "Microsoft YaHei", "Microsoft JhengHei", "黑体", arial, "STHeiti", "\5b8b\4f53";
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        i {
          width: 18px;
          height: 18px;
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          margin-right: 4px;
          svg{
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            box-sizing: border-box;
          }
        }
      }
      .feature-item:not(:last-child) {
        margin-right: 18px;
      }
    }
  }
}

//炫酷边框效果
.magic-btn {
  width: 100%;
  position: relative;
  padding: 12px 24px;
  border: none;
  background: #fffdef;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s;
}

/* 流动边框 */
.magic-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
          from 0deg,
          #ff6b6b,    /* 橙色 */
          #845ec2,    /* 紫色 */
          #00c9a7,    /* 青色 */
          #ff6b6b
  );
  animation: rotate 3s linear infinite;
  z-index: 0;
}

/* 边框遮罩 */
.magic-btn::after {
  content: '';
  position: absolute;
  inset: 2px;  /* 控制边框粗细 */
  background: #1a1a1a;
  border-radius: 6px;
  z-index: 1;
}

.btn-content {
  position: relative;
  z-index: 2;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 悬停效果 */
.magic-btn:hover::before {
  animation-duration: 1.5s;
}
</style>