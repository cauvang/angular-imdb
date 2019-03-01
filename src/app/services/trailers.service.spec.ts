import { TestBed } from '@angular/core/testing';

import { TrailersService } from './trailers.service';

describe('TrailersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrailersService = TestBed.get(TrailersService);
    expect(service).toBeTruthy();
  });
});
