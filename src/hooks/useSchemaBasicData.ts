import { ref, computed, watch } from 'vue';
import _ from "lodash";

export default function useSchemaData(props:any, emits:any) {
    console.log(props,"传进来的props is null?");
    const myValue = ref(props.modelValue);

    const myOptions = computed(() => {
        return { ...props.options };
    });

    watch(() => props.modelValue, (newValue) => {
        myValue.value = newValue;
    }, { immediate: true, deep: true });

    watch(myValue, _.debounce((newValue, oldValue) => {
        emits('update:modelValue', newValue);
        console.log("更新了值，执行了input和change事件");
    },100), { immediate: true, deep: true });

    return {
        myValue,
        myOptions,
    };
}

// _.debounce(()=>{
//     emits('update:modelValue', newValue);
//     console.log("更新了值，执行了input和change事件");
// },500);
// export default {
//     data(){
//         return{
//             myValue:undefined
//         }
//     },
//     props:{
//         id:{},
//         value:{},
//         label:{
//             type:String,
//             default:"无标签"
//         },
//         options:{
//             type: Object,
//             default: () => {}
//         }
//     },
//     computed:{
//         myOptions(){
//             return {...this.options};
//         }
//     },
//     watch:{
//         value:{
//             handler(newValue){
//                 this.myValue = newValue;
//             },
//             immediate:true,
//             deep:true
//         },
//         myValue:{
//             handler(newValue, oldValue){
//                 this.$emit("input", newValue);
//                 this.$emit("change", newValue);
//             },
//             immediate: true,
//             deep:true
//         }
//     }
// }