import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerSettingsDialogComponent } from './trailer-settings-dialog.component';

describe('TrailerSettingsDialogComponent', () => {
  let component: TrailerSettingsDialogComponent;
  let fixture: ComponentFixture<TrailerSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
