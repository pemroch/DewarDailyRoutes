import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSettingsDialogComponent } from './location-settings-dialog.component';

describe('LocationSettingsDialogComponent', () => {
  let component: LocationSettingsDialogComponent;
  let fixture: ComponentFixture<LocationSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
