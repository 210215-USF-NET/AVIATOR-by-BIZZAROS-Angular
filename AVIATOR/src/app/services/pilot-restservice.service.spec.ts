import { TestBed } from '@angular/core/testing';

import { PilotRESTServiceService } from './pilot-restservice.service';

describe('PilotRESTServiceService', () => {
  let service: PilotRESTServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotRESTServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
