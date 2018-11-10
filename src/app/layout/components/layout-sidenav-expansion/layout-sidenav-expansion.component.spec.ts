import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSidenavExpansionComponent } from './layout-sidenav-expansion.component';

describe('LayoutSidenavExpansionComponent', () => {
  let component: LayoutSidenavExpansionComponent;
  let fixture: ComponentFixture<LayoutSidenavExpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSidenavExpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSidenavExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
