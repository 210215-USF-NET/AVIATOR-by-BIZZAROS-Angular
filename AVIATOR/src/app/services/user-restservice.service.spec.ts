import { TestBed } from '@angular/core/testing';

import { UserRESTServiceService } from './user-restservice.service';

describe('UserRESTServiceService', () => {
  let service: UserRESTServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRESTServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
