import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorComponent } from './moderator.component';
import {AppModule} from "../app.module";

describe('ModeratorComponent', () => {
  let component: ModeratorComponent;
  let fixture: ComponentFixture<ModeratorComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ ModeratorComponent ],
       imports: [AppModule]
     })
    .compileComponents();
    fixture = TestBed.createComponent(ModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
