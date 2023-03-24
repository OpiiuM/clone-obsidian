import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { plugin, defaultConfig } from '@formkit/vue';
import '@formkit/themes/genesis';

import AppModal from '@/common/components/AppModal.vue';
import AppInput from '@/common/components/AppInput.vue';
import AppButton from '@/common/components/AppButton.vue';

const app = createApp(App);

app.component('AppModal', AppModal);
app.component('AppInput', AppInput);
app.component('AppButton', AppButton);

app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig);

app.mount('#app');
