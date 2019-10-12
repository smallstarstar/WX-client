var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfoImg:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ userInfoImg: app.globalData.userInfo.avatarUrl })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  chooseImg(){
    const that = this;
    wx.chooseImage({
      success: function(res) {
        console.log(res);
        that.setData({
          userInfoImg: res.tempFilePaths[0]
        })
      },
    })
  }
})