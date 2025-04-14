
import {useRouter} from "vue-router";
import router from "@/router";
import {formatDate} from "@/utils/timeUtils";
import { v4 as uuidv4 } from 'uuid';

//handle批定义
export function jumpToCreateWidgetsProject(){
    // const router=useRouter();
    console.log(router,"router");
    router.push("/designbuild");
}
export function jumpToCreateSchemaProject(){
    // const router=useRouter();
    router.push("/designbuild");
}
export function importJsonToCreateWidgetsProject(){

}

export function doLogout(userStore:any){
    console.log("执行了退出登录");
    userStore.userInfo=null;
    router.replace("/");
}

export function addNewProject(userStore:any,userId:string="官方",userName:string="官方"){
    const newsProductTemplate={
        "name": "无标题",
        "id": uuidv4(),
        "createTime": formatDate(),
        "updateTime": formatDate(),
        "isCreatedByUserName": userName,
        "isCreatedByUserId": userId,
        "recordCover": "https://img.js.design/assets/coverImg/YU0T6_845b61a0e0bf22383dd7754df70998c0.png",
        "configs": {
            "pageGlobalStyles": {
                "padding": 0,
                "backgroundColor": "#f1f1f1"
            },
            "navigations": {
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
            }
        },
        "pages":[
            {
                "name": "页面1",
                "id": uuidv4(),
                "pageWidgets":[]
            }
        ]
    }
    userStore.addProduct({...newsProductTemplate});
    router.push("/designbuild?productId="+newsProductTemplate.id);
}