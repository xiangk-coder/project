import store from '../store'
import { getUserInfo, getMenuList } from '../api'

export const checkPermission = (to) => {
  if (store.state.user) {
    if (store.state.menu) {
      return checkRouter(to)
    } else {
      return getMenu(to)
    }
  } else {
    return getUser(to)
  }
}

export const getUser = (to) => {
  return new Promise((resolve) => {
    getUserInfo().then(resp => {
      if (resp.status === 200 && resp.data && resp.data.code === 200) {
        store.commit('setUser', resp.data.data)
        if (store.state.menu) {
          checkRouter(to).then(router => {
            resolve(router)
          })
        } else {
          getMenu(to).then(menu => {
            resolve(menu)
          })
        }
      } else {
        resolve('/500')
      }
    }).catch(() => {
      resolve('/500')
    })
  })
}

export const getMenu = (to) => {
  return new Promise((resolve) => {
    getMenuList().then(resp => {
      if (resp.status === 200 && resp.data && resp.data.code === 200) {
        store.commit('setMenu', resp.data.data)
        checkRouter(to).then(router => {
          resolve(router)
        })
      } else {
        resolve('/500')
      }
    }).catch(() => {
      resolve('/500')
    })
  })
}

export const checkRouter = (to) => {
  return new Promise((resolve) => {
    const isExist = findRouter(store.state.menu, to)
    isExist ? resolve(null) : resolve('/404')
  })
}

export const findRouter = (data, to) => {
  let isExist = false
  data.forEach(item => {
    if (item.path === to.path) {
      isExist = true
    } else if (item.children && item.children.length > 0) {
      isExist = findRouter(item.children, to)
    }
  })
  return isExist
}
