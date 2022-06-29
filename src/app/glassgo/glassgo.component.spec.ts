/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GlassgoComponent } from './glassgo.component';

describe('GlassgoComponent', () => {
  let component: GlassgoComponent;
  let fixture: ComponentFixture<GlassgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
