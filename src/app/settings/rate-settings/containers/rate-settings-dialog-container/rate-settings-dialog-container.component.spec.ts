import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSettingsDialogContainerComponent } from './rate-settings-dialog-container.component';

describe('RateSettingsDialogContainerComponent', () => {
  let component: RateSettingsDialogContainerComponent;
  let fixture: ComponentFixture<RateSettingsDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateSettingsDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSettingsDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
