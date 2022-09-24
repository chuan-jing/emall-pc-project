// 用户模块
export default {
  namespaced: true,
  state () {
    // 用户信息
    return {
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    // 修改用户信息的方法,payload就是用户信息对象
    setUser (state, payload) {
      state.profile = payload
    }
  }
}
