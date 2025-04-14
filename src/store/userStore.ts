import { defineStore } from 'pinia'
import {computed, ref} from 'vue'
import data from "@/configs/templateProducts.json";
export type UserInfo={
    userId:string,
    userName:string,
}
import {formatDate} from "@/utils/timeUtils";
import {EnumTabType} from "@/components/workspace-components/EnumTabType";

export const useUserStore = defineStore('user', () => {
    const userInfo=ref<UserInfo>({} as UserInfo);
    const isLogin=computed(()=>{
        if(!userInfo.value||!userInfo.value.userName){
            return false;
        }
        return true;
    });
    const pickedTabType = ref<EnumTabType>(EnumTabType.My);
    // const templateProducts=
    const news001={
        "name": "新闻设计",
        "id": "news001",
        "createTime": "2025-03-28 14:12",
        "updateTime": "2025-03-28 14:12",
        "isCreatedByUserName": "官方",
        "isCreatedByUserId": "官方",
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
                "id": "news-page-001",
                "pageWidgets":[]
            }
        ]
    }
    const userCreatedProducts=ref<any[]>([...data,news001]);//todo 为了数据看起来更真实，这里的日期也要编造的好看一些，要小于
    function addProduct(product:any){
        const index=userCreatedProducts.value.findIndex(item=>item.id===product.id);
        if(index===-1){
            product.createTime=formatDate();
            product.updateTime=formatDate();
            userCreatedProducts.value.push(product);//todo proudct里面要有准确的创建日期和修改日期
        }else{
            product.updateTime=formatDate();
            userCreatedProducts.value[index]=product;//todo 这里更新：修改日期
        }
    }
    function removeProduct(product:any){
        const index=userCreatedProducts.value.findIndex(item=>item.id===product.id);
        index!==-1?userCreatedProducts.value.splice(index,1):'';
    }
    return {
        userInfo,
        isLogin,
        pickedTabType,
        userCreatedProducts,
        addProduct,
        removeProduct
    }
})