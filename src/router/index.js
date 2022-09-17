import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 路由规则
const routes = []

// vue2.0 new VueRouter({})创建路由实例
// vue3.0 createRouter({}) 创建路由实例
constouter = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes
})

export default router
