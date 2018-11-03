import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSettingsDialogContainerComponent } from './driver-settings-dialog-container.component';

describe('DriverSettingsDialogContainerComponent', () => {
  let component: DriverSettingsDialogContainerComponent;
  let fixture: ComponentFixture<DriverSettingsDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverSettingsDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSettingsDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
