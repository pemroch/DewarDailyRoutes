import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSettingsDialogComponent } from './rate-settings-dialog.component';

describe('RateSettingsDialogComponent', () => {
  let component: RateSettingsDialogComponent;
  let fixture: ComponentFixture<RateSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
