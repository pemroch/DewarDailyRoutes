import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSettingsDialogContainerComponent } from './customer-settings-dialog-container.component';

describe('CustomerSettingsDialogContainerComponent', () => {
  let component: CustomerSettingsDialogContainerComponent;
  let fixture: ComponentFixture<CustomerSettingsDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSettingsDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSettingsDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
