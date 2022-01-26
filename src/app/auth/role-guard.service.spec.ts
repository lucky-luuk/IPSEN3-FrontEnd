import {MockHttpService} from "../mockHttp.service";
import {TestBed} from "@angular/core/testing";
import {AppModule} from "../app.module";
import {RouterTestingModule} from "@angular/router/testing";
import {RoleGuardService} from "./role-guard.service";
import {LoginService} from "./login.service";
import {HttpService} from "../http.service";

describe('RoleGuardService', () => {
  let mockHttp: MockHttpService;
  let service: RoleGuardService

  beforeEach(() => {
    mockHttp = new MockHttpService();
    TestBed.configureTestingModule({
      imports: [AppModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ ],
      providers: [
        LoginService,
        {provide: HttpService, useValue: mockHttp}
      ]
    });
    service = TestBed.inject(RoleGuardService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
})


