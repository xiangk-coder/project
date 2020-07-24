import axios from '../libs/request'

export const login = (data) => {
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

export const getUserInfo = () => {
  return axios.request({
    url: 'getUserInfo',
    method: 'get'
  })
}

export const getMenuList = () => {
  return axios.request({
    url: 'getMenuList',
    method: 'get'
  })
}

export const getForm = (url) => {
  return axios.request({
    url: url,
    method: 'get'
  })
}

export const getOption = (url) => {
  return axios.request({
    url: url,
    method: 'get'
  })
}

export const pushForm = (url, data) => {
  return axios.request({
    url: url,
    method: 'post',
    data
  })
}
