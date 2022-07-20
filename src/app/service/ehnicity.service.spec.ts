import { TestBed } from '@angular/core/testing';

import { EhnicityService } from './ehnicity.service';

describe('EhnicityService', () => {
  let service: EhnicityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EhnicityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
