import { Component, OnInit, OnChanges, SimpleChange, Input, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { MitBaiduMapLoaderService } from './services/mit-baidu-map.loader.service';

@Component({
  selector: 'app-mit-baidu-map',
  templateUrl: './mit-baidu-map.component.html',
  styleUrls: ['./mit-baidu-map.component.scss'],
  providers: [MitBaiduMapLoaderService]
})
export class MitBaiduMapComponent implements OnInit {
  @Input() ak: string;
  @Input() geolocation: boolean;
  @Input() config: Object;

  constructor(private el: ElementRef, private loader: MitBaiduMapLoaderService) {

  }

  ngOnInit() {
    this.loader.load(this.ak).then((res) => {
      console.log('百度地图异步加载成功');
      this.Init();
    }).catch((err) => {
      console.log(err);
    });
  }


  // 初始化
  Init() {
    let BMap = (<any>window)['BMap'];
    let map = new BMap.Map(this.el.nativeElement);
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 13); // 初始位置
    map.enableScrollWheelZoom(); // 启用滚动放大缩小
    map.enableDoubleClickZoom(); // 启用双击放大
    this.ipCity(map);
 
  }




  // 所在城市定位 
  ipCity(map) {
    function myFun(result) {
      let cityName = result.name;
      map.setCenter(cityName);
    }
    let myCity = new BMap.LocalCity();
    myCity.get(myFun);
  };



}
