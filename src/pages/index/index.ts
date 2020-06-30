// index.ts
// 获取应用实例
const app = getApp<IAppOption>();
import * as lottie from 'lottie-miniprogram';

Page({
  data: {
  },
  onLoad() {
  },
  onReady() {
    wx.createSelectorQuery().select('#canvas').node(res => {
      const canvas = res.node
      lottie.setup(canvas)
    }).exec()
  }
})
