import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesLayoutContainerComponent } from './routes-layout-container.component';

describe('RoutesLayoutContainerComponent', () => {
  let component: RoutesLayoutContainerComponent;
  let fixture: ComponentFixture<RoutesLayoutContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesLayoutContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
