// index.js
// 获取应用实例
const app = getApp();
// 2
//const img1=require("./images/李白.jpg")

Page({
  data: {
    motto: 'Hello World shihongzhi',

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    background: [{
        url: './images/李白.jpg'
      },
      {
        url: './images/李白皮肤.jpg'
      },
      {
        url: './images/瑶妹妹.jpg'
      },
      {
        url: './images/紫霞仙子.jpg'
      },
      {
        url: './images/镜.jpg'
      }
    ],
    menuList: ['行家精选', '品牌中心', '我的清单', '我的订单', '咨询客服', '劳保', '办公', '工具', '清洁', '更多设置'],
    goodsList: [{
        url: '',
        name: '羽毛球'
      },
      {
        url: '',
        name: '羽毛球'
      }, {
        url: '',
        name: '羽毛球'
      }, {
        url: '',
        name: '羽毛球'
      },
      {
        url: '',
        name: '羽毛球'
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    snaptoedge: 'true'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickHandle() {
    this.setData({
      motto: 'hahahahaha'
    })
  },
  onLoad() { 
   
    wx.request({
      url: '/smt-meeting/meeting-blacklist/list',
      success (res) {
        console.log(res.data)
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
   
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})