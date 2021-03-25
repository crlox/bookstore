
<template>
<div>
<div class="mui-content">
			<div class="mui-content-padded" style="margin: 5px;">
				<div class="mui-input-row mui-search">
                    <input type="search" class="mui-input-clear" placeholder="搜索一下" @keyup.enter="searchbooks" v-model="bookname">
				</div>
			</div>
</div>
</div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      bookname: ''
    }
  },
  methods: {
    searchbooks () {
    this.$router.replace('/showsearchbooks?bookname=' + this.bookname + '')
  }
}
}
</script>

<style scoped>
div{
    padding-top: 30px;
}
</style>
