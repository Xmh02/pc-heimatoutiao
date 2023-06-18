<template>
  <div class="login-container">
    <!-- 登录的盒子 -->
    <div class="login-box">
      <!-- 标题的盒子 -->
      <div class="logo-head">
        <div class="logo"></div>
      </div>
      <!-- 登录的表单区域 -->
      <el-form
        :model="loginForm"
        :rules="loginrules"
        ref="loginForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="mobile">
          <el-input
            v-model="loginForm.mobile"
            placeholder="请输入手机号"
          ></el-input>
          <i class="el-icon-mobile-phone"></i>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
          ></el-input>
          <i class="el-icon-circle-check"></i>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox
            label="我已阅读并同意用户协议和隐私条款"
            v-model="loginForm.agree"
          ></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('loginForm')"
            v-loading.fullscreen.lock="fullscreenLoading"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginFun } from '@/api/user/index.js'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810',
        agree: false,
      },
      loginrules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '请输入正确的11位手机号',
            trigger: 'blur',
          },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          {
            pattern: /^\S{6}$/,
            message: '验证码必须是6位的非空字符',
            trigger: 'blur',
          },
        ],
        agree: [
          {
            validator: (rule, value, callback) => {
              // console.log(rule, value)
              if (value) {
                callback()
              } else {
                callback(new Error('请勾选此选项'))
              }
            },
            trigger: 'change',
          },
        ],
      },
      //全屏加载效果
      fullscreenLoading: false,
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.fullscreenLoading = true
          delete this.loginForm.agree
          loginFun(this.loginForm)
            .then(({ data: res }) => {
              this.fullscreenLoading = false
              if (res.message !== 'OK') return this.$message.error(res.message)
              this.$store.commit('updateToken', res.data.token)
              this.$router.push('/main')
              this.$message.success('登录成功')
              console.log('登录功能返回的数据', res.data)
            })
            .catch((error) => {
              this.fullscreenLoading = false
              this.$message.error('手机号或验证码错误')
              // console.log(error)
            })
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url('./assets/images/login_bg.jpg') no-repeat;
  background-size: cover;
  .login-box {
    min-width: 300px;
    padding: 30px 50px 10px;
    background-color: #fff;
    .logo-head {
      display: flex;
      justify-content: center;
      .logo {
        width: 200px;
        height: 57px;
        background: url('./assets/images/logo_index.png') no-repeat;
        background-size: contain;
      }
    }
    .demo-ruleForm {
      position: relative;
      .el-icon-mobile-phone,
      .el-icon-circle-check {
        position: absolute;
        top: 50%;
        left: 8px;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
<style>
.el-input__inner {
  padding-left: 30px;
}
.el-button--primary {
  width: 100%;
}
</style>
