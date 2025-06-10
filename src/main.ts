import 'babel-polyfill';
import 'reflect-metadata';
import Vue       from 'vue';
import Vuex      from 'vuex';
import VueRouter from 'vue-router';

import App       from '@/app.vue';
import router    from '@/router';
import {Enum}    from '@/app/shared/enum/enum';
import {checkSw} from '@/register-service-worker';

import '@/app/shared/filter/shared.filter';
import '@/app/shared/directive/shared.directive';

import '@/assets/css/styles.css';
import '@/assets/css/sample/styles.scss';

Vue.config.devtools = process.env.NODE_ENV === Enum.CORE.ENV.LOCAL;
Vue.config.performance = process.env.NODE_ENV === Enum.CORE.ENV.LOCAL;
Vue.config.silent = process.env.NODE_ENV === Enum.CORE.ENV.PROD;
Vue.config.productionTip = false;

Vue.prototype.$enum = Enum;

checkSw();

Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
