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
    <h2>{{ $t('eco', this.$store.state.locale) }}</h2>
    <el-button type="primary" @click="clickBtn">{{ $t('btntext', this.$store.state.locale) }}</el-button>
    <p>{{ $t('hello', this.$store.state.locale) }}</p>
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
    locale: function (val) {
      console.log(val)
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
