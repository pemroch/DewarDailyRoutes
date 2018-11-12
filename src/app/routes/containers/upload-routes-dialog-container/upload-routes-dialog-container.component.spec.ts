import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRoutesDialogContainerComponent } from './upload-routes-dialog-container.component';

describe('UploadRoutesDialogContainerComponent', () => {
  let component: UploadRoutesDialogContainerComponent;
  let fixture: ComponentFixture<UploadRoutesDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadRoutesDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRoutesDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
