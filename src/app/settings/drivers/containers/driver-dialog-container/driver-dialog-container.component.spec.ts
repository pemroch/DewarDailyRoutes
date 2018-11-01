import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDialogContainerComponent } from './driver-dialog-container.component';

describe('DriverDialogContainerComponent', () => {
  let component: DriverDialogContainerComponent;
  let fixture: ComponentFixture<DriverDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
