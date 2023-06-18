// 用户的相关接口
import request from '@/utils/request'
//登录
export const loginFun = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    data: {
      mobile,
      code,
    },
  })
}

//获取-用户资料
export const getUserData = () => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/profile',
  })
}
