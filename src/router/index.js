import Vue from 'vue'
import VueRouter from 'vue-router'

import Cookie from '../utils/cookie'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import('../homepage.vue'),
    children:[
      {
        path: '/entry_exam',
        name: 'entryExam',
        component: () => import('../components/exam/entry_exam.vue')
      },
      {
        path: '/mid_exam',
        name: 'MidExam',
        component: () => import('../components/exam/mid_exam.vue')
      },
      {
        path: '/end_exam',
        name: 'EndExam',
        component: () => import('../components/exam/end_exam.vue')
      },
      {
        path: '/stuInfoInput',
        name: 'StuInfoInput',
        component: () => import('../components/stu_info.vue')
      },
      {
        path: '/main',
        name: 'Main',
        component: () => import('../views/main.vue')
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('../views/info.vue')
      },
      {
        path: '/score',
        name: 'Score',
        component: () => import('../views/score.vue')
      }
    ],
    beforeEnter: (to, from, next) => {
      let islogin = Cookie.get('username');
      console.log(islogin);
      console.log(Boolean(islogin))
      // let islogin = true
      if(!islogin){
        if(to.path == "/"){
          next("/login");
        } else {
          next()
        }
      }else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../components/regist.vue')
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
