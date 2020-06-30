"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var lottie = require("lottie-miniprogram");
Page({
    data: {},
    onLoad: function () {
    },
    onReady: function () {
        wx.createSelectorQuery().select('#canvas').node(function (res) {
            var canvas = res.node;
            lottie.setup(canvas);
        }).exec();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFDO0FBQ2pDLDJDQUE2QztBQUU3QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFDTDtJQUNELE1BQU07SUFDTixDQUFDO0lBQ0QsT0FBTztRQUNMLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2pELElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUE7WUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNYLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcbmltcG9ydCAqIGFzIGxvdHRpZSBmcm9tICdsb3R0aWUtbWluaXByb2dyYW0nO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICB9LFxuICBvbkxvYWQoKSB7XG4gIH0sXG4gIG9uUmVhZHkoKSB7XG4gICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdCgnI2NhbnZhcycpLm5vZGUocmVzID0+IHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHJlcy5ub2RlXG4gICAgICBsb3R0aWUuc2V0dXAoY2FudmFzKVxuICAgIH0pLmV4ZWMoKVxuICB9XG59KVxuIl19