import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpItemSettingsContainerComponent } from './pick-up-item-settings-container.component';

describe('PickUpItemSettingsContainerComponent', () => {
  let component: PickUpItemSettingsContainerComponent;
  let fixture: ComponentFixture<PickUpItemSettingsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpItemSettingsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpItemSettingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
