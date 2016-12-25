import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mit-baidu-map-timeline',
  templateUrl: './mit-baidu-map-timeline.component.html',
  styleUrls: ['./mit-baidu-map-timeline.component.scss']
})
export class MitBaiduMapTimelineComponent implements OnInit {

  test: number = 0;

  interval: any;

  constructor() { }
  ngOnInit() {

  }

  // 播放
  play() {
    this.interval = setInterval(() => {
      if (this.test > 99) {
        this.test = 0;
        clearInterval(this.interval);
      } else {
        this.test += 1;
      }
    }, 1000);
  }

  // 暂停
  pause() {
      clearInterval(this.interval); 
  }

  // 停止
  stop() {
    this.test = 0;
    clearInterval(this.interval);
  }

  changeZoom(e) {
    console.log(e)
    if (this.test > 100) {
      this.interval.unref();
    }
  }

}
