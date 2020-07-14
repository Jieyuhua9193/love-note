Page({
  data: {
    animation: {},
    ani: null,
  },
  onLoad() {
    this.ani = wx.createAnimation({
      duration: 400,
      timingFunction: "ease-in-out",
    });
  },
  start() {
    this.ani.scale(2, 2).rotate(34);
    this.ani.translate(200, 100);
    this.ani.step();
    this.setData({
      animation: this.ani.export(),
    });
  },
});
