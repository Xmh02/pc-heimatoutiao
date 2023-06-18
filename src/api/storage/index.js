//封装本地存储方法
export const getStorage = (key) => {
  return localStorage.getItem(key)
}
export const setStorage = (key, val) => {
  return localStorage.setItem(key, val)
}
export const delStorage = (key) => {
  return localStorage.removeItem(key)
}
