import { TestBed } from '@angular/core/testing';

import { AddcomplaintDetailService } from './addcomplaint-detail.service';

describe('AddcomplaintDetailService', () => {
  let service: AddcomplaintDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcomplaintDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
