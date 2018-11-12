import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesMenuBtnComponent } from './routes-menu-btn.component';

describe('RoutesMenuBtnComponent', () => {
  let component: RoutesMenuBtnComponent;
  let fixture: ComponentFixture<RoutesMenuBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesMenuBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesMenuBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
