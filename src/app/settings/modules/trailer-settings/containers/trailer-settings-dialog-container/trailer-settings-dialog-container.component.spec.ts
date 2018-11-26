import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerSettingsDialogContainerComponent } from './trailer-settings-dialog-container.component';

describe('TrailerSettingsDialogContainerComponent', () => {
  let component: TrailerSettingsDialogContainerComponent;
  let fixture: ComponentFixture<TrailerSettingsDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerSettingsDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerSettingsDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
