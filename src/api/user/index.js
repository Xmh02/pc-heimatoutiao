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
