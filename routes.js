import Vue from 'vue';
import VueRouter from 'vue-router';
import index from './views/pages/index';
import test from './views/pages/test';
import chat from './views/pages/chat'
import headerComponent from './views/components/header/header';
import footerComponent from './views/components/footer/footer';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes : [
    {
      path: '/', components: {
        default: index,
        headerComponent: headerComponent,
        footerComponent: footerComponent
      }
    },
    {
      path: '/test', components: {
        default: test,
        headerComponent: headerComponent,
        footerComponent: footerComponent
      }
    },
    {
      path: '/chat', components: {
        default: chat,
        headerComponent: headerComponent,
        footerComponent: footerComponent
      }
    },
  ]
});