import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';

Vue.use(Router);

Router.prototype.go = function () {
  this.isBack = true;
  window.history.go(-1);
}

// 路由懒加载
const index = () =>
  import ('@/page/index/index'); //首页

const home = () =>
  import ('@/page/index/home'); //首页

const cart = () =>
  import ('@/page/cart/index') // 购物车

const user = () =>
  import ('@/page/me/index') // 我的

const notFound = () =>
  import ('@/components/notFound'); //404

const selfProduct = () =>
  import ('@/page/index/selfProduct'); //自营产品

const ticketEvent = () =>
  import ('@/page/index/ticketEvent'); //票务活动  

/* eslint-disable */
// eslint-disable-next-line 
export default new Router({
  mode: 'history', //去掉锚点
  saveScrollPosition: true, //记住页面的滚动位置 html5模式适用
  routes: [{
    path: '',
    redirect: '/index/home/selfProduct',
    component: App,
    children: [{
      // index页面
      path: '/index',
      redirect: '/index/home/selfProduct',
      component: index,
      children: [{
        // home页面
        path: 'home',
        name: 'home',
        redirect: '/index/home/selfProduct',
        component: home,
        children: [{
          path: 'selfProduct',
          name: 'selfProduct',
          component: selfProduct
        }, {
          path: 'ticketEvent',
          name: 'ticketEvent',
          component: ticketEvent
        }]
      }, {
        // cart页面
        path: 'cart',
        name: 'cart',
        component: cart
      }, {
        // me页面
        path: 'user',
        name: 'user',
        component: user
      }]
    }]
  }, {
    path: '*',
    component: notFound
  }]
})
