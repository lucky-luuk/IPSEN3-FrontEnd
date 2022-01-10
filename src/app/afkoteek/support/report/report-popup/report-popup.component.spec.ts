import { ReportPopupComponent } from './report-popup.component';
import {ConfirmPopupComponent} from "../../confirm-popup/confirm-popup.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {RouterTestingModule} from "@angular/router/testing";
import {AppModule} from "../../../../app.module";

describe('ReportPopupComponent', () => {
  let component: ReportPopupComponent;
  let fixture: ComponentFixture<ReportPopupComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [
        ReportPopupComponent
      ],
      providers: [
        {provide: NgbActiveModal, useValue: NgbActiveModal}
      ],
      imports: [
        RouterTestingModule,
        AppModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ReportPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("#onSetDescription sets description", () => {
    expect(component.description).toEqual("");
    let data = "foo";
    component.onSetDescription({target: {value: data}});
    expect(component.description).toEqual(data);
  });
});
