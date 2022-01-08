import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = vue.createApp(App);
app.use(router);
app.mount('#app');
// createApp(App).use(router).mount('#app');