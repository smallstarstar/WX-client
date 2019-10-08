var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    password: ''
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
  submit: function() {
    const userObj = {
      userName: this.data.userName,
      userPassword: this.data.password,
      userId: app.globalData.userInfo.signature,
      avatarUrl: app.globalData.userInfo.userInfo.avatarUrl
    }
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
  }

})