<template>
    <div class="testTheme">
        <div>Button:
            <el-button type="primary">主要按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="primary" :disabled="true">主要按钮</el-button>
        </div>
        <div>Ratio:
            <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
            <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
        </div>
        <div>Checkbox:
            <el-checkbox v-model="checked">备选项</el-checkbox>
        </div>
        <div>Input:
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="block">
            <span class="demonstration">Date Picker: </span>
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">默认 click 触发子菜单: </span>
            <el-cascader
            :options="options2"
            @active-item-change="handleItemChange"
            :props="props"
            ></el-cascader>
        </div>
    </div>
</template>

<script>
export default {
  name: 'theme',
  data () {
    return {
      radio: '1',
      checked: true,
      input: '',
      value1: '',
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      options2: [{
        label: '江苏',
        cities: []
      }, {
        label: '浙江',
        cities: []
      }],
      props: {
        value: 'label',
        children: 'cities'
      }
    }
  },
  methods: {
    handleItemChange (val) {
      setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
          this.options2[0].cities = [{
            label: '南京'
          }]
        } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
          this.options2[1].cities = [{
            label: '杭州'
          }]
        }
      }, 300)
    }
  }
}
</script>

<style scoped>
    .testTheme{
        margin: 20px;
        text-align: left;
    }
    .testTheme div{
        margin-top:10px;
    }
    .el-input{
        width: 180px;
    }
</style>
