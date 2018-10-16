import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordDialogFormComponent } from './reset-password-dialog-form.component';

describe('ResetPasswordDialogFormComponent', () => {
  let component: ResetPasswordDialogFormComponent;
  let fixture: ComponentFixture<ResetPasswordDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
