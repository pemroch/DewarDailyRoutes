import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSettingsContainerComponent } from './rate-settings-container.component';

describe('RateSettingsContainerComponent', () => {
  let component: RateSettingsContainerComponent;
  let fixture: ComponentFixture<RateSettingsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateSettingsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSettingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
