var adds = {};
var app = getApp();
var picdata;
var img_path = '';
Page({
  data: {
   
    items: [
      {
        name: "二手交易",
        value: "全新商品"
      },
      {
        name: "线下辅导",
        value: "二手交易"
      }
    ],
    tutoring: [
      {
        name: "书籍",
        value: "书籍"
      },
      {
        name: "旧手机",
        value: "旧手机"
      },
      {
        name: "二手车",
        value: "二手车"
      },
      {
        name: "其他",
        value: "其他"
      }
    ],
    trading: [
      {
        name: "生活用品",
        value: "生活用品"
      },
      {
        name: "家电电器",
        value: "家电电器"
      },
      {
        name: "其他",
        value: "其他"
      }
    ],
    
    tag: 0,   //标记商品类型
    img_arr: [],    //存放本地图片路径的数组
    img_server: [], // 存放服务器图片路径的数组
    goodsName: '',    //商品名称
    describe: '',   //商品描述
    price: '',   //商品价格
    
    goodsClass: '',  //商品类型
    goodsType: '',   //商品分类
    tran: '',
    
  },
  onLoad: function (options) {   //该页面打开时的响应函数，初始化
    console.log('function:onLoad')
  },
  submit: function (e) {    //点击提交按钮时的响应函数
    var that = this
    var good = new Object();
    good.goodsId = '';
    good.goodsName = this.data.goodsName;
    good.describe = this.data.describe;
    good.price = this.data.price;
   
    good.goodsType = this.data.goodsType;
    good.goodsClass = this.data.goodsClass;
    
    good.img = this.data.img_arr;
    good.img = new Array();
    
    good.typeId = '';
    good.sold = false;
    good.userId = app.globalData.user.userId; //可以赋值
    console.log(good);
    if (good.goodsClass === "二手交易") {
      app.globalData.goodsTran.push(good);
      
    } else {
      app.globalData.goodsOffline.push(good);
     
    }
   
    good.img = this.data.img_server
    console.log("good.img = " + good.img)

    wx.request({ 
      url: 'http://localhost:8080/GOTO/add',
      data: {
        goodsName: good.goodsName,
        describe:good.describe,
        nature: good.goodsClass,
        price: good.price,
        type: good.goodsType,
        pid: app.globalData.img_path
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报  
      },
      success(res) {
        console.log(res.data)

        that.setData({
          // that.good.goodsId : res.data.good_id
        })
      }
    })
    wx.showModal({
      title: '发布成功！',
      content: '您可以选择跳转至',
      cancelText: "首页",
      confirmText: "商品",
      confirmColor: "#000000",
      success: function (res) {
        if (res.cancel) {
          wx.reLaunch({   
            url: '../index/index',
          })
        } else
          if (res.confirm) {
            wx.reLaunch({
              url: '../faxian/faxian',
            })

          }
      }

    })
  },

  inputName: function (e) {  //取出商品名称的信息
    this.setData({
      goodsName: e.detail.value
    })
  },


  inputDescribe: function (e) {  //取出商品描述细节的信息
    this.setData({
      describe: e.detail.value
    })
  },

  radioChangeGoodsClass: function (e) {   //根据商品类型的选项，做出调整的响应函数
    this.setData({
      goodsClass: e.detail.value
    })
    if (this.data.goodsClass === "二手交易") {
      this.setData({
        tag: 1
      })
    }
    else if (this.data.goodsClass === "线下辅导") {
      this.setData({
        tag: 2
      })
    }
  },

  inputMoney: function (e) {    //取出价格信息
    this.setData({
      price: e.detail.value
    })
  },

 


  radioChangeType: function (e) {   //取出商品分类信息
    this.setData({
      goodsType: e.detail.value
    })
  },

  upimg: function () {    //点击“加号”图片时的响应函数
    var that = this;
    if (this.data.img_arr.length < 3) { //最多上传三张图片
     
      wx.chooseImage({
        //sizeType: ['original', 'compressed'],
        success: function (res) {
          var tempFilePaths = res.tempFilePaths
          that.setData({
            img_arr: that.data.img_arr.concat(res.tempFilePaths)    //将上传的图片的路径存储在img_arr数组中
            
          })
          that.savepic(tempFilePaths)
        }
      })
    } else {
      wx.showToast({
        title: '最多上传三张图片',
        icon: 'loading',
        duration: 3000
      });
    }
  },
  savepic: function (tempFilePaths){
    wx.uploadFile({
      url: 'http://localhost:8080/GOTO/upload',
      
      filePath: tempFilePaths[0],
      name: 'file',
      method: 'post',
      formData: {
      },
      success: function (res) {
        console.log(res.data)
        app.globalData.img_path = res.data
        //do somethingh
      }
    })
  }

})