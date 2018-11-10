import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesDialogContainerComponent } from './routes-dialog-container.component';

describe('RoutesDialogContainerComponent', () => {
  let component: RoutesDialogContainerComponent;
  let fixture: ComponentFixture<RoutesDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
