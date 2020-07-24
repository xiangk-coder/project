export const login = () => {
  return {
    code: 200,
    msg: '登录成功',
    data: {
      token: '3c130ea5d8d2d3daca7f6808cdf0f148'
    }
  }
}

export const getUserInfo = () => {
  return {
    code: 200,
    msg: '操作成功',
    data: {
      user: {
        name: 'admin',
        nickname: '管理员'
      },
      layout: 'mixing'
    }
  }
}

export const getMenuList = () => {
  return {
    code: 200,
    msg: '操作成功',
    data: [{
      path: '/main',
      name: 'main',
      title: '首页',
      order: 0
    }]
  }
}
