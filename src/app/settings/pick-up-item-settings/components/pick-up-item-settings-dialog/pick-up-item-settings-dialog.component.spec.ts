import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpItemSettingsDialogComponent } from './pick-up-item-settings-dialog.component';

describe('PickUpItemSettingsDialogComponent', () => {
  let component: PickUpItemSettingsDialogComponent;
  let fixture: ComponentFixture<PickUpItemSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpItemSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpItemSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
