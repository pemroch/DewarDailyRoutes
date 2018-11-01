import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogContainerComponent } from './user-dialog-container.component';

describe('UserDialogContainerComponent', () => {
  let component: UserDialogContainerComponent;
  let fixture: ComponentFixture<UserDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
