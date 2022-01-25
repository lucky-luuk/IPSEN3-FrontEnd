import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadLoadingPopupComponent } from './bulk-upload-loading-popup.component';

describe('BulkUploadLoadingPopupComponent', () => {
  let component: BulkUploadLoadingPopupComponent;
  let fixture: ComponentFixture<BulkUploadLoadingPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkUploadLoadingPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkUploadLoadingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
