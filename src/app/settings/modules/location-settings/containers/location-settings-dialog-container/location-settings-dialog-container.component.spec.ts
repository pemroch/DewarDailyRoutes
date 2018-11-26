import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSettingsDialogContainerComponent } from './location-settings-dialog-container.component';

describe('LocationSettingsDialogContainerComponent', () => {
  let component: LocationSettingsDialogContainerComponent;
  let fixture: ComponentFixture<LocationSettingsDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSettingsDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSettingsDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
