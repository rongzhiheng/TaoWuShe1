const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result: '',
    state: ''
  },
  formSubmit: function (e) {
    var that = this;

    wx.request({
      url: 'http://localhost:8080/GOTO/SearchAll',

      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        app.globalData.data = res.data

        that.setData({
          re: res.data,

        })
        wx.showToast({
          title: '查看成功',
          icon: 'success',
          duration: 2000
        })
      }

    })





  },




})
