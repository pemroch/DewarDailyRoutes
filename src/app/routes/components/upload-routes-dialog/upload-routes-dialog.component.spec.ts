import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRoutesDialogComponent } from './upload-routes-dialog.component';

describe('UploadRoutesDialogComponent', () => {
  let component: UploadRoutesDialogComponent;
  let fixture: ComponentFixture<UploadRoutesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadRoutesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRoutesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
