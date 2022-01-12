import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModDropdownComponent } from './mod-dropdown.component';

describe('ModDropdownComponent', () => {
  let component: ModDropdownComponent;
  let fixture: ComponentFixture<ModDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
