import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

Router.prototype.go = function() {
    this.isBack = true
    window.history.go(-1)
}

// 路由懒加载
const index = () => import('@/page/index/index')
const home = () => import('@/page/index/home/home')
const user = () => import('@/page/index/user/user')

/* eslint-disable */
export default new Router({
    mode:'history',//去掉锚点
    saveScrollPosition: true, //记住页面的滚动位置 html5模式适用
    routes: [
        {
            path: '',
            redirect: '/index/home',
            component: App,
            children: [
                // index页面
                {
                    name: 'index',
                    path: '/index',
                    redirect: '/index/home',
                    component: index,
                    children: [
                        // home页面
                        {
                            name: 'home',
                            path: 'home',
                            component: home,
                        },
                        // user页面
                        {
                            name: 'user',
                            path: 'user',
                            component: user,
                        }
                    ]
                }
            ]
        }
    ]
})
