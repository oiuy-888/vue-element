import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserId = 'UserId'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserId() {
  return Cookies.get(UserId)
}

export function setUserId(userid) {
  return Cookies.set(UserId, userid)
}

export function removeUserId() {
  return Cookies.remove(UserId)
}
