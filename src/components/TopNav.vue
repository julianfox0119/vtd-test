<template>
    <div>
        <header>
            <img src="../assets/navigation-logo.png" class="header-logo">
            <ul class="header-operations">
                <li>帮助</li>
                <li>
                    <span class="header-lang is-active">中文</span><span>/</span><span class="header-lang">En</span>
                </li>
                <!-- <li><el-button type="primary" icon="menu" size="large"></el-button></li> -->
            </ul>
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
    height: 80px;
    text-align: left;
    box-sizing: border-box;
    background-color: #000;
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
</style>

