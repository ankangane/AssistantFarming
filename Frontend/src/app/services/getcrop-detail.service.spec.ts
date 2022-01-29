import { TestBed } from '@angular/core/testing';

import { GetcropDetailService } from './getcrop-detail.service';

describe('GetcropDetailService', () => {
  let service: GetcropDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcropDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
