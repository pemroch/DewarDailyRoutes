import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpItemSettingsDialogContainerComponent } from './pick-up-item-settings-dialog-container.component';

describe('PickUpItemSettingsDialogContainerComponent', () => {
  let component: PickUpItemSettingsDialogContainerComponent;
  let fixture: ComponentFixture<PickUpItemSettingsDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpItemSettingsDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpItemSettingsDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
