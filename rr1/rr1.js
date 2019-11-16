var app = getApp();
Page({
  data: {
    goods: '',
    num: 1,
    data_sjk: '',
    pid:'',
    carArray: [

      {
        
        carTitle: '电饭煲',
        carPrice: '¥1000.00',
        carNum: 1,
        carShow: true
      },




    ]
  },
  onLoad: function(){
    this.setData({
      pid : app.globalData.data[0]['pid'],
      data_sjk: app.globalData.data
    })
    console.log(this.data.pid)
    console.log(this.data.data_sjk)
  },
  toPay: function () {
    wx.navigateTo({
      url: '../pay/pay'
    })
  },
  find: function () {
    var self = this
   
  },
  carReduce: function () {
    var that = this

    that.setData({
      num: that.data.num - 1
    })
  },
  carAdd: function () {
    var that = this

    that.setData({
      num: that.data.num + 1
    })
  }

 



})