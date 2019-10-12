import getDataList from '../../services/getFoodCommand.js';
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodInfoMessage: {},
    eventationConent: '',
    foodId: '',
    evenaNum: '3',
    eventlist: [],
    conentText:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    var that = this;
    var data = (options.dataImg);
    console.log(data);
    that.setData({
      foodId: data
    })
    const result = await getDataList.getFooddeDetailInfo(data);
    that.setData({
      foodInfoMessage: result.data
    });

    await this.getEvenationlist();
  },
  handleValue(e) {
    console.log(e)
    this.setData({
      eventationConent: e.detail.value
    })
  },
  async submit() {
    const evenationInfo = {};
    evenationInfo.evenationFoodId = this.data.foodId;
    evenationInfo.time = new Date().toLocaleString();
    evenationInfo.evenationPeoId = app.globalData.userInfo.userId;
    evenationInfo.contentText = this.data.eventationConent;
    evenationInfo.evenaNum = this.data.evenaNum;
    evenationInfo.evenationPeo = app.globalData.userInfo.userName;
    console.log(evenationInfo, '=====提交的数据是==')
    const result = await getDataList.saveGoodsEvenationInfo(evenationInfo);
    console.log(result)
    if (result.data.state) {
      // 保存成功
      this.setData({
        eventationConent: null
      });
      // 刷新列表
      await this.getEvenationlist();
    }
  },
  // 获取评价信息
  async getEvenationlist() {
    const result = await getDataList.getEvenationInfoById(this.data.foodId);
    console.log(result.data);
    this.setData({
      eventlist: result.data
    })
  }
});