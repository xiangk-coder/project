<template>
  <el-container class="global-height">
    <!-- 第一套布局方式 -->
    <view-aside  v-if="layout === 'default'"></view-aside>
    <!-- 第二套布局方式 -->
    <el-header v-if="layout === 'horizontal'">
      header
    </el-header>
    <el-main v-if="layout === 'horizontal'">
      main
    </el-main>
    <!-- 第三套布局方式 -->
    <el-header v-if="layout === 'mixing'">
      header
    </el-header>
    <el-container v-if="layout === 'mixing'">
      <el-aside>
        aside
      </el-aside>
      <el-main>
        main
      </el-main>
    </el-container>
     <!-- 第三套布局方式 -->
    <mini-menu v-if="layout === 'mini'" :layout="layout"></mini-menu>
    <el-main v-if="layout === 'mini'">
    </el-main>
  </el-container>
</template>

<script>
import ViewAside from './components/ViewAside'

export default {
  components: {
    ViewAside
  },
  computed: {
    layout () {
      return this.$store.state.layout
    }
  },
  watch: {
    layout (val, oldVal) {
      this.layout = val
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
