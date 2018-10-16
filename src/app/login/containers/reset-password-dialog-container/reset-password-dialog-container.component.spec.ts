import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordDialogContainerComponent } from './reset-password-dialog-container.component';

describe('ResetPasswordDialogContainerComponent', () => {
  let component: ResetPasswordDialogContainerComponent;
  let fixture: ComponentFixture<ResetPasswordDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
