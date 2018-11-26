import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckSettingsDialogComponent } from './truck-settings-dialog.component';

describe('TruckSettingsDialogComponent', () => {
  let component: TruckSettingsDialogComponent;
  let fixture: ComponentFixture<TruckSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
