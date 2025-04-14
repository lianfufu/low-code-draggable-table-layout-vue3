import { createApp,defineComponent  } from 'vue'
import App from './App.vue'
import '@/utils/adapter.js'
import router from './router'
import 'element-plus/dist/index.css'
import "@/scss/main.css"
import { createPinia } from 'pinia'
import draggable from "vuedraggable";
import {registerCustomComponents} from "@/utils/globalRegister"

import  {initCustomComponentsConfig} from "@/utils/myGlobalSchemaRegister";
// 2. 引入组件样式
import 'vant/lib/index.css';
import {Search,Empty,
    Skeleton,
    SkeletonTitle,
    SkeletonImage,
    SkeletonAvatar,
    SkeletonParagraph,} from "vant";

const app = createApp(App).use(router).use(createPinia());
app.use(Search);
app.use(Empty);
app.use(Skeleton);
app.use(SkeletonTitle);
app.use(SkeletonImage);
app.use(SkeletonAvatar);
app.use(SkeletonParagraph);

app.config.globalProperties._VUE_DEVTOOLS_UPDATE_COUNT_ = 500 // 设置新的最大深度
registerCustomComponents(app,require.context('@/components', true, /.vue/));
initCustomComponentsConfig();
app.component("draggable",draggable);
app.mount('#app');
