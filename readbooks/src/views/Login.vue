<template>
  <div>
<header class="mui-bar mui-bar-nav">
  <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
<h1 class="mui-title">登录</h1>
</header>
<div class="mui-content">
<form id='login-form' class="mui-input-group">
<div class="mui-input-row">
<label>账号</label>
<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" v-model="name" required="required">
</div>
    <div class="mui-input-row">
        <label>密码</label>
        <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="password" required="required">
    </div>
</form>
<div class="mui-content-padded">
<button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary" @click="Login">登录</button>
<div class="link-area">
  <router-link id='reg' to="/register">注册账号</router-link> 
  <span class="spliter">|</span> 
  <router-link id='forgetPassword' to="/forgetpassword">忘记密码</router-link>
</div>
</div>
<div class="mui-content-padded oauth-area">
</div>
</div>
{{loginInfo}}
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: '',
      loginInfo: ''
    }
  },
  methods: {
    Login () {
      var mui = this.mui
      var that = this
      this.axios.get('/api/Login',
        { 
          params: {
             username: this.name,
             password: this.password
          }
        }).then((response) => { 
          var userInfo = response.data[0]
          console.log(userInfo.message)
          if (userInfo.username === that.name) {
            // 存放登录成功的数据到session
            window.sessionStorage.setItem('uname', userInfo.username)
            window.sessionStorage.setItem('userid', userInfo.userid)
            window.sessionStorage.setItem('kemail', userInfo.kemail)
            this.$parent.$data.username = userInfo.username
            mui.toast('登录成功')
            this.$router.push('/setting2')
            console.log(window.sessionStorage)
          } else {
            mui.toast('登录失败,用户名或密码错误')
            // console.log(window.sessionStorage)
          } 
          })
        .catch(error => console.log(error))
    },
    // router定位
    register: function () {
      this.$router.push('/register')
    },
    forgetPassword: function () {
      this.$router.push('/forgetpassword')
    }
  }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #007aff;
}
.area {
  margin: 20px auto 0px auto;
}

.mui-input-group {
  margin-top: 10px;
}

.mui-input-group:first-child {
  margin-top: 20px;
}

.mui-input-group label {
  width: 22%;
}

.mui-input-row label ~ input,
.mui-input-row label ~ select,
.mui-input-row label ~ textarea {
  width: 78%;
}

.mui-checkbox input[type="checkbox"],
.mui-radio input[type="radio"] {
  top: 6px;
}

.mui-content-padded {
  margin-top: 25px;
}

.mui-btn {
  padding: 10px;
}

.link-area {
  display: block;
  margin-top: 25px;
  text-align: center;
}

.spliter {
  color: #bbb;
  padding: 0px 8px;
}

.oauth-area {
  position: absolute;
  bottom: 20px;
  left: 0px;
  text-align: center;
  width: 100%;
  padding: 0px;
  margin: 0px;
}

.oauth-area .oauth-btn {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0px 20px;
  /*-webkit-filter: grayscale(100%); */
  border: solid 1px #ddd;
  border-radius: 25px;
}

.oauth-area .oauth-btn:active {
  border: solid 1px #aaa;
}

.oauth-area .oauth-btn.disabled {
  background-color: #ddd;
}
</style>
