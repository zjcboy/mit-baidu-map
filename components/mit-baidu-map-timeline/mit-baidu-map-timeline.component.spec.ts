/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MitBaiduMapTimelineComponent } from './mit-baidu-map-timeline.component';

describe('MitBaiduMapTimelineComponent', () => {
  let component: MitBaiduMapTimelineComponent;
  let fixture: ComponentFixture<MitBaiduMapTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitBaiduMapTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitBaiduMapTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
