import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSettingsContainerComponent } from './location-settings-container.component';

describe('LocationSettingsContainerComponent', () => {
  let component: LocationSettingsContainerComponent;
  let fixture: ComponentFixture<LocationSettingsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSettingsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSettingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
