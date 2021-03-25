
<template>
<div>
<ul class="mui-table-view">
				<li class="mui-table-view-cell">
    <div class="mui-input-row">
        <label>用户名</label>{{uname}}
    </div>
				</li>
				<li class="mui-table-view-cell">
					<div class="mui-input-row">
        <label>密码</label>
        <input type="password" class="mui-input-password" placeholder="******" v-model="userinfo.upassword">
    </div>
				</li>
				<li class="mui-table-view-cell">
					<div class="mui-input-row">
        <label>邮箱</label>
        <input type="text" class="mui-input-clear" v-model="userinfo.uemail">
    </div>
				</li>
                <li class="mui-table-view-cell">
					<div class="mui-input-row">
        <label>KINDLE邮箱</label>
        <input type="text" class="mui-input-clear" v-model="userinfo.ukemail">
    </div>
				</li>
                <li class="mui-table-view-cell">
					<div class="mui-input-row">
        <label>个人信息</label>
        <input type="text" class="mui-input-clear" v-model="userinfo.uinfo">
    </div>
				</li>
			</ul>
            <div class="mui-content">
		    <div class="mui-content-padded">
                <button type="button" class="mui-btn mui-btn-warning mui-btn-block" @click="dataChange">确认修改</button>
		        <button type="button" class="mui-btn mui-btn-danger mui-btn-block" @click="loginOut">退出登录</button>
		    </div>
		</div>
            
</div>
</template>

<script>
export default {
  name: 'usersetting',
  data () {
    return {
        userinfo: '',
        uname: window.sessionStorage.uname
    }
  },
    created () {
	var that = this
	this.axios
    .get('/api/GetUserInfo',
    {
        params: { userid: window.sessionStorage.userid } 
    })
      .then(response => { 
          // that.shareinfo = response.data
          that.userinfo = response.data[0]
          })
      .catch(error => console.log(error))
  },
  methods: {
      
      loginOut () {
    var mui = this.mui
    // 注销后 清除session信息 ，并返回登录页
    window.sessionStorage.removeItem('uname')
    window.sessionStorage.removeItem('userid')
    window.sessionStorage.removeItem('kemail')
    mui.toast('退出成功')
    this.$router.push('/setting') 
    },
    // 修改信息
    dataChange () {
    var mui = this.mui
    var that = this
      this.axios.post('/api/DataChange',
        { 
          id: parseInt(window.sessionStorage.userid),
          password: that.userinfo.upassword,
          email: that.userinfo.uemail,
          info: that.userinfo.uinfo,
          kemail: that.userinfo.ukemail
        }).then((response) => {
            // 修改成功
            if (response.data[0].status === 'true') {
                window.sessionStorage.kemail = that.userinfo.ukemail
                mui.toast('修改成功')
            } else {
                mui.toast('修改失败')
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
.mui-table-view button {
    width: 200px;
    text-align: center;
}
</style>
