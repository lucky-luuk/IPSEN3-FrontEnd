import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketInfoRequestComponent } from './ticket-info-request.component';
import {AppModule} from "../../../../app.module";

describe('InfoRequestComponent', () => {
  let component: TicketInfoRequestComponent;
  let fixture: ComponentFixture<TicketInfoRequestComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ TicketInfoRequestComponent ],
       imports: [AppModule]
     })
    .compileComponents();
    fixture = TestBed.createComponent(TicketInfoRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
