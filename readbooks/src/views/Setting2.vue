<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link to="/usersetting" class="mui-navigate-right">
						账号
					</router-link>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						设置
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						关于
					</a>
				</li>
			</ul>
    </div>
</template>
<script>
export default {
  name: 'setting2',
  data () {
    return {
		userinfo: ''
    }
  },
  methods: {
}
}
</script>

<style scope>
</style>
