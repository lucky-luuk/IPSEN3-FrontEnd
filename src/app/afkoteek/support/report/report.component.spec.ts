import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './report.component';
import {SearchBarComponent} from "../../search/search-bar/search-bar.component";
import {DropdownComponent} from "../../../features/dropdown/dropdown.component";
import {AbbreviationListComponent} from "../../search/abbreviation-list/abbreviation-list.component";
import {FormBuilder} from "@angular/forms";
import {HttpService} from "../../../http/http.service";
import {MockHttpService} from "../../../http/mockHttp.service";
import {AppModule} from "../../../app.module";

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ ReportComponent, SearchBarComponent, DropdownComponent, AbbreviationListComponent ],
       providers: [
         FormBuilder,
         {provide: HttpService, useClass: MockHttpService}
       ],
       imports: [AppModule],
     }).compileComponents();
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("#setLastSearchData should set lastSearchData", () => {
    component.lastSearchedData = "";
    let data = "foo";
    component.setLastSearchData(data);
    expect(component.lastSearchedData).toEqual(data);
  });
});
