import { createApp } from 'vue'
import App from './App.vue'

import { vMaska } from "maska/vue"

import moment from 'moment';
import 'moment/dist/locale/pt-br'

const app = createApp(App);

app.directive("maska", vMaska);
app.config.globalProperties.$moment = moment;

app.mount('#app');
