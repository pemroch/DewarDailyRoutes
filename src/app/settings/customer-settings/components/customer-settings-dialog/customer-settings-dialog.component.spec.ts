import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSettingsDialogComponent } from './customer-settings-dialog.component';

describe('CustomerSettingsDialogComponent', () => {
  let component: CustomerSettingsDialogComponent;
  let fixture: ComponentFixture<CustomerSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
