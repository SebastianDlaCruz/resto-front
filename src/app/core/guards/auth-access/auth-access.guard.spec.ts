import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { authAccessGuard } from './auth-access.guard';

describe('authAccessGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
