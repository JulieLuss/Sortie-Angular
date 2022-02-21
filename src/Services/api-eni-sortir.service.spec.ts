import { TestBed } from '@angular/core/testing';

import { ApiEniSortirService } from './api-eni-sortir.service';

describe('ApiEniSortirService', () => {
  let service: ApiEniSortirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEniSortirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
