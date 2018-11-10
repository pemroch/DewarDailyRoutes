import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesContainerComponent } from './routes-container.component';

describe('RoutesContainerComponent', () => {
  let component: RoutesContainerComponent;
  let fixture: ComponentFixture<RoutesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
