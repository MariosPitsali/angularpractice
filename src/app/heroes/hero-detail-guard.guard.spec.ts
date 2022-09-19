import { TestBed } from '@angular/core/testing';

import { HeroDetailGuard } from './hero-detail.guard';

describe('HeroDetailGuardGuard', () => {
  let guard: HeroDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeroDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
