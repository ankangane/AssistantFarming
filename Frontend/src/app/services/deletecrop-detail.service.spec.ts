import { TestBed } from '@angular/core/testing';

import { DeletecropDetailService } from './deletecrop-detail.service';

describe('DeletecropDetailService', () => {
  let service: DeletecropDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletecropDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
