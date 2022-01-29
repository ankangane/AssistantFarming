import { TestBed } from '@angular/core/testing';

import { UpdateaddstatusDetailService } from './updateaddstatus-detail.service';

describe('UpdateaddstatusDetailService', () => {
  let service: UpdateaddstatusDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateaddstatusDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
