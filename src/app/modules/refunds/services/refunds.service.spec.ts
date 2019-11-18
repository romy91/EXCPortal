import { TestBed } from '@angular/core/testing';

import { RefundsService } from './refunds.service';

describe('RefundsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefundsService = TestBed.get(RefundsService);
    expect(service).toBeTruthy();
  });
});
