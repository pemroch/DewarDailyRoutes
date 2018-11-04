import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsDialogContainerComponent } from './user-settings-dialog-container.component';

describe('UserSettingsDialogContainerComponent', () => {
  let component: UserSettingsDialogContainerComponent;
  let fixture: ComponentFixture<UserSettingsDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
