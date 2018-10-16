import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTableContainerComponent } from './settings-table-container.component';

describe('SettingsTableContainerComponent', () => {
  let component: SettingsTableContainerComponent;
  let fixture: ComponentFixture<SettingsTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
