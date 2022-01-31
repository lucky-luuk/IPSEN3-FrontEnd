import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadComponent } from './bulk-upload.component';
import {AppModule} from "../../app.module";
import {RouterTestingModule} from "@angular/router/testing";
import {EditModComponent} from "../edit-mod/edit-mod.component";
import {UserService} from "../usersHelper/user.service";
import {HttpService} from "../../http/http.service";
import {MockHttpService} from "../../http/mockHttp.service";

describe('BulkUploadComponent', () => {
  let component: BulkUploadComponent;
  let fixture: ComponentFixture<BulkUploadComponent>;
  let mockHttp : MockHttpService;

  beforeEach( () => {
    mockHttp = new MockHttpService();
    TestBed.configureTestingModule({
      imports: [AppModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ EditModComponent ],
      providers: [
        {provide: HttpService, useValue: mockHttp}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
