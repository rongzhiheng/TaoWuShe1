var adds = {};
var app = getApp();
var picdata;
var img_path = '';
Page({
  data: {

    
    

  
 
    name: '',    //个人姓名
    sex: '',   //性别
    phone: '',   //电话
    email: '',   //电话
    address: '',   //电话
    
  
    

  },
  onLoad: function (options) {   //该页面打开时的响应函数，初始化
    console.log('function:onLoad')
  },
  submit: function (e) {    //点击提交按钮时的响应函数
    var that = this
    var good = new Object();
    
    good.name = this.data.name;
    good.sex = this.data.sex;
    good.phone = this.data.phone;
    good.email = this.data.email;
    good.address = this.data.address;

    
   
    
    

    wx.request({ // 上传除了图片以外的good信息
      url: 'http://localhost:8080/person/add',
      data: {

        name: good.name,
        sex: good.sex,
        phone: good.phone,
        email: good.email,
        
        address: good.address,
       

      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
        // 'content-type': 'multipart/form-data'  //这里注意POST请求content-type是小写，大写会报错  
      },
      success(res) {
        console.log(res.data)

        that.setData({
          // that.good.goodsId : res.data.good_id
        })
      }
    })

    wx.showModal({
      title: '提交成功！',
      content: '您可以选择',
      cancelText: "首页",
      confirmText: "支付",
      confirmColor: "#000000",
      success: function (res) {
        if (res.cancel) {
          wx.reLaunch({
            url: '../index/index',
          })
        } else
          if (res.confirm) {
            wx.reLaunch({
              url: '../pay2/pay2',
            })

          }
      }

    })
  },

  inputName: function (e) {  //取出个人名称的信息
    this.setData({
      name: e.detail.value
    })
  },


  inputSex: function (e) {  
    this.setData({
      sex: e.detail.value
    })
  },

 

  inputPhone: function (e) {    
    this.setData({
      phone: e.detail.value
    })
  },

  inputEmail: function (e) {  
    this.setData({
      email: e.detail.value
    })
  },

  inputAddress: function (e) {  
    this.setData({
      address: e.detail.value
    })
  },


  

 

})