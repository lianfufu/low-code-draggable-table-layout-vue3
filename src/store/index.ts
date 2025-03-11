import { defineStore } from 'pinia'
import {computed, ref} from 'vue'

export const useStore = defineStore('main', () => {
    const initializing=ref<any>(null);
    const fields=ref<any>(null);//所有的定义过的字段集合
    const curComponent=ref<any>(null);
    const curStateFields=ref<any>(null);//为实现curFields“可写入能力”，在curFields之上定义的state中的curFields
    const curFields=computed(()=>{
        if(curComponent.value?.component==="McImg"||
            curComponent.value?.component==="McTab"||
            curComponent.value?.component==="McTable"||
            curComponent.value?.component==="McTitle"||
            curComponent.value?.component==="McContainer"){
            if(curComponent.value?.component&&fields.value[curComponent.value.component]){
                if(fields.value){
                    return fields.value[curComponent.value.component];
                }
            }
        }else{
            console.log("curStateFields.value",curStateFields.value);
            return curStateFields.value;
        }
    });
    return {
        initializing,
        fields,
        curComponent,
        curStateFields,
        curFields,
    }
})