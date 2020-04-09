import { TestBed } from '@angular/core/testing';

import { RepoSearchService } from './repo-search.service';

describe('RepoSearchService', () => {
  let service: RepoSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
