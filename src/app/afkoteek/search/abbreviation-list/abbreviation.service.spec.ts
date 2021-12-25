import { TestBed } from '@angular/core/testing';

import { AbbreviationService } from './abbreviation.service';
import {MockHttpService} from "../../../mockHttp.service";
import {OrganisationService} from "../dropdown/organisation.service";
import {AppModule} from "../../../app.module";

describe('AbbreviationService', () => {
  let service: AbbreviationService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [AppModule],
    });
    service = new AbbreviationService(new MockHttpService());

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
