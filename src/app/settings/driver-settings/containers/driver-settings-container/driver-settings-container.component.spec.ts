import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSettingsContainerComponent } from './driver-settings-container.component';

describe('DriverSettingsContainerComponent', () => {
  let component: DriverSettingsContainerComponent;
  let fixture: ComponentFixture<DriverSettingsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverSettingsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSettingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
