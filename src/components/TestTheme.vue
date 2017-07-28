<template>
    <div class="testTheme">  
        <div>Button:
            <el-button type="primary">主要按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="primary" :disabled="true">主要按钮</el-button>
            <button type="button" class="el-button el-button--primary">
                <i class="mb-icon-home"></i>
                <router-link to="/">Home</router-link>
            </button>
        </div>
        <div>Ratio:
            <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
            <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
        </div>
        <div>Checkbox:
            <el-checkbox v-model="checked">备选项</el-checkbox>
        </div>
        <div class="myinput">Input:
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="block">
            <span class="demonstration0">Date Picker: </span>
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration1">Date Picker (Scope): </span>
            <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            placeholder="选择日期范围"
            :picker-options="pickerOptions2">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration2">默认 click 触发子菜单: </span>
            <el-cascader
            :options="options2"
            @active-item-change="handleItemChange"
            :props="props"
            ></el-cascader>
        </div>
        <div class="block">
            <el-steps :space="100" :active="active" finish-status="success">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
            <el-button type="primary" style="margin-top: 12px;" @click="next">下一步</el-button>
        </div> 
        <div class="block">
            <span class="demonstration">大于 7 页时的效果</span>
            <el-pagination
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
  name: 'theme',
  data () {
    return {
      active: 0,
      radio: '1',
      checked: true,
      input: '',
      value7: '',
      value1: '',
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
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
    next () {
      if (this.active++ > 2) this.active = 0
    },
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
    .myinput .el-input{
        width: 180px;
    } 
</style>
