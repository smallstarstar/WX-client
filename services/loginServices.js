import urlBase from '../utils/url.js';
const http = 'http://localhost:8666';

const loginServices = {
  // 用户登陆（其他的方式登陆）
  userLogin(userName, userPassword) {
    const url = http + urlBase.login;
    return new Promise((res, rej) => {
      wx.request({
        url: url,
        method: 'post',
        data: {
          userName: userName,
          userPassword: userPassword
        },
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: res
      })
    })
  }
}

export default loginServices;