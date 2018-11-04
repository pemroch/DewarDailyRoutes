import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSettingsDialogComponent } from './driver-settings-dialog.component';

describe('DriverSettingsDialogComponent', () => {
  let component: DriverSettingsDialogComponent;
  let fixture: ComponentFixture<DriverSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
