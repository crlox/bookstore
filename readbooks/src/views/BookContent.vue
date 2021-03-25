
<template>
<div>
    <head>
        <meta name="referrer" content="no-referrer">
    </head>
<div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<img src="../assets/booklogo.png" />
					<div class="mui-media-body">
						{{bookname}}
            <img v-if="hascollected" @click="delcollect" src="../assets/collected.png" />
            <img v-else @click="collectbook" src="../assets/collect.png" />
					</div>
          
				</div>
        
				<div class="mui-card-content" >
					<img :src="bookUrl" alt="" width="100%"/>
          <ul class="mui-table-view">
            	<li class="mui-table-view-cell">{{bookContentList.a}}</li>
              <li class="mui-table-view-cell">{{bookContentList.b}}</li>
              <li class="mui-table-view-cell">{{bookContentList.c}}</li>
              <li class="mui-table-view-cell">{{bookContentList.d}}</li>
              <li class="mui-table-view-cell">{{bookContentList.e}}</li>
              <li class="mui-table-view-cell">{{bookContentList.f}}</li>
          </ul>
				</div>
				<div class="mui-card-footer">
		        <button type="button" class="mui-btn mui-btn-primary mui-btn-block" @click="downloadbook">下载</button>
		        <button id='promptBtn' type="button" class="mui-btn mui-btn-success mui-btn-block" @click="inputkemail">推送</button>
			</div>
			</div>

</div>
</template>

<script>

export default {
  name: 'boocontent',
  data () {
    return {
        bookname: this.$route.query.bookname,
        bookContentList: '',
        bookContent: '',
        bookUrl: this.$route.query.picurl,
        hascollected: ''
    }
  },
    created () {
    // var mui = this.mui
    var that = this
    this.axios
      .get('/api/GetMyBooksContent',
      {
         params: {
            bookname: that.bookname, 
            userid: parseInt(window.sessionStorage.userid)
            } 
      })
      .then(response => { 
          // that.shareinfo = response.data
          that.hascollected = response.data[0].iscollected
          that.bookContentList = response.data[0]
          })
      .catch(error => console.log(error))
  },
  methods: {
    downloadbook () {
      window.location.href = 'http://localhost:8080/DownloadBook?bookname=' + this.bookname
    },
    collectbook () {
       var mui = this.mui
       var that = this
      this.axios.post('/api/BookCollect',
        { userid: parseInt(window.sessionStorage.userid),
          bookname: this.bookname
        }).then((response) => {
          // 收藏成功
          if (response.data[0].status === 'true') {
            mui.toast('收藏成功')
            that.hascollected = true
          } else {
            mui.toast('收藏失败')
          }
		})
        .catch(error => console.log(error))
      // eslint-disable-next-line
      .finally(() => this.loading = false)
    },
    delcollect () {
       var mui = this.mui
       var that = this
      this.axios.delete('/api/DelCollect', {
          data: { 
          userid: parseInt(window.sessionStorage.userid),
          bookname: this.bookname
        }
      }
        ).then((response) => {
          // 收藏成功
          if (response.data[0].status === 'true') {
            mui.toast('取消收藏成功')
            that.hascollected = false
          } else {
            mui.toast('取消收藏失败')
          }
		})
        .catch(error => console.log(error))
      // eslint-disable-next-line
      .finally(() => this.loading = false)
    },
    inputkemail () {
      var mui = this.mui
      var that = this
      // 查找用户是否有kemail
      if (window.sessionStorage.kemail === 'null' || window.sessionStorage.kemail === '') {
        var btnArray = ['返回', '绑定']
				mui.prompt('请先绑定你的设备邮箱地址：', 'xxx@kindle.com', '绑定设备', btnArray, function (e) {
          if (e.value === '') {
            mui.toast('请输入正确的邮箱地址')
          } else {
            if (e.index === 1) {
            // 输入绑定邮箱
            // mui.toast(e.value)
            that.axios.post('/api/SetKemail',
          { userid: window.sessionStorage.userid,
            kemail: e.value
          }).then((response) => {
            // 情况
            if (response.data[0].status === 'true') {
              mui.toast('绑定成功')
              window.sessionStorage.setItem('kemail', e.value)
            } else { // 情况
              mui.toast('绑定失败了')
            }
            })
          .catch(error => console.log(error))
            // console.log(e.value)
					}
          }	
				})
      } else {
        setTimeout(() => {  
        mui.alert('已推送到' + window.sessionStorage.kemail + '，期间请保证设备联网') 
    }, Math.random() * 5000 + 4000) 
    // 为什么下面的不能成功执行呢
        // window.setTimeout(mui.alert('已推送到' + window.sessionStorage.kemail + '，期间请保证设备联网'), 3000)
        // mui.alert('已推送到' + window.sessionStorage.kemail + '，期间请保证设备联网')
      }
      // 
    }
}
}
</script>

<style scope>
</style>
