import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import store from '@/store/index';
import App from './App.vue';
import router from '@/router/router';
import i18n from './i18n';
import './styles/index.css';

const app = createApp(App).use(i18n);
app.use(store);
app.use(router);
app.use(i18n);
app.use(ElementPlus);
app.mount('#app');
