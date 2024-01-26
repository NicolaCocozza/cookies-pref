import { TestBed } from '@angular/core/testing';

import { NgxNcCookiesPrefService } from './ngx-nc-cookies-pref.service';

describe('NgxNcCookiesPrefService', () => {
  let service: NgxNcCookiesPrefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNcCookiesPrefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
