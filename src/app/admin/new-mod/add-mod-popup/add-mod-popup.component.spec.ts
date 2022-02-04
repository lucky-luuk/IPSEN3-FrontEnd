import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModPopupComponent } from './add-mod-popup.component';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AppModule} from "../../../app.module";

describe('AddModPopupComponent', () => {
  let component: AddModPopupComponent;
  let fixture: ComponentFixture<AddModPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ AddModPopupComponent ],
      providers: [
        NgbActiveModal
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddModPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
