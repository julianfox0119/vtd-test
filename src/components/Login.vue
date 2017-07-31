<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
    <el-form-item label="姓名/Name" prop="checkName">
        <el-input type="name" v-model="ruleForm.checkName" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码/Password" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="语言/Language" prop="language">
        <el-radio-group v-model="ruleForm.language">
        <el-radio label="中文/Zh"></el-radio>
        <el-radio label="英文/En"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
    </el-form>
</template>

<script>
  import langEn from 'element-ui/lib/locale/lang/en'
  import langZh from 'element-ui/lib/locale/lang/zh-CN'
  import euilocale from 'element-ui/lib/locale'
  
  export default {
    name: 'login',
    data () {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'))
        } else {
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        ruleForm: {
          checkName: '',
          pass: '',
          language: ''
        },
        rules: {
          checkName: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          language: [
            { required: true, message: '请选择语言/Select a Language', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
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
.demo-ruleForm{
    width: 30%;
    margin: 50px auto;
    text-align: center;
}
</style>