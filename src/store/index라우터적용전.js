import Vue from 'vue'
import Vuex, { mapState } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alluser : [
      {id :1, name: 'hoza', email : '1@a.com', password : '11111111'},
      {id : 2, name :'hoza2', email : '1@a.com', password : '11111111'}
  ],
  isLogin : false,
  loginError : false
  },
  mutations: {
    //로그인 성공했을때
    loginSuccess(state){
      state.isLogin = true,
      state.loginError = false
    },
    loginError(state){
      state.isLogin = false,
      state.loginError = true
    }
    //로그인 에러

  },
  actions: {
    login({state,commit},loginObj){
      // console.log(signinObj)
      let selectedUser = null;
      state.alluser.forEach(user =>{
          if (user.email === loginObj.email) selectedUser = user
      })
        if (selectedUser === null || selectedUser.password !== loginObj.password)
         commit("loginError")
        else {
          commit("loginSuccess")
        }
      

    }   
  },
  modules: {
  }
}
)
