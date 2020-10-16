import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/back-end/user/login',
    method: 'post',
    data
  })
}

export function getInfo(userid) {
  return request({
    url: '/back-end/user/info',
    method: 'get',
    params: { userid }
  })
}

export function logout() {
  return request({
    url: '/back-end/user/logout',
    method: 'get'
  })
}
