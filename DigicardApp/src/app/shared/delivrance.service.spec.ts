import { TestBed } from '@angular/core/testing';

import { DelivranceService } from './delivrance.service';

describe('DelivranceService', () => {
  let service: DelivranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelivranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
