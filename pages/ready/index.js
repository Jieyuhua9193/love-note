Page({
  data: {
    animation: {},
  },
  start() {
    console.log("start ani");
    const Animation = wx.createAnimation({
      duration: 400,
      timingFunction: "ease-in-out",
    });
    Animation.scale(2, 2).rotate(34);
    Animation.translate(200, 100);
    Animation.step();
    this.setData({
      animation: Animation.export(),
    });
  },
});
