import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

Router.prototype.go = function() {
    this.isBack = true
    window.history.go(-1)
}

// 路由懒加载


/* eslint-disable */
// eslint-disable-next-line 
export default new Router({
    mode:'history',//去掉锚点
    saveScrollPosition: true, //记住页面的滚动位置 html5模式适用
    routes: [
        {
            path:'/',
            component:App
        }
    ]
})
