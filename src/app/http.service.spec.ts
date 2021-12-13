import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import {MockHttpService} from "./mockHttp.service";

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new MockHttpService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("#getEndpointWithArguments should return correct result", () => {
    let endpoint = "/endpoint";
    let map = new Map<string, string>();
    expect(service.getEndpointWithArguments(endpoint, map)).toEqual(endpoint);
  });
});
