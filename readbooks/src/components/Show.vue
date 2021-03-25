<template>
    <div>
      <input type="text" v-model="format">
      <input type="text" v-model="idx">
      <input type="text" v-model="n">
      <input type="submit" @click="getImg">
      <h1>symbol:{{msg}}</h1>
<img src="" alt="">
      </div>
</template>

<script>
export default {
  name: 'show',
  data () {
    return {
      msg: '',
      format: 'js',
      idx: 0,
      n: 0
    }
  },
  // mounted () {
  //   var _this = this
  //   this.axios
  //     .get('/img', { format: this.format,
  //       idx: this.idx,
  //       n: this.n
  //     })
  //     .then(response => (_this.msg = response))
  //     .catch(error => console.log(error))
  //     // eslint-disable-next-line
  //     .finally(() => this.loading = false)
  // },
  methods: {
    getImg () {
      var _this = this
      this.axios
        .get('/api/time')
        .then(response => (_this.msg = response.data))
        .catch(error => console.log(error))
      // eslint-disable-next-line
      .finally(() => this.loading = false)
    }
  }
}
</script>

<style>

</style>
