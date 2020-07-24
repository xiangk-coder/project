import HttpRequest from './axios'

const baseUrl = process.env.VUE_APP_SERVER === 'mock' ? '' : ''
const axios = new HttpRequest(baseUrl)
export default axios
