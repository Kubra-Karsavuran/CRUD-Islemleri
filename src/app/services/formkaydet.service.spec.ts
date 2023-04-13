import { TestBed } from '@angular/core/testing';

import { FormkaydetService } from './formkaydet.service';

describe('FormkaydetService', () => {
  let service: FormkaydetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormkaydetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
