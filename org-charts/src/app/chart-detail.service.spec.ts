import { TestBed, inject } from '@angular/core/testing';

import { ChartDetailService } from './chart-detail.service';

describe('ChartDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartDetailService]
    });
  });

  it('should be created', inject([ChartDetailService], (service: ChartDetailService) => {
    expect(service).toBeTruthy();
  }));
});
