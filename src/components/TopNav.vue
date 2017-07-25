<template>
    <el-row class="header">
        <el-col :xs="1" :sm="1" :md="2" :lg="2"><img src="../assets/navigation-logo.png" class="header-logo"></el-col>
        <el-col :xs="22" :sm="22" :md="20" :lg="20">
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">帮助</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu> 
                <el-menu-item index="2"><a href="/test">主题测试</a></el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.header {  
    text-align: left;
    box-sizing: border-box;
    background-color: #000000;
}
.header-logo {
    display: inline-block;
    vertical-align: middle;
    height: 60%;
    padding: .75em 1.125em;
    max-height: 35px;
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
</style>

