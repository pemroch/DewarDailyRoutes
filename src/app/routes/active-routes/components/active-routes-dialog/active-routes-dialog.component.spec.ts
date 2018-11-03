import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRoutesDialogComponent } from './active-routes-dialog.component';

describe('ActiveRoutesDialogComponent', () => {
  let component: ActiveRoutesDialogComponent;
  let fixture: ComponentFixture<ActiveRoutesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveRoutesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRoutesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
