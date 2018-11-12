import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesTableFilterComponent } from './routes-table-filter.component';

describe('RoutesTableFilterComponent', () => {
  let component: RoutesTableFilterComponent;
  let fixture: ComponentFixture<RoutesTableFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesTableFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
