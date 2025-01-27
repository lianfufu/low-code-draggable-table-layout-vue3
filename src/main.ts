import { createApp } from 'vue'
import App from './App.vue'
import '@/utils/adapter.js'
import router from './router'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import draggable from "vuedraggable";
import _ from "lodash";
import globalMethods from "@/utils/globalMethods";

import  {initCustomComponentsConfig} from "@/utils/myGlobalSchemaRegister";


const app = createApp(App).use(globalMethods).use(router).use(createPinia());
initCustomComponentsConfig();
app.component("draggable",draggable);
app.mount('#app');
