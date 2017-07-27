<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>Ecosystem</h2>
    <el-button type="primary" @click="clickBtn">test btn</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    clickBtn: function (event) {
      this.msg = 'Welcome to Your VTD Dashboard'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  text-align: center;
  max-width: 1024px;
  margin: 30px auto;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
