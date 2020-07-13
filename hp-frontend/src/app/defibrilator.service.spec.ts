import { TestBed } from '@angular/core/testing';

import { DefibrilatorService } from './defibrilator.service';

describe('DefibrilatorService', () => {
  let service: DefibrilatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefibrilatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
