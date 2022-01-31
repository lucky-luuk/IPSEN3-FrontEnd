import { TestBed } from '@angular/core/testing';

import { BulkUploadParseService } from './bulk-upload-parse.service';
import {AppModule} from "../../app.module";
import {EditModComponent} from "../edit-mod/edit-mod.component";
import {UserService} from "../usersHelper/user.service";
import {HttpService} from "../../http/http.service";
import {MockHttpService} from "../../http/mockHttp.service";
import {RouterTestingModule} from "@angular/router/testing";
import {OrganisationModel} from "../../afkoteek/search/abbreviation-list/organisation.model";
import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";

describe('BulkUploadParseService', () => {
  let service: BulkUploadParseService;
  let mockHttp : MockHttpService;

  beforeEach(() => {
    mockHttp = new MockHttpService();
    TestBed.configureTestingModule({
      imports: [AppModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ EditModComponent ],
      providers: [
        UserService,
        {provide: HttpService, useValue: mockHttp}
      ]
    });
    service = TestBed.inject(BulkUploadParseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("#addOrgIfNotExists should add organisation", () => {
    let result : OrganisationModel[] = [];
    let org = new OrganisationModel();
    org.name = "foo";
    service.addOrgIfNotExists(result, org.id, org.name);
    expect(result[0].name).toEqual(org.name);
  });

  it ("#parseCSV should correctly parse csv", async () => {
    let csv = "name,description,org_name,org_id";
    let data = await service.parseCSV(csv);
    expect(data.abbr[0].name).toEqual("name");
  });

  it("#parseJsonWithPDirectLayout should correctly parse json", async () => {
    let json = '{"results": [{\n' +
      '      "id": "aa8c88a6-cd42-4ad8-bd66-f236d09ba3e8",\n' +
      '      "abbreviation": "foo",\n' +
      '      "definitions": [\n' +
      '        {\n' +
      '          "id": "af90b432-dfb0-4b39-a8b9-3bf1531d7daf",\n' +
      '          "url": "https://www.ubrijk.nl/service/advocaten-en-adviseurs-arbeidsrecht",\n' +
      '          "fullText": "Advocaten en adviseurs arbeidsrecht",\n' +
      '          "organizations": [\n' +
      '            {\n' +
      '              "id": "440fabb6-f475-11e8-8eb2-f2801f1b9fd1",\n' +
      '              "name": "Uitvoeringsorganisatie Bedrijfsvoering Rijk"\n' +
      '            }\n' +
      '          ]\n' +
      '        }\n' +
      '      ]\n' +
      '    }]}';
    let data = await service.parseJsonWithPDirectLayout(json);
    expect(data.abbr[0].name).toEqual("foo");
  });

  it("#parseJson should correctly parse single json object", async () => {
    let json = '[{"naam": "abc"}]';
    let data = await service.parseJson(AbbreviationModel, json, [{abbreviationProperty: "name", jsonProperty: "naam", jsonData: undefined}]);
    expect(data[0].name).toEqual("abc");
  });

  it("#parseJson should correctly parse nested json objects", async () => {
    let json = '[{"naam": "abc", "org": [{"naam": "org_name"}]}]';
    let config = [
      {abbreviationProperty: "name", jsonProperty: "naam", jsonData: undefined},
      {abbreviationProperty: "organisations", jsonProperty: "org", jsonData: [
          {abbreviationProperty: "name", jsonProperty: "naam", jsonData: undefined}
        ]}
    ];
    let data = await service.parseJson(AbbreviationModel, json, config);
    expect(data[0].organisations[0].name).toEqual("org_name");
  });

  it("#getFileExtension should return correct extension", () => {
    let filename = "file.sql";
    let extension = service.getFileExtension(filename);
    expect(extension).toEqual(".sql");
  });

});
