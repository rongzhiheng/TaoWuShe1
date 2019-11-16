var WxAutoImage = require('../../js/wxAutoImageCal.js');
var app = getApp();

Page({
  data: {
    imgUrls: [
      '../../image/huawei.jpg',
      '../../image/phone.png',
      '../../image/android.png'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    iconArray: [
      {
        "iconUrl": '../../image/icon-qiandao.png',
        "iconText": '签到'
      },
      {
        "iconUrl": '../../image/icon-fujin.png',
        "iconText": '附近'
      },

      {
        "iconUrl": '../../image/icon-fuli.png',
        "iconText": '福利'
      },
      {
        "iconUrl": '../../image/icon-muma.png',
        "iconText": '玩乐'
      },



    ],
    itemArray: [
      {
        "itemUrl": '../../image/K20.png',
        "itemText": '红米K20'
      },
      {
        "itemUrl": '../../image/xiaomi8.png',
        "itemText": '小米8'
      },
      {
        "itemUrl": '../../image/lanya.png',
        "itemText": '华为B3青春版运动手环智能蓝牙耳机二合一'
      },
    ]
  },
  cusImageLoad: function (e) {
    var that = this;
    that.setData(WxAutoImage.wxAutoImageCal(e));
  }
})