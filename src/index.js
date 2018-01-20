import Vue from 'vue';
import Index from './index.vue';
import Toast from './components/Toast';

Vue.use(Toast);

const app = new Vue({ render: h => h(Index) });

app.$mount('#app');
