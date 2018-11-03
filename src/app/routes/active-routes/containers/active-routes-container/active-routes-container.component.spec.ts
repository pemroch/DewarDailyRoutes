import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRoutesContainerComponent } from './active-routes-container.component';

describe('ActiveRoutesContainerComponent', () => {
  let component: ActiveRoutesContainerComponent;
  let fixture: ComponentFixture<ActiveRoutesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveRoutesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRoutesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
