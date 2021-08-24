<template>
  <div>
       <div class="container border rounded-0 login-con" position="" top="50%">
        <div>
            <div :value="isLogin" class="alert alert-success" role="alert" style="background: var(--bs-success);color: var(--bs-white);"><span><strong>Alert</strong> 로그인 되었습니다.</span></div>
            <div :value="loginError" class="alert alert-success" role="alert" style="background: var(--bs-orange);color: var(--bs-white);"><span><strong>Alert</strong> 이메일을 입력하세요.</span></div>
            <div>
                <div style="color: var(--bs-white);background: var(--bs-cyan);">
                    <p class="border rounded-0" style="padding: 16px;margin-bottom: 4;">Paragraph</p>
                </div>
                <div class="input-group"><input v-model="email" class="form-control" type="text" placeholder="email"></div>
                <div class="input-group"><input v-model="password" class="form-control mt-2" type="text" placeholder="password" mt-2=""></div>
                <a @click="login()" class="btn btn-success d-block mt-3" role="button">Button</a>
                <!-- <button @click="login()" class="btn btn-success d-block mt-3">Button</button> -->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            email : null,
            password : null,
            alluser : [
                {id :1, name: 'hoza', email : '1@a.com', password : '11111111'},
                {id : 2, name :'hoza2', email : '1@a.com', password : '11111111'}
            ],
            isError : false,
            isSuccess : false
        }
    },
    computed: {
            // ...mapState(['isLogin', 'loginError'])
    },
    
    methods:{
        // ...mapActions(['login'])
        login(){
            console.log(this.email, this.password);
            let selectedUser = null;
            this.alluser.forEach(user =>{
                if (user.email === this.email) selectedUser = user
            })
          
             selectedUser === null
             ? (this.isError = true , this.isSuccess = false)
              
             : selectedUser.password !== this.password
               ? (this.isError = true)
                : (this.isError = false , this.isSuccess = true)
        }
    }
}
</script>

<style>

</style>