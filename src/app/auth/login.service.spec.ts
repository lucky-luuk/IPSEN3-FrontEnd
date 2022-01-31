import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import {MockHttpService} from "../http/mockHttp.service";
import {AccountModel} from "../account/account.model";

describe('LoginService', () => {
  let service: LoginService;
  let mockHttp : MockHttpService;

  beforeEach(() => {
    mockHttp = new MockHttpService();
    service = new LoginService(mockHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("#createAccount should return data", () => {
    let data = {id: "", firstName: "", lastName: "", email: "test@test.com", roles: [{name: "name"}]};
    mockHttp.setData("/register", data);
    let account = new AccountModel();
    account.password = "password123";
    let isEqual = false;
    service.createAccount(account, (incomingData) => {
      expect(incomingData.email).toEqual(data.email);
    }, () => {
      // auto fail
      expect(true).toEqual(false);
    });
  });

  it("#copyAccount should copyAccount", () => {
    let a1 = new AccountModel();
    a1.id = "testId";
    let a2 = service.copyAccount(a1);
    expect(a1 == a2).toEqual(false);
    expect(a1.id).toEqual(a2.id);
  });

  // it("#login should return data", () => {
  //  let data =  {id: "", firstName: "", lastName: "", email: "abc@d.efg", roles: [{name: "test"}]};
  //  mockHttp.setData("/authenticate", data);
  //  let account = new AccountModel();
  //  service.login("", "", (incomingData) => {
  //    expect(incomingData.email).toEqual(data.email);
  //  }, () => {
  //    // auto fail
  //    expect(true).toEqual(false);
  //  });
  // });

  it("#getPasswordHash should return hash", () => {
    // 5f4dcc3b5aa765d61d8327deb882cf99 === password
    let password = "password";
    let hash = "5f4dcc3b5aa765d61d8327deb882cf99";
    let hashedPassword = service.getPasswordHash(password);
    expect(hashedPassword).toEqual(hash);
  });

});
