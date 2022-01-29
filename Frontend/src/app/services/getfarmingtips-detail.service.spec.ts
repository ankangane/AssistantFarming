import { TestBed } from '@angular/core/testing';

import { GetfarmingtipsDetailService } from './getfarmingtips-detail.service';

describe('GetfarmingtipsDetailService', () => {
  let service: GetfarmingtipsDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetfarmingtipsDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
