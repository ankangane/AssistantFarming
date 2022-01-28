import { TestBed } from '@angular/core/testing';

import { ChangepasswordDetailService } from './changepassword-detail.service';

describe('ChangepasswordDetailService', () => {
  let service: ChangepasswordDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangepasswordDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
