import App from '@/App.vue';
import router from '@/router/router.js';
// import '@/style.css';
import { createApp } from 'vue';
import Vue3Lottie from 'vue3-lottie';

// Vuetify
import { createVuetify } from 'vuetify';
import { md3 } from 'vuetify/blueprints';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
})

createApp(App).use(Vue3Lottie).use(vuetify).use(router).mount('#app');
