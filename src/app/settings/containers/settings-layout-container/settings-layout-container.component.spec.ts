import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLayoutContainerComponent } from './settings-layout-container.component';

describe('SettingsLayoutContainerComponent', () => {
  let component: SettingsLayoutContainerComponent;
  let fixture: ComponentFixture<SettingsLayoutContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsLayoutContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
