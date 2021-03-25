<template>
<div>
<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">找回密码</h1>
		</header>
		<div class="mui-content">
			<form class="mui-input-group">
				<!--
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>             	
                -->
				<div class="mui-input-row">
					<label>邮箱</label>
					<input id='email' type="email" class="mui-input-clear mui-input" placeholder="请输入注册邮箱">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='sendMail' class="mui-btn mui-btn-block mui-btn-primary">提交</button>
			</div>
            <form class="mui-input-group">
</form>
		</div>
</div>
</template>

<script>
export default {
  name: 'forgetpassword',
  data () {
    return ''
  },
  methods: {
      
    isEmail (strEmail) {
  		// 定义正则表达式的变量:邮箱正则
  		var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  		console.log(strEmail)
  		// 文本框不为空，并且验证邮箱正则成功，给出正确提示
  		if (strEmail != null && strEmail.search(reg) !== -1) {
  			document.getElementById('test_user').innerHTML = "<font color='green' size='4px'>√邮箱格式正确！</font>"
  		} else {
  			document.getElementById('test_user').innerHTML = "<font color='red' size='4px'>邮箱格式错误！</font>"
  		}
  	}
  }
}
</script>

<style scope>
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
			.mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea{
				margin-top: 1px;
			}
</style>
