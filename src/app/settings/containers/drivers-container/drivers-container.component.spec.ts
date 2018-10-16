import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversContainerComponent } from './drivers-container.component';

describe('DriversContainerComponent', () => {
  let component: DriversContainerComponent;
  let fixture: ComponentFixture<DriversContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
