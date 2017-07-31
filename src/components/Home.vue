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
    <div class='weather' v-if="weatherInfo">
      <div><h3>{{weatherInfo.currentCity}} | pm2.5-{{weatherInfo.pm25}} | {{weatherInfo.weather_data.length}}</h3></div>   
      <el-row class="row-bg" justify="center" >
        <el-col :span="3" v-for="item in weatherInfo.weather_data" :key="item.id" class='detail'>
          <p title="详情" class='date'>{{item.date.slice(0,10)}}</p>
          <p>
            <img :src="item.dayPictureUrl">
            <img :src="item.nightPictureUrl">
          </p>
          <p>{{item.weather}}</p>
          <p>{{item.wind}}</p>
          <p>{{item.temperature}}</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import jsonp from 'jsonp'

export default {
  name: 'home',
  data () {
    return {
      msg: '',
      currentLang: localStorage.currentLang,
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=HGOUnCXeQLEeywhGOu2jU29PFdC6duFF',
      weatherInfo: null
    }
  },
  created () {
    this.getWeather()
  },
  methods: {
    clickBtn: function (event) {
      this.msg = 'Welcome to Your VTD Dashboard'
    },
    getWeather () {
      let self = this
      jsonp(this.url, null, function (err, data) {
        if (err) {
          console.error(err.message)
        } else {
          self.weatherInfo = data.results[0]
        }
      })
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
