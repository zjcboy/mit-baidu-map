// auth: by Junchao Zheng
// date:  2016.12.17


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MitBaiduMapLoaderService } from './services/mit-baidu-map.loader.service';
import { MitBaiduMapComponent } from './mit-baidu-map.component';
import { MitBaiduMapTimelineComponent } from './components/mit-baidu-map-timeline/mit-baidu-map-timeline.component';

@NgModule({
    declarations: [
        MitBaiduMapComponent,
        MitBaiduMapTimelineComponent
    ],
    imports: [
        FormsModule,
        NgbModule,
        CommonModule
    ],
    exports: [MitBaiduMapComponent, MitBaiduMapTimelineComponent],
    providers: [MitBaiduMapLoaderService]
})
export class MitBaiduMapModule { }
