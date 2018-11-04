import { TestBed, inject } from '@angular/core/testing';

import { UserSettingsDialogService } from './user-settings-dialog.service';

describe('UserSettingsDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSettingsDialogService]
    });
  });

  it('should be created', inject([UserSettingsDialogService], (service: UserSettingsDialogService) => {
    expect(service).toBeTruthy();
  }));
});
