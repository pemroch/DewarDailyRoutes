import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNavItemComponent } from './layout-nav-item.component';

describe('LayoutNavItemComponent', () => {
  let component: LayoutNavItemComponent;
  let fixture: ComponentFixture<LayoutNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
