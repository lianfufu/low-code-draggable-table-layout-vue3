import { ref, computed, watch } from 'vue';

export default function useSchemaData(props:any, emits:any) {
    console.log(props,"传进来的props is null?");
    const myValue = ref(props.modelValue);

    const myOptions = computed(() => {
        return { ...props.options };
    });

    watch(() => props.modelValue, (newValue) => {
        myValue.value = newValue;
    }, { immediate: true, deep: true });

    watch(myValue, (newValue, oldValue) => {
        emits('update:modelValue', newValue);
        console.log("更新了值，执行了input和change事件");
    }, { immediate: true, deep: true });

    return {
        myValue,
        myOptions,
    };
}

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