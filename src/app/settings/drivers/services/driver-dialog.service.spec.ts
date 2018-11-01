import { TestBed, inject } from '@angular/core/testing';

import { DriverDialogService } from './driver-dialog.service';

describe('DriverDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverDialogService]
    });
  });

  it('should be created', inject([DriverDialogService], (service: DriverDialogService) => {
    expect(service).toBeTruthy();
  }));
});
