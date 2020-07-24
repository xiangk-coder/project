import config from './config'

// 设置浏览器标题
const title = config.title || '管理平台'

export const setPageTitle = (pageTitle) => {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

// token获取相关
export const setSessionStorage = (key, value) => sessionStorage.setItem(config.project + '-' + key, value)

export const getSessionStorage = (key) => sessionStorage.getItem(config.project + '-' + key)

export const removeSessionStorage = (key) => sessionStorage.removeItem(config.project + '-' + key)
