import { TestBed } from '@angular/core/testing';

import { BulkUploadParseService } from './bulk-upload-parse.service';

describe('BulkUploadParseService', () => {
  let service: BulkUploadParseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulkUploadParseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
