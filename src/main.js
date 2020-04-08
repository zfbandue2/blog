import Vue from 'vue'
import App from './pages/index/index'
import routers from '@components/common/router'
import VueRouter  from  'vue-router'
import rem from "@lib/rem"
import "@components/common/global.css"
rem();
Vue.use(VueRouter);
let router = new VueRouter({
    routes: routers
});
new Vue({
  el: '#app',
  router
})
