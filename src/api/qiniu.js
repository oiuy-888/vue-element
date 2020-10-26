import request from '@/utils/request'

// add by ls
export function gethost() {
  return request({
    url: '/back-end/host/findhost',
    method: 'get'
  })
}

export function addhost(data) {
  return request({
    url: '/back-end/host/addhost',
    method: 'post',
    data
  })
}

export function delhost(id) {
  return request({
    url: '/back-end/host/deletehost',
    method: 'get',
    params: { id }
  })
}

export function updatehost(data) {
  return request({
    url: '/back-end/host/updatehost',
    method: 'post',
    data
  })
}

export function selehost(id) {
  return request({
    url: '/back-end/host/findHost',
    method: 'get',
    params: { id }
  })
}

export function addlsmock(data) {
  return request({
    url: '/back-end/lsmock/addlsmock',
    method: 'post',
    data
  })
}

export function getlsmock() {
  return request({
    url: '/back-end/lsmock/findlsmock',
    method: 'get'
  })
}

export function selelsmock(id) {
  return request({
    url: '/back-end/lsmock/selelsmock',
    method: 'get',
    params: { id }
  })
}

export function updatelsmock(data) {
  return request({
    url: '/back-end/lsmock/updatelsmock',
    method: 'post',
    data
  })
}

export function dellsmock(id) {
  return request({
    url: '/back-end/lsmock/deletelsmock',
    method: 'get',
    params: { id }
  })
}

export function getconsul() {
  return request({
    url: '/back-end/consul/findconsul',
    method: 'get'
  })
}

export function addconsul(data) {
  return request({
    url: '/back-end/consul/addconsul',
    method: 'post',
    data
  })
}

export function delconsul(id) {
  return request({
    url: '/back-end/consul/deleteconsul',
    method: 'get',
    params: { id }
  })
}
