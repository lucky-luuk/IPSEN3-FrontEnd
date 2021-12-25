import { TestBed } from '@angular/core/testing';

import { TicketService } from './ticket.service';
import {MockHttpService} from "../mockHttp.service";

describe('TicketService', () => {
  let service: TicketService;

  beforeEach(() => {
    service = new TicketService(new MockHttpService());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
