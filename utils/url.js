
const urlBase = {
  // 用户登陆
  login:'/api/v1/userInfo',
  
  // 获取推荐的资源
  getResourceData: '/api/v1/getFoodlist',

  // 根据商品的id获取商品的详细信息
  getFoodInfoById: '/api/v1/getfooddetailById?id=',

  // 保存商品的评价信息
  saveGoodsEvenstionInfo:'/api/v1/saveEvenation',

  // 根据商品的id获取该商品的评价
  getGoodsEventInfoById: '/api/v1/getEventafoodById?id='
}

export default urlBase;