import { TestBed } from '@angular/core/testing';

import { OrganisationService } from './organisation.service';
import {MockHttpService} from "../../../mockHttp.service";
import {AppModule} from "../../../app.module";

describe('OrganisationService', () => {
  let service: OrganisationService;

  beforeEach(() => {
    service = new OrganisationService(new MockHttpService());
    TestBed.configureTestingModule({      imports: [AppModule],
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
