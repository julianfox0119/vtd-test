<template>
    <div>
        <header>
            <img src="../assets/navigation-logo.png" class="header-logo">
            <!-- <ul class="header-operations">
                <li>帮助</li>
                <li>
                    <span class="header-lang is-active">中文</span><span>/</span><span class="header-lang">En</span>
                </li>
            </ul> -->
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
        </header>
    </div>
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
header {
    height: 60px;
    text-align: left;
    box-sizing: border-box;
    background-color: #1f1f1f;
}
.header-operations:after, header:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
}
.header-logo {
    display: inline-block;
    vertical-align: middle;
    height: 60%;
    padding: .75em 1.125em;
}
.header-operations {
    float: right;
    padding-right: 30px;
    height: 100%;
}
.header-operations li {
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 80px;
    cursor: pointer;
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

