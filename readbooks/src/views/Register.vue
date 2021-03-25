<template>
  <div>
<header class="mui-bar mui-bar-nav">
<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">注册</h1>
		</header>
		<div class="mui-content">
			<form class="mui-input-group" action="/api/Register" method="post">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" v-model="name" required="">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="password" required="">
				</div>
				<div class="mui-input-row">
					<label>确认</label>
                    <input id='password_confirm' type="password" class="mui-input-clear mui-input" placeholder="请确认密码" v-model="repassword" required="">
				</div>
				<div class="mui-input-row">
					<label>邮箱</label>
					<input id='email' type="email" class="mui-input-clear mui-input" placeholder="请输入邮箱" v-model="email" required="">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='reg' class="mui-btn mui-btn-block mui-btn-primary" @click="register">注册</button>
			</div>
			<!-- <div class="mui-content-padded">
				<p>{{ shareinfo }}</p>
			</div> -->
		</div>
  </div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
      // shareinfo: null,
      name: '',
	  password: '',
	  repassword: '',
      email: ''
    }
  },
  methods: {
	  register () {
	  var mui = this.mui
      this.axios.post('/api/Register',
        { name: this.name,
          password: this.password,
          email: this.email
        }).then((response) => {
			if (response.data[0].status === 'true') {
				mui.toast('注册成功，请登录')
				this.$router.push('/login')
			} else {
				mui.toast(response.data[0].status)
			}
		})
        .catch(error => console.log(error))
      // eslint-disable-next-line
      .finally(() => this.loading = false)
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
.mui-input-group:first-child {
margin-top: 20px;
}
.mui-input-group label {
    width: 22%;
}
.mui-input-row label~input,
.mui-input-row label~select,
.mui-input-row label~textarea {
width: 78%;
}
.mui-checkbox input[type=checkbox],
.mui-radio input[type=radio] {
top: 6px;
}
.mui-content-padded {
margin-top: 25px;
}
.mui-btn {
padding: 10px;
}
</style>
