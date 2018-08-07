import { TestBed, inject } from '@angular/core/testing';

import { PitchServiceService } from './pitch-service.service';

describe('PitchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PitchServiceService]
    });
  });

  it('should be created', inject([PitchServiceService], (service: PitchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
