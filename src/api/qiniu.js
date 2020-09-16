import request from '@/utils/request'

export function getToken() {
  return request({
    url: '/qiniu/upload/token', // 假地址 自行替换
    method: 'get'
  })
}
// add by ls
export function gethost() {
  return request({
    url: '/api/host/findhost',
    method: 'get'
  })
}

export function addhost(data) {
  return request({
    url: '/api/host/updatehost',
    method: 'post',
    data
  })
}

export function addlsmock(data) {
    return request({
      url: '/api/lsmock/addlsmock',
      method: 'post',
      data
    })
}

export function getlsmock() {
  return request({
    url: '/api/lsmock/findlsmock',
    method: 'get'
  })
}

export function dellsmock(id) {
  return request({
    url: '/api/lsmock/deletelsmock',
    method: 'get',
    params: { id }
  })
}
