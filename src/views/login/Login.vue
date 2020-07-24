<template>
  <el-container class="global-background">
    <el-header></el-header>
    <el-main>
      <el-row type="flex" justify="space-around" class="global-height">
        <el-col class="global-height global-center">
          <LoginForm>
            <div slot="title" class="login-title">账号登录</div>
          </LoginForm>
        </el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import LoginForm from './LoginForm'

export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}

.login-title {
  position: relative;
  height: 48px;
  font-size: 18px;
  line-height: 48px;
}
</style>
