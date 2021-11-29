import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TokenStorageService } from './token-storage.service';

describe('TokenStorageService', () => {
  let service: TokenStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [TokenStorageService]
    });
    service = TestBed.inject(TokenStorageService);
  });

  it('should be created', () => {
    const service: TokenStorageService = TestBed.get(TokenStorageService);
    expect(service).toBeTruthy();
  });
});
