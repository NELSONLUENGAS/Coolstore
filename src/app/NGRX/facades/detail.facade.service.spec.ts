import { TestBed } from '@angular/core/testing';

import { DetailFacadeService } from './detail.facade.service';

describe('DetailFacadeService', () => {
  let service: DetailFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
