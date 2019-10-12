import loginServices from '../../services/loginServices.js';

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    password: '',
    nowTime: new Date().toLocaleString(),
  },
  onLoad() {
    const that = this;
    setInterval(() => {
      that.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000);
  },
  handleUseName: function(e) {
    const userName = e.detail.value;
    this.setData({
      userName: userName
    })
  },
  handPassword: function(e) {
    const password = e.detail.value;
    this.setData({
      password: password
    })
  },
  async submit() {
    const userObj = {
      userName: this.data.userName,
      userPassword: this.data.password,
      userId: app.globalData.userInfo.signature,
      avatarUrl: app.globalData.userInfo.userInfo.avatarUrl
    }
    const result = await loginServices.userLogin(userObj.userName, userObj.userPassword);
    if (result.data.code === 0) {
      // 跳转路由
      app.globalData.userInfo = userObj;
      wx.showToast({
        title: '登陆成功',
        icon: 'success', 
        duration: 1000
      });
      setTimeout(() => {
        wx.switchTab({
          url: '../components/content',
        });
      }, 1000)
    } else {
      wx.showModal({
        title: '请填写信息',
      })
    }
  }

})