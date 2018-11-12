import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesDialogLoadingComponent } from './routes-dialog-loading.component';

describe('RoutesDialogLoadingComponent', () => {
  let component: RoutesDialogLoadingComponent;
  let fixture: ComponentFixture<RoutesDialogLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesDialogLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesDialogLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
