import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSelectionComponent } from './settings-selection.component';

describe('SettingsSelectionComponent', () => {
  let component: SettingsSelectionComponent;
  let fixture: ComponentFixture<SettingsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
