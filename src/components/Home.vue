<i18n>
{
  "en": {
    "hello": "hello world!"
  },
  "zh": {
    "hello": "你好，世界！"
  }
}
</i18n>

<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>Ecosystem</h2>
    <el-button type="primary" @click="clickBtn">test btn</el-button>
    <label for="locale">locale</label>
    <select v-model="locale">
      <option>en</option>
      <option>zh</option>
    </select>
    <p>message: {{ $t('hello') }}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      locale: 'en'
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
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
