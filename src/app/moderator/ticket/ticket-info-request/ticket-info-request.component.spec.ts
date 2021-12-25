import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketInfoRequestComponent } from './info-request.component';

describe('InfoRequestComponent', () => {
  let component: TicketInfoRequestComponent;
  let fixture: ComponentFixture<TicketInfoRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketInfoRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketInfoRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
