<i18n>
{
  "en": {
    "hello": "hello world!",
    "eco": "Ecosystem",
    "btntext": "test btn"
  },
  "zh": {
    "hello": "你好，世界！",
    "eco": "生态系统",
    "btntext": "测试按钮"
  }
}
</i18n>

<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>{{ $t('eco', currentLang) }}</h2>
    <el-button type="primary" @click="clickBtn">{{ $t('btntext', currentLang) }}</el-button>
    <p>{{ $t('hello', currentLang) }}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      currentLang: localStorage.currentLang
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
  text-align: left;
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
