import Vue from 'vue';
import VueRouter from 'vue-router';
import index from './views/pages/index';
import headerComponent from './views/components/header/header';
import footerComponent from './views/components/footer/footer';

Vue.use(VueRouter);

export default new VueRouter({
  routes : [
    { path: '/', components: {
        default: index,
        headerComponent: headerComponent,
        footerComponent: footerComponent
      }
    }
  ]
});