import { TestBed, inject } from '@angular/core/testing';

import { ActiveRoutesDialogService } from './active-routes-dialog.service';

describe('ActiveRoutesDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveRoutesDialogService]
    });
  });

  it('should be created', inject([ActiveRoutesDialogService], (service: ActiveRoutesDialogService) => {
    expect(service).toBeTruthy();
  }));
});
