import { TestBed, inject } from '@angular/core/testing';

import { SettingsTableService } from './settings-table.service';

describe('SettingsTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsTableService]
    });
  });

  it('should be created', inject([SettingsTableService], (service: SettingsTableService) => {
    expect(service).toBeTruthy();
  }));
});
