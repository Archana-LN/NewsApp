import { TestBed, inject } from '@angular/core/testing';

import { NewsAppService } from './news-app.service';
import { HttpClientModule } from '@angular/common/http';

describe('NewsAppServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsAppService], imports: [HttpClientModule]
    });
  });

  it('should be created', inject([NewsAppService], (service: NewsAppService) => {
    expect(service).toBeTruthy();
  }));
});
