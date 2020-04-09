import Vue from 'vue'
import App from './pages/index/index'
import routers from '@components/common/router'
import VueRouter  from  'vue-router'
import rem from "@lib/rem"
import "@components/common/global.css"
import "@components/common/reset.css"
import autoLoad from "@components/common/autoload";
rem();
autoLoad.startLoad();
Vue.use(VueRouter);
let router = new VueRouter({
    routes: routers
});
new Vue({
  el: '#app',
  router
})
