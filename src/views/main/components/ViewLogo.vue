<template>
  <div class="header-logo">
    <el-tooltip :disabled="!collapse" effect="dark" content="系统管理平台" placement="right">
      <div class="header-logo-icon">
        <i class="el-icon-menu"></i>
      </div>
    </el-tooltip>
    <span v-if="!collapse">系统管理平台</span>
  </div>
</template>

<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header-logo {
  height: 59px;
  display: flex;
  align-items: center;
  color: #f6ca9d;
  border-bottom: 1px solid rgba(246, 202, 157, .7);
  i {
    font-size: 30px;
  }
  span {
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &-icon {
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
  }
}
</style>
