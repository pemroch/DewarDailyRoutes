import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRoutesDialogContainerComponent } from './active-routes-dialog-container.component';

describe('ActiveRoutesDialogContainerComponent', () => {
  let component: ActiveRoutesDialogContainerComponent;
  let fixture: ComponentFixture<ActiveRoutesDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveRoutesDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRoutesDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
