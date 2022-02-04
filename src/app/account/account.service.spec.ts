import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import {MockHttpService} from "../http/mockHttp.service";

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    service = new AccountService(new MockHttpService());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();

  });
});
