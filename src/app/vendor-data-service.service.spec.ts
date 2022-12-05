import { TestBed } from '@angular/core/testing';

import { VendorDataServiceService } from './vendor-data-service.service';

describe('VendorDataServiceService', () => {
  let service: VendorDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
