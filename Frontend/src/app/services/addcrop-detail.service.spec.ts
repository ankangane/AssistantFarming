import { TestBed } from '@angular/core/testing';

import { AddcropDetailService } from './addcrop-detail.service';

describe('AddcropDetailService', () => {
  let service: AddcropDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcropDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
