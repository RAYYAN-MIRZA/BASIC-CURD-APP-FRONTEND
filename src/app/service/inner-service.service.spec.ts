import { TestBed } from '@angular/core/testing';

import { InnerServiceService } from './inner-service.service';

describe('InnerServiceService', () => {
  let service: InnerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
