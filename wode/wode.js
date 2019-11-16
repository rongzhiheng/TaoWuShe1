var app = getApp();

Page({
  	data: {
  		userInfo: {},
      
      
  	},
    


  	onLoad: function() {
  		var that = this;
  		wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      });
  	},
    exit:function(){
      wx.reLaunch({
        url: '../../pages/First/First',
      })
    }
})