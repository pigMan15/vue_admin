import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/element-variables.scss'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import i18n from './lang' // Internationalization
import '@/styles/index.scss' // global css
import '../static/styles/index.scss' // global css
import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, {
    size: Cookies.get('size') || 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

process.env.MOCK && require('@/mock')
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
})