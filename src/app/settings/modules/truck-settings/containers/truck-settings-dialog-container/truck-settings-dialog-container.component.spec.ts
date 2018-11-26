import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckSettingsDialogContainerComponent } from './truck-settings-dialog-container.component';

describe('TruckSettingsDialogContainerComponent', () => {
  let component: TruckSettingsDialogContainerComponent;
  let fixture: ComponentFixture<TruckSettingsDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckSettingsDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckSettingsDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
