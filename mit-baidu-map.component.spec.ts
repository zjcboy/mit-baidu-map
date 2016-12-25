/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MitBaiduMapComponent } from './mit-baidu-map.component';

describe('MitBaiduMapComponent', () => {
  let component: MitBaiduMapComponent;
  let fixture: ComponentFixture<MitBaiduMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitBaiduMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitBaiduMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
