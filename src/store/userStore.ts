import { defineStore } from 'pinia'
import {computed, ref} from 'vue'
export type UserInfo={
    userId:string,
    userName:string,
}
export const useUserStore = defineStore('user', () => {
    const userInfo=ref<UserInfo>({} as UserInfo);
    const isLogin=computed(()=>{
        if(!userInfo.value||!userInfo.value.userName){
            return false;
        }
        return true;
    })
    return {
        userInfo,
        isLogin,
    }
})