// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import '@/assets/css/reset.css'
import '@/assets/css/icon.css'
import '@/assets/css/transition.css'
import '@/assets/css/global.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 第三方库
import MintUI, { MessageBox, Toast, Indicator } from 'mint-ui'     // 饿了么移动端UI组件
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'       // swiper的vue轮子
import 'swiper/dist/css/swiper.css'
import VueQuillEditor from 'vue-quill-editor'           // 富文本编辑器

// 自定义组件
import myHeader from '@/components/myHeader'            // header组件
import myLoading from '@/components/loading'            // loading组件
import myError from '@/components/error'                // error组件
import myBanner from '@/components/banner'              // banner组件

import { swiper, goTop } from '@/config/directive.js'   // 指令

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.prototype.$toast = Toast
Vue.prototype.$msgBox = MessageBox
Vue.prototype.$indicator = Indicator
Vue.use(VueAwesomeSwiper)
Vue.use(VueQuillEditor)

// 注册全局组件
Vue.component('my-header', myHeader)
Vue.component('my-loading', myLoading)
Vue.component('my-error', myError)
Vue.component('my-banner', myBanner)

// 注册全局指令
Vue.directive('swiper', {               // 右滑返回上一页
    inserted: function(el, binding, vnode) {
        if (binding.value) {
            swiper(el, binding.arg, binding.value, vnode.context)
        } else {
            return ''
        }
    }
})
Vue.directive('goTop', {                // 点击头部返回页面顶部
    inserted: function(el, binding, vnode) {
        if (binding.value) {
            goTop(el, binding.arg, vnode.context)
        } else {
            return ''
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
