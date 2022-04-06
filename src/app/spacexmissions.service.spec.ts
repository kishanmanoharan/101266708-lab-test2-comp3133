import { TestBed } from '@angular/core/testing';

import { SpacexmissionsService } from './spacexmissions.service';

describe('SpacexmissionsService', () => {
  let service: SpacexmissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexmissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
