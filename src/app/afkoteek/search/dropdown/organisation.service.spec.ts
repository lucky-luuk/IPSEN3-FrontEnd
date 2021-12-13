import { TestBed } from '@angular/core/testing';

import { OrganisationService } from './organisation.service';
import {MockHttpService} from "../../../mockHttp.service";

describe('OrganisationService', () => {
  let service: OrganisationService;

  beforeEach(() => {
    service = new OrganisationService(new MockHttpService());
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
