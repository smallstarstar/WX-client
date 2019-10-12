import urlBase from '../utils/url.js';
const http = 'http://localhost:8666';

const getDataList = {
  // 获取资源数据
  getfoodList(userName, userPassword) {
    const url = http + urlBase.getResourceData;
    return new Promise((res, rej) => {
      wx.request({
        url: url,
        method: 'get',
        success: res
      })
    })
  },

  // 根据商品的id查询商品的详细信息
  getFooddeDetailInfo(id) {
    const url = http + urlBase.getFoodInfoById + id;
    return new Promise((res, rej) => {
      wx.request({
        url: url,
        method: 'get',
        success: res,
        fail: rej
      })
    })
  },

  // 保存该商品的评价信息
  saveGoodsEvenationInfo(eventationInfo) {
    const url = http + urlBase.saveGoodsEvenstionInfo;
    return new Promise((res, rej) => {
      wx.request({
        url: url,
        method: 'post',
        data: {
          eventationInfo: eventationInfo
        },
        header: {
          "Content-Type": "application/json"
        },
        success: res,
        fail: rej
      })
    })
  },

  // 获取该商品的评价信息根据商品的id
  getEvenationInfoById(id) {
    const url = http + urlBase.getGoodsEventInfoById + id;
    return new Promise((res, rej) => {
      wx.request({
        url: url,
        method: 'get',
        success: res,
        fail: rej
      })
    })
  }
}

export default getDataList;