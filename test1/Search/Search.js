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
    var formData = e.detail.value.id; //获取表单所有name=id的值  
    wx.request({
      url: 'http://localhost:8080/GOTO/searchBy?goodsName=' + formData,
      data: formData,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log("data",res.data)
        app.globalData.data = res.data
        console.log("data", res.data[0].pid)
        that.setData({
          re: res.data,
          del: res.data[0].pid,
        })
        wx.showToast({
          title: '搜索成功',
          icon: 'success',
          duration: 2000
        })
      }
      
    })
    
   



  },

  


})
