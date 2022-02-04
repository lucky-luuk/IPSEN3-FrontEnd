import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import {TicketRowComponent} from "./ticket-row/ticket-row.component";
import {AppModule} from "../../../app.module";

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ OverviewComponent, TicketRowComponent ],
       imports: [AppModule],
     })
    .compileComponents();
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  })
});
