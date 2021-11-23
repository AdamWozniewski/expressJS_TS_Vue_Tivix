import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import store from '@/store/index';
import App from './App.vue';
import router from '@/router/router';
import 'element-plus/lib/theme-chalk/index.css';
import './styles/index.css';
import i18n from './i18n';

const app = createApp(App).use(i18n);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#hooks');
