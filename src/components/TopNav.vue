<i18n>
{
  "en": {
    "help": "Help"
  },
  "zh": {
    "help": "帮助"
  }
}
</i18n>

<template>
    <header>
        <el-row class="head_container">
            <el-col :xs="1" :sm="1" :md="2" :lg="2" class="head_logo"><img src="../assets/mblogo.png" class="header-logo"></el-col>
            <el-col :xs="23" :sm="23" :md="22" :lg="22" class="head_nav">
                <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">{{ $t('help', currentLang) }}</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu> 
                    <el-menu-item index="3">
                        <!-- <a href="/test">主题测试</a> -->
                        <router-link to="/test">主题测试</router-link>
                    </el-menu-item>
                    <el-menu-item index="4" @click="switchLang">中文/En</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </header>
</template>

<script>
import langEn from 'element-ui/lib/locale/lang/en'
import langZh from 'element-ui/lib/locale/lang/zh-CN'
import euilocale from 'element-ui/lib/locale'

export default {
  name: 'top',
  data () {
    return {
      activeIndex: '1',
      currentLang: localStorage.currentLang
    }
  },
  methods: {
    switchLang () {
      if (localStorage.currentLang === undefined) {
        localStorage.currentLang = 'zh'
      } else {
        if (localStorage.currentLang === 'en') {
          localStorage.currentLang = 'zh'
          console.log(localStorage.currentLang, langZh)
          euilocale.use(langZh)
        } else {
          localStorage.currentLang = 'en'
          console.log(localStorage.currentLang, langEn)
          euilocale.use(langEn)
        }
      }
      window.location.reload()
    },
    handleSelect (key, keyPath) {
    //   console.log(key, keyPath)
    }
  },
  mounted () {
    if (localStorage.currentLang === undefined) {
      localStorage.currentLang = 'zh'
    }
    if (localStorage.currentLang === 'zh') {
      euilocale.use(langZh)
    } else {
      euilocale.use(langEn)
    }
  }
}
</script>

<style scoped>
header {  
    text-align: left;
    box-sizing: border-box;
    background-color: #000000;   
}
.head_container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
}
.head_logo, .head_nav{
    min-height: 89px;
}
.header-logo {
    display: inline-block;
    vertical-align: middle;
    height: 60%;
    padding: .75em 0;  
    max-height: 65px;
}
ul {
    list-style: none outside none;
    margin: 0;
    padding: 0;
}
.el-menu-demo{
    float: right;
}
.el-menu a{
    text-decoration: none;
}
@media (max-width: 550px) {
  /* .header-logo{
    display: none;
  } */
}

</style>
