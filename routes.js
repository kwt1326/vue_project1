import Vue from 'vue';
import VueRouter from 'vue-router';
import index from './views/pages/index';

Vue.use(VueRouter);

export default new VueRouter({
  routes : [
    { path: '/', component: index }
  ]
});