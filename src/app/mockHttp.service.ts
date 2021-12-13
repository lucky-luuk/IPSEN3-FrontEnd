import {HttpService} from "./http.service";
import {AbbreviationModel} from "./afkoteek/search/abbreviation-list/abbreviation.model";
import {OrganisationModel} from "./afkoteek/search/abbreviation-list/organisation.model";
import {HttpClient, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class MockHttpService extends HttpService {
  private mockData = {
    "/abbreviation": [new AbbreviationModel()],
    "/organisation": [new OrganisationModel()]
  }

  constructor() {
    super(new HttpClient(new class extends HttpHandler {
      handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        return new Observable<HttpEvent<any>>();
      }
    }));

  }

  public override get<T>(endpoint : string, args : Map<string, string>, implementation : (data : T) => void) {
    // ignoring types to not have to implement giant if else chain
    // @ts-ignore
    implementation(this.mockData[endpoint]);
  }
}