import Mock from 'mockjs'
import { login, getUserInfo, getMenuList } from './auth'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
})

Mock.mock(/login/, login)

Mock.mock(/getUserInfo/, getUserInfo)

Mock.mock(/getMenuList/, getMenuList)

export default Mock
