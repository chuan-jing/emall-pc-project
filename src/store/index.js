import { createStore } from 'vuex'

// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  state: {
    // 存状态的,存数据的
  },
  getters: {
    // 写计算属性的，vuex的计算属性
  },
  mutations: {
    // 修改方法的，改数据函数
  },
  actions: {
    // 拿数据的，请求数据函数
  },
  modules: {
    // 分模块的
  }
})
