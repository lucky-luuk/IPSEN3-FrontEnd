import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {MockHttpService} from "../../http/mockHttp.service";

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService(new MockHttpService());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
