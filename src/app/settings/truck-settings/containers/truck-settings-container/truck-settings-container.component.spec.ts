import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckSettingsContainerComponent } from './truck-settings-container.component';

describe('TruckSettingsContainerComponent', () => {
  let component: TruckSettingsContainerComponent;
  let fixture: ComponentFixture<TruckSettingsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckSettingsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckSettingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
