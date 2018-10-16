import { TestBed, inject } from '@angular/core/testing';

import { NgFireService } from './ng-fire.service';

describe('NgFireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFireService]
    });
  });

  it('should be created', inject([NgFireService], (service: NgFireService) => {
    expect(service).toBeTruthy();
  }));
});
