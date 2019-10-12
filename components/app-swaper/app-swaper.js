// components/app-swaper/app-swaper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listImg: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleChoose(event) {
      const index = event.currentTarget.dataset.index;
      this.triggerEvent('getPictInfo', { data: index })
      
    },
  }
});