import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import AppContainer from '@/common/components/AppContainer.vue';

const app = createApp(App);

// Функция динамического подключения компонентов
app.component('AppContainer', AppContainer);

app.use(createPinia());
app.use(router);

app.mount('#app');
