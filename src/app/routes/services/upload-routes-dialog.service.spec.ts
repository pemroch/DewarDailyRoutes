import { TestBed, inject } from '@angular/core/testing';

import { UploadRoutesDialogService } from './upload-routes-dialog.service';

describe('UploadRoutesDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadRoutesDialogService]
    });
  });

  it('should be created', inject([UploadRoutesDialogService], (service: UploadRoutesDialogService) => {
    expect(service).toBeTruthy();
  }));
});
