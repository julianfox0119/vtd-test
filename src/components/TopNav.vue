<template>
    <div>
        <header>
            <img src="../assets/navigation-logo.png" class="header-logo">
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
    /* position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: 1; */
    text-align: left;
    box-sizing: border-box;
    background-color: #000;
}
header:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
}
.header-logo {
    display: inline-block;
    vertical-align: middle;
    height: 60%;
    margin-left: 10px;
}
</style>

