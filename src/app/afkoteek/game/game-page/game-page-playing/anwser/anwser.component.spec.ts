import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnwserComponent } from './anwser.component';

describe('AnwserComponent', () => {
  let component: AnwserComponent;
  let fixture: ComponentFixture<AnwserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnwserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnwserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
