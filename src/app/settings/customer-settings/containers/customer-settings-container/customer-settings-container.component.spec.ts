import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSettingsContainerComponent } from './customer-settings-container.component';

describe('CustomerSettingsContainerComponent', () => {
  let component: CustomerSettingsContainerComponent;
  let fixture: ComponentFixture<CustomerSettingsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSettingsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSettingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
