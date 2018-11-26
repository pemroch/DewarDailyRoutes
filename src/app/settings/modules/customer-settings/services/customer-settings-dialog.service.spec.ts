import { TestBed, inject } from '@angular/core/testing';

import { CustomerSettingsDialogService } from './customer-settings-dialog.service';

describe('CustomerSettingsDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerSettingsDialogService]
    });
  });

  it('should be created', inject([CustomerSettingsDialogService], (service: CustomerSettingsDialogService) => {
    expect(service).toBeTruthy();
  }));
});
