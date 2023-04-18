import { TestBed } from '@angular/core/testing';

import { KayitSilmeService } from './kayit-silme.service';

describe('KayitSilmeService', () => {
  let service: KayitSilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KayitSilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
