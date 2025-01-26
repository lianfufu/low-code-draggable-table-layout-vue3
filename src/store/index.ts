import { defineStore } from 'pinia'
import {computed, ref} from 'vue'

export const useStore = defineStore('main', () => {
    const fields=ref<any>(null);//所有的定义过的字段集合
    const curComponent=ref<any>(null);
    const curStateFields=ref<any>(null);//为实现curFields“可写入能力”，在curFields之上定义的state中的curFields
    const curFields=computed(()=>{
        if(curComponent.value?.component==="McImg"||
            curComponent.value?.component==="McTab"||
            curComponent.value?.component==="McTable"||
            curComponent.value?.component==="McTitle"){
            if(curComponent.value?.component&&fields.value[curComponent.value.component]){
                if(fields.value){
                    return fields.value[curComponent.value.component];
                }
            }
        }else{
            return curStateFields.value;
        }
    });
    // function setCurComponent(state:any, curComponent:any){
    //     curComponent. = curComponent;
    // }
    // function setFields(state:any, fields:any){
    //     state.fields = fields;
    // }
    // function setCurFields(state:any, curFields:any){
    //     state.curFields = curFields;
    // }
    return {
        fields,
        curComponent,
        curStateFields,
        curFields,
        // setFields,
        // setCurFields,
        // setCurComponent
    }
})