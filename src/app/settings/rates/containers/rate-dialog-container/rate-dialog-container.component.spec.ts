import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDialogContainerComponent } from './rate-dialog-container.component';

describe('RateDialogContainerComponent', () => {
  let component: RateDialogContainerComponent;
  let fixture: ComponentFixture<RateDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
