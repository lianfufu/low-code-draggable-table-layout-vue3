import { defineStore } from 'pinia'
import {computed, ref, toRaw, watch} from 'vue'
import data from "@/configs/templateProducts.json";

// export type Product={
//     name:string,
//     id:string,
//     config:object,
//     pages:object[]
// }

export const useProductStore = defineStore('product', () => {
    const templateProducts=ref(data);

    return {
        templateProducts
    }
})