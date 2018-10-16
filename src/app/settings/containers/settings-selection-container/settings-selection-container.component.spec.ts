import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSelectionContainerComponent } from './settings-selection-container.component';

describe('SettingsSelectionContainerComponent', () => {
  let component: SettingsSelectionContainerComponent;
  let fixture: ComponentFixture<SettingsSelectionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSelectionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSelectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
