import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import App from './App'
import router from './router'
import authentication from './services/authentication.service'

Vue.use(VueRouter)


authentication.initialize().then(_ => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  });
});