
<template>
<div>
    <el-table
    v-loading="loading"
    :data="shareinfo.filter(data => !search || data.message.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}">
    <el-table-column
      prop="time"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="message"
      label="消息">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope>
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleDetailed(scope.$index, scope.row)">详情</el-button>
        <el-button
          size="mini"
          type="success"
          @click="handleSave(scope.$index, scope.row)">保存</el-button>
      </template>
    </el-table-column>
  </el-table>
    {{shareinfo}}
</div>
</template>

<script>

export default {
  name: 'share',
  data () {
    return {
      shareinfo: null,
      search: '',
      loading: true
    }
  },
  methods: {

  },
  mounted () {
    var _this = this
    this.axios
      .get('/api/Message')
      .then(response => (_this.shareinfo = response.data))
      .catch(error => console.log(error))
      // eslint-disable-next-line
      .finally(() => this.loading = false)
  }
}
</script>

<style scope>
  body {
    margin: 0;
  }
</style>
