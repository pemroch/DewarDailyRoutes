import { TestBed, inject } from '@angular/core/testing';

import { TrailerSettingsDialogService } from './trailer-settings-dialog.service';

describe('TrailerSettingsDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrailerSettingsDialogService]
    });
  });

  it('should be created', inject([TrailerSettingsDialogService], (service: TrailerSettingsDialogService) => {
    expect(service).toBeTruthy();
  }));
});
