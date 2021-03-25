<template>
  <div>
    <!-- 主要的展示区 -->
    <!-- <router-view></router-view> -->
  <!-- 导航栏 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link >
			<router-link class="mui-tab-item" to="/favorite">
				<span class="mui-icon mui-icon-paperplane"><span class="mui-badge">{{bookNum}}</span></span>
				<span class="mui-tab-label">推荐</span>
			</router-link>
			<router-link class="mui-tab-item" to="/mybooks">
				<span class="mui-icon mui-icon-list"></span>
				<span class="mui-tab-label">我的书库</span>
			</router-link>
			<router-link class="mui-tab-item" to="/setting">
				<span class="mui-icon mui-icon-settings"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
		<div class="mui-content">
			<div class="mui-control-content mui-active">
				<router-view></router-view>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
		bookNum: ''
    }
  },
  components: {
  },
  methods: {

  }
}
</script>

<style>
html,body {
    margin: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
}
a{
  text-decoration:none;
  color:#fff;
}

/* .v-enter,
.v-leave-to{
	opacity: 0;
	transform: (100%);
}
.v-leave-active{
	transition: all 0.5 ease;
} */
</style>
