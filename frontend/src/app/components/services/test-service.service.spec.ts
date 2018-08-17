import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test-service.service';

describe('TestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));
});
