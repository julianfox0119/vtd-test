<i18n>
{
  "en": {
    "placeholderDate": "Pick a Day",
    "shortcuts1": "Resently Week"
  },
  "zh": {
    "placeholderDate": "选择日期",
    "shortcuts1": "最近一周"
  }
}
</i18n>

<template>
    <div class="testTheme">  
        <div>Button:
            <el-button type="primary">主要按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="primary" :disabled="true">主要按钮</el-button>
            <button type="button" class="el-button el-button--primary" @click="goHome">
                <i class="mb-icon-home"></i>
                <span>Home</span>
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
            <span class="demonstration">Date Picker: </span>
            <el-date-picker
            v-model="value1"
            type="date"
            :placeholder="$t('placeholderDate', currentLang)"
            :picker-options="pickerOptions0">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">Date Picker (Scope): </span>
            <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            :placeholder="$t('placeholderDate', currentLang)"
            :picker-options="pickerOptions2">
            </el-date-picker>
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
        <el-table
            :data="tableData"
            >
            <el-table-column
                prop="date"
                label="日期"
                width="220"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180"
                >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
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
      currentLang: localStorage.currentLang,
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      pickerOptions2: {
        shortcuts: [{
          text: this.$t('shortcuts1', localStorage.currentLang),
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
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      props: {
        value: 'label',
        children: 'cities'
      }
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    next () {
      if (this.active++ > 2) this.active = 0
    }
  },
  mounted () {
    console.log(this.currentLang)
  }
}
</script>

<style scoped>
    .testTheme{
        text-align: left;
    }
    .testTheme div{
        margin-top:10px;
    }
    .myinput .el-input{
        width: 180px;
    } 
</style>
