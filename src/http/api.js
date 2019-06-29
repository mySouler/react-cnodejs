import request from './request'

// 获取首页帖子列表
export const getTopics = data => {
  return request({
    url: '/topics',
    method: 'get',
    params: data
  })
}

// 获取帖子详情
export const getTopic_id = id => {
  return request({
    url: `/topic/${id}`,
    method: 'get'
  })
}

// 获取用户详情
export const getUser_info = loginname => {
  return request({
    url: `/user/${loginname}`,
    method: 'get'
  })
}