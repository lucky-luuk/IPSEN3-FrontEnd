import {TestBed, tick} from '@angular/core/testing';

import { TicketService } from './ticket.service';
import {MockHttpService} from "../mockHttp.service";
import {TicketModel} from "./ticket/ticket.model";
import {AbbreviationModel} from "../afkoteek/search/abbreviation-list/abbreviation.model";
import {OrganisationModel} from "../afkoteek/search/abbreviation-list/organisation.model";

describe('TicketService', () => {
  let service: TicketService;
  let mockHttp : MockHttpService;

  beforeEach(() => {
    mockHttp = new MockHttpService();
    service = new TicketService(mockHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("#isSameTicket should return true on same tickets", () => {
    let [first, second] = service.createSameTicket(123, "foo", "baz");
    expect(service.isSameTicket(first, second)).toEqual(true);
  });
  it("#isSameTicket should return false on different organisations", () => {
    let [first, second] = service.createSameTicket(123, "foo", "baz");
    if (first.temporaryAbbreviation !== null) {
      if (first.temporaryAbbreviation?.organisations !== undefined) {
        first.temporaryAbbreviation.organisations[0].name = "abcdefg";
      }
    }
    expect(service.isSameTicket(first, second)).toEqual(false);
  });
  it("#isSameTicket should return false on different abbreviations", () => {
    let [first, second] = service.createSameTicket(123, "foo", "baz");
    if (first.temporaryAbbreviation !== null) {
      first.temporaryAbbreviation.name = "etc";
    }
    expect(service.isSameTicket(first, second)).toEqual(false);
  });

  it("#areTemporaryAbbreviationsSame should return true when both are null", () => {
    expect(service.areTemporaryAbbreviationsSame(null, null)).toEqual(true);
  });
  it("#areTemporaryAbbreviationsSame should return false when only one is null", () => {
    expect(service.areTemporaryAbbreviationsSame(null, new AbbreviationModel())).toEqual(false);
  });
  it("#areTemporaryAbbreviationsSame should return true when both are the same", () => {
    let abbr1 = new AbbreviationModel();
    abbr1.description = "dit is een beschrijving";
    let abbr2 = new AbbreviationModel();
    abbr2.description = abbr1.description;
    expect(service.areTemporaryAbbreviationsSame(abbr1, abbr2)).toEqual(true);
  });
  it("#areTemporaryAbbreviationsSame should return false when both are not the same", () => {
    let abbr1 = new AbbreviationModel();
    abbr1.description = "dit is een beschrijving";
    let abbr2 = new AbbreviationModel();
    abbr2.description = "en dit is een andere beschrijving";
    expect(service.areTemporaryAbbreviationsSame(abbr1, abbr2)).toEqual(false);
  });

  it("#areOrganisationsSame should return true when both are undefined", () => {
    expect(service.areOrganisationsSame(undefined, undefined)).toEqual(true);
  });
  it("#areOrganisationsSame should return false when only one is undefined", () => {
    expect(service.areOrganisationsSame(undefined, [new OrganisationModel()])).toEqual(false);
  });
  it("#areOrganisationsSame should return true when both organisations are the same", () => {
    let org1 = new OrganisationModel();
    org1.name = "foo";
    let org2 = new OrganisationModel();
    org2.name = org1.name;
    expect(service.areOrganisationsSame([org1], [org2])).toEqual(true);
  });
  it("#areOrganisationsSame should return false when organisation names are not the same", () => {
    let org1 = new OrganisationModel();
    org1.name = "foo";
    let org2 = new OrganisationModel();
    org2.name = "baz";
    expect(service.areOrganisationsSame([org1], [org2])).toEqual(false);
  });
  it("#areOrganisationsSame should return false when organisations are different length", () => {
    let org1 = new OrganisationModel();
    org1.id = "foo";
    let org2 = new OrganisationModel();
    org2.id = "baz";
    expect(service.areOrganisationsSame([org1, org2], [org2])).toEqual(false);
  });

  it("#hasTicketChangedOnServer calls onChanged when ticket on server is different", () => {
    let ticket = new TicketModel();
    ticket.id = 123;
    mockHttp.setData("/ticket", ticket);
    service.hasTicketChangedOnServer(ticket, (other) => {
      // auto fail if tickets are not the same
      expect(false).toEqual(true);
    }, () => {
      expect(true).toEqual(true);
    });
  });

});

