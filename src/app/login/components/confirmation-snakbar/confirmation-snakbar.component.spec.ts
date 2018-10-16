import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSnakbarComponent } from './confirmation-snakbar.component';

describe('ConfirmationSnakbarComponent', () => {
  let component: ConfirmationSnakbarComponent;
  let fixture: ComponentFixture<ConfirmationSnakbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationSnakbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationSnakbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
