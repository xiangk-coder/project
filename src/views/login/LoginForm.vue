<template>
  <el-card v-loading="loading" element-loading-text="验证登录中..." shadow="hover" :body-style="{ padding: '16px' }" class="login-form-card">
    <slot name="title" />
    <el-form ref="loginForm" :model="loginForm" :rules="rules">
      <el-form-item prop="username">
        <el-input ref="username" placeholder="请输入账号" v-model="loginForm.username" autofocus @keyup.enter.native="handleNext">
          <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input ref="password" placeholder="请输入密码" v-model="loginForm.password" type="password" @keyup.enter.native="handleLogin">
          <i slot="prefix" class="el-input__icon el-icon-warning"></i>
        </el-input>
      </el-form-item>
      <el-form-item class="global-form-item-hide-footer">
        <el-button type="primary" :loading="loading" @click="handleLogin" round class="global-width">登录</el-button>
        <div class="login-form-error-msg">{{ errorMsg }}</div>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { login } from '../../api'
import { setSessionStorage } from '../../libs/util'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loading: false,
      errorMsg: ''
    }
  },
  methods: {
    handleNext () {
      this.$refs.loginForm.validateField('username', (valid) => {
        !valid && this.$refs.password.focus()
      })
    },
    handleLogin () {
      this.loading = true
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.login()
        } else {
          this.loading = false
          return false
        }
      })
    },
    async login () {
      try {
        const resp = await login(this.loginForm)
        if (resp && resp.data && resp.data.code === 200) {
          this.errorMsg = ''
          setSessionStorage('AUTH-TOKEN', resp.data.data.token)
          this.$router.push('/main')
        } else {
          this.errorMsg = resp.data.msg ? resp.data.msg : '登录失败，请联系管理员'
        }
      } catch (error) {
        this.loading = false
        this.errorMsg = '登录失败，请联系管理员'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form-card {
  min-width: 400px;
}

.login-form-error-msg {
  min-height: 30px;
  color: #ed4014;
}
</style>
