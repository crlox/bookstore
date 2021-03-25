<template>
<div>
<head>
        <meta name="referrer" content="no-referrer">
    </head>
<div class="mui-content" style="background-color:#fff">
		    <ul class="mui-table-view mui-grid-view">

		        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="book in bookList" :key=book.bookname >
		            <router-link :to="'/bookcontent?bookname='+book.bookname+'&picurl='+book.picurl">
		                <img class="mui-media-object" :src="book.picurl">
		                <div class="mui-media-body">{{book.bookname}}</div>
                    </router-link>
                </li>

		    </ul>    
		</div>
</div>
</template>

<script>
export default {
  name: 'showsearchbooks',
  data () {
    return {
        bookList: '',
        bookname: this.$route.query.bookname
    }
  },
    created () {
    var that = this
    this.axios
      .get('/api/GetBooksSearch',
      {
         params: {
            bookname: that.bookname,
            userid: window.sessionStorage.userid} 
      })
      .then(response => { 
          // that.shareinfo = response.data
          that.bookList = response.data
          })
      .catch(error => console.log(error))
  },
  methods: {
}
}
</script>

<style scope>
</style>
