<template>
  <el-container class="global-height">
    <!-- 第一套布局方式 -->
    <el-aside class="el-asider-width" :style="asideStyle">
      <view-logo :collapse="isCollapse" :style="logoStyle"></view-logo>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-border"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#303133"
        text-color="#fff"
        active-text-color="#f6ca9d"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">导航五</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">导航六</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">导航七</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="el-header-component">
        <el-link @click="isCollapse = !isCollapse" class="el-link-collapse"><i :class="iconClass"></i></el-link>
        <view-nav></view-nav>
        <view-setting></view-setting>
      </el-header>
      <el-main class="el-main-component">main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import ViewLogo from './ViewLogo'
import ViewNav from './ViewNav'
import ViewSetting from './ViewSetting'

export default {
  components: {
    ViewLogo,
    ViewNav,
    ViewSetting
  },
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    asideStyle () {
      return this.isCollapse ? {
        width: 'auto',
        maxWidth: '300px',
        height: '100%',
        overflow: 'hidden'
      } : {
        width: 'auto',
        minWidth: '200px',
        maxWidth: '300px',
        height: '100%',
        overflow: 'hidden'
      }
    },
    logoStyle () {
      return this.isCollapse ? {
        width: '64px',
        justifyContent: 'center'
      } : {
        justifyContent: 'flex-start'
      }
    },
    iconClass () {
      return this.isCollapse ? 'el-icon-s-unfold el-icon--right el-icon-collapse' : 'el-icon-s-fold el-icon--right el-icon-collapse'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-asider-width {
  background: #303133;
}

.el-menu-vertical-border {
  border-width: 0;
  text-align: left;
  overflow: auto;
  height: calc(100% - 60px);
}

.el-link-collapse {
  height: 60px;
  width: 36px;
  padding-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-icon-collapse {
  font-size: 24px;
}

.el-header-component {
  padding: 0 8px;
  background: #f8f8f9;
  border-bottom: 1px solid #dcdee2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}

.el-main-component {
  padding: 8px;
  background: #f8f8f9;
  box-shadow: inset 0px 2px 2px #dcdee2;
}
</style>
