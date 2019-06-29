    
import axios from 'axios'
import { message } from 'antd'

const error = () => {
  message.error('数据加载失败！')
}

const request = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000 
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  err => {
    Promise.reject(err)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    error()
    return Promise.reject(err)
  }
)

export default request