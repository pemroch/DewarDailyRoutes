import { TestBed, inject } from '@angular/core/testing';

import { RoutesMenuBtnService } from './routes-menu-btn.service';

describe('RoutesMenuBtnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesMenuBtnService]
    });
  });

  it('should be created', inject([RoutesMenuBtnService], (service: RoutesMenuBtnService) => {
    expect(service).toBeTruthy();
  }));
});
