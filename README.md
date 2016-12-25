# mit-baidu-map
基于angular2的百度地图组件，该组件主要实现百度地图的异步加载，有关配置部分，大家还是跟着百度地图官方api文档来操作。

最近在构建大型SPA应用，mit只是一个代号而已


# 使用方式

先申请百度地图开发者账号，并获取ak

## 1. import
‘‘’
 import MitBaiduMapModule form './MitBaiduMapModule';
 @NgModule({
  declarations: [],
  imports: [
    MitBaiduMapModule
  ]
})
export class BusinessModule { };
‘‘’

## 2.use in components
‘’‘
 <app-mit-baidu-map [ak]="'你的ak值:string'" [config]=“这里就是你要在地图上渲染的配置啦，具体看官方api文档:objcet” [geolocation]=“是否开启所在城市定位:boolean”></app-mit-baidu-map>
’‘’


# 测试环境
angular-cli: 1.0.0-beta.21
node: 7.2.1
os: darwin x64


