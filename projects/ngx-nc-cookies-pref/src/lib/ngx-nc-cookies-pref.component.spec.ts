import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNcCookiesPrefComponent } from './ngx-nc-cookies-pref.component';

describe('NgxNcCookiesPrefComponent', () => {
  let component: NgxNcCookiesPrefComponent;
  let fixture: ComponentFixture<NgxNcCookiesPrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNcCookiesPrefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxNcCookiesPrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
