import { TestBed } from '@angular/core/testing';

import { SuperetteService } from './superette.service';

describe('SuperetteService', () => {
  let service: SuperetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
