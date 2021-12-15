import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketModel } from './ticket.model';

describe('TicketModel', () => {
  let component: TicketModel;
  let fixture: ComponentFixture<TicketModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
