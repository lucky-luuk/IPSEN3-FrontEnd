import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRowComponent } from './ticket-row.component';
import {MockHttpService} from "../../../http/mockHttp.service";
import {HttpService} from "../../../http/http.service";
import {AppModule} from "../../../app.module";

describe('TicketRowComponent', () => {
  let component: TicketRowComponent;
  let fixture: ComponentFixture<TicketRowComponent>;

  beforeEach( () => {
    let mockhttp = new MockHttpService();
     TestBed.configureTestingModule({
      declarations: [ TicketRowComponent ],
      providers: [
        {provide: HttpService, useValue: mockhttp}
      ],
       imports: [AppModule],

     })
    .compileComponents();
    fixture = TestBed.createComponent(TicketRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
