import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAnimationComponent } from './loading-animation.component';
import {AppModule} from "../../../../app.module";

describe('LoadingAnimationComponent', () => {
  let component: LoadingAnimationComponent;
  let fixture: ComponentFixture<LoadingAnimationComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ LoadingAnimationComponent ],
       imports: [AppModule]
     })
    .compileComponents();
    fixture = TestBed.createComponent(LoadingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
