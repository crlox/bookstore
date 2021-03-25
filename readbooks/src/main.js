// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './lib/mui/css/mui.css'
import mui from './lib/mui/js/mui.js'

// Vue.prototype.HOST = '/api'
Vue.config.productionTip = false // 阻止启动生产消息
// Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.use(VueAxios, axios)
Vue.prototype.mui = mui
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 路由守卫
router.beforeEach((to, from, next) => {
  // 路由中设置的needLogin字段就在to当中 表示正要进入的路由 from 表示正要离开的路由 next表示进行下一个钩子
  if (window.sessionStorage.userid) {
   // console.log(window.sessionStorage)
   // console.log(to.path) //每次跳转的路径
   if (to.path === '/login' || to.path === '/setting') {
    // 登录状态下 访问login.vue或未登录的设置页面 会跳到登录后的设置页面
    next({path: '/setting2'})
   } else {
    next()
   }
  } else {
   // 如果没有session ,访问要登录的页面。都会进入到 登录页
   // 不需要登录也能访问的页面
   if (to.path === '/login' || to.path === '/setting' || to.path === '/register' || to.path === '/forgetpassword') { 
     // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
    next()
   } else { // 否则 跳转到登录页面
    next({ path: '/login' })
   }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
