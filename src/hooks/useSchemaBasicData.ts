import { ref, computed, watch } from 'vue';

export default function useSchemaData(props:any, emits:any) {
    console.log(props,"传进来的props is null?");
    const myValue = ref(props.value);

    const myOptions = computed(() => {
        return { ...props.options };
    });

    watch(() => props.value, (newValue) => {
        myValue.value = newValue;
    }, { immediate: true, deep: true });

    watch(myValue, (newValue, oldValue) => {
        emits('input', newValue);
        emits('change', newValue);
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