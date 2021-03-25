import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/views/Register'
import Login from '@/views/Login'
import ForgetPassword from '@/views/ForgetPassword'
import Setting from '@/views/Setting'
import Setting2 from '@/views/Setting2'
import Search from '@/views/Search'
import MyBooks from '@/views/MyBooks'
import UserSetting from '@/views/UserSetting'
// import ShareBook from '@/views/ShareBook'
import BookContent from '@/views/BookContent'
import ShowSearchBooks from '@/views/ShowSearchBooks'
import Favorite from '@/views/Favorite'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
      meta: {
        needLogin: false
       }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        needLogin: false
       }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        needLogin: false
       }
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: ForgetPassword,
      meta: {
        needLogin: false
       }
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      meta: {
        needLogin: false
       }
    },
    {
      path: '/setting2',
      name: 'setting2',
      component: Setting2,
      meta: {
        needLogin: true
       }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        needLogin: false
       }
    },
    {
      path: '/mybooks',
      name: 'mybooks',
      component: MyBooks,
      meta: {
        needLogin: true
       }
    },
    {
      path: '/usersetting',
      name: 'usersetting',
      component: UserSetting,
      meta: {
        needLogin: true
       }
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
      meta: {
        needLogin: true
       }
    },
    {
      path: '/bookcontent',
      name: 'bookcontent',
      component: BookContent,
      meta: {
        needLogin: true
       }
    },
    {
      path: '/showsearchbooks',
      name: 'showsearchbooks',
      component: ShowSearchBooks,
      meta: {
        needLogin: true
       }
    }
  ],
  linkActiveClass: 'mui-active'// 选中的路由变为高亮的类
})
