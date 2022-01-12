import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPopupComponent } from './confirm-popup.component';
import {RouterTestingModule} from "@angular/router/testing";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AppModule} from "../../../app.module";

describe('ConfirmPopupComponent', () => {
  let component: ConfirmPopupComponent;
  let fixture: ComponentFixture<ConfirmPopupComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [
        ConfirmPopupComponent
      ],
      providers: [
        {provide: NgbActiveModal, useValue: NgbActiveModal}
      ],
      imports: [
        RouterTestingModule,
        AppModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
