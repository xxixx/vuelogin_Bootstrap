import Vue from 'vue'
import Vuex, { mapState } from 'vuex'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo : null ,
    alluser : [
      {id :1, name: 'hoza', email : '1@a.com', password : '11111111'},
      {id : 2, name :'hoza2', email : '1@a.com', password : '11111111'}
  ],
  isLogin : false,
  loginError : false
  },
  mutations: {
    //로그인 성공했을때
    loginSuccess(state, payload){
      state.isLogin = true,
      state.loginError = false
      state.userInfo = payload
    },
    loginError(state){
      state.isLogin = false,
      state.loginError = true
    },
    //로그인 에러
    //로그아웃
    logout(state){
      state.userInfo = null 
      state.loginError = false
      state.isLogin = false
    }
  },
  actions: {
    login({state,commit},loginObj){
      // console.log(signinObj)
      let selectedUser = null;
      state.alluser.forEach(user =>{
          if (user.email === loginObj.email) selectedUser = user
      })
         selectedUser === null
         if (selectedUser === null || selectedUser.password !== loginObj.password)
         commit("loginError")
        else {
          commit("loginSuccess" ,selectedUser)
          router.push('./mypage')
          // router.push('./dashboard')
          // router.push({name : "Dashboard"})
        }
      },
      logout({commit}) {
        commit('logout')
        router.push('/dashboard')
      }
    }
  
  // modules: {
  // }
}
)
