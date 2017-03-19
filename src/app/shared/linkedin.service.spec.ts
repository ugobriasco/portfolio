/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LinkedinService } from './linkedin.service';

describe('LinkedinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkedinService]
    });
  });

  it('should ...', inject([LinkedinService], (service: LinkedinService) => {
    expect(service).toBeTruthy();
  }));
});
