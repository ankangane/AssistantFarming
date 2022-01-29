import { TestBed } from '@angular/core/testing';

import { GetadvertiesmentDetailService } from './getadvertiesment-detail.service';

describe('GetadvertiesmentDetailService', () => {
  let service: GetadvertiesmentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetadvertiesmentDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
