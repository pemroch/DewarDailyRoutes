import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTableFilterComponent } from './settings-table-filter.component';

describe('SettingsTableFilterComponent', () => {
  let component: SettingsTableFilterComponent;
  let fixture: ComponentFixture<SettingsTableFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTableFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
