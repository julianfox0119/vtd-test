
<template>
  <el-row id="app">
    <el-col :xs="24" :sm="24" :md="24" :lg="24"><TopNav></TopNav></el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="24"><router-view class="main-content"></router-view></el-col>
  </el-row>
</template>

<script>
import TopNav from './components/TopNav'

export default {
  name: 'app',
  components: {
    TopNav
  },
  mounted () {
    // todo: get data from backend
    this.$store.state.locale = 'zh'
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #1f1f1f;
  color: #ffffff; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
.main-content{
  max-width: 1200px;
  margin: 30px auto;
  padding: 10px;
}

</style>
