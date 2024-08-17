import { TestBed } from '@angular/core/testing';

import { SipdashboardService } from './sipdashboard.service';

describe('SipdashboardService', () => {
  let service: SipdashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SipdashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
