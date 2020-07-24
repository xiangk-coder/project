<template>
  <div class="c-view-setting">
    <el-dropdown class="c-view-setting-user">
      <span class="el-dropdown-link">
        <i class="el-icon-user-solid el-icon--left"></i>{{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit-outline">个人信息</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '管理员'
    }
  }
}
</script>

<style lang="scss" scoped>
.c-view-setting {
  position: absolute;
  right: 8px;
  &-user {
    span:first-child {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      cursor: pointer;
      i:first-child {
        font-size: 18px;
      }
    }
  }
}
</style>
