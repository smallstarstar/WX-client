import getDataList from '../../services/getFoodCommand.js'

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    listImg: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    if (app.globalData.userInfo !== null){
      if (app.globalData.userInfo.userName === "") {
        console.log(app.globalData.userInfo)
        app.globalData.userInfo.userName = app.globalData.userInfo.nickName
      }
      console.log(app.globalData.userInfo, '====用户信息====')
    }
    var that = this;
    if (app.globalData.userInfo === null) {
      wx.hideLoading();
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      wx.showLoading({
        title: '加载中',
      });

      setTimeout(() => {
        wx.hideLoading();
        this.setData({
          userName: app.globalData.userInfo
        })
      }, 3000)
      const data = await getDataList.getfoodList();
      that.setData({
        listImg: data.data
      })
    }
  },
  handlePicter(e) {
    const dataImg = this.data.listImg[e.detail.data];
    // const querys = JSON.stringify(dataImg);
   
    wx.navigateTo({
      url: '../details/details?dataImg=' + dataImg._id ,
    })
  }

})