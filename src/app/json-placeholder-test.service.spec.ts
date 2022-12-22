import { TestBed } from '@angular/core/testing';

import { JsonPlaceholderTestService } from './json-placeholder-test.service';

describe('JsonPlaceholderTestService', () => {
  let service: JsonPlaceholderTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPlaceholderTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
