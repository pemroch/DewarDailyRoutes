import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerSettingsContainerComponent } from './trailer-settings-container.component';

describe('TrailerSettingsContainerComponent', () => {
  let component: TrailerSettingsContainerComponent;
  let fixture: ComponentFixture<TrailerSettingsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerSettingsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerSettingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
