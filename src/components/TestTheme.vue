<template>
    <div class="testTheme">
        <div>Button:
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="text">文字按钮</el-button>
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
      }
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
