/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CargaPjsService } from './carga-pjs.service';

describe('CargaPjsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargaPjsService]
    });
  });

  it('should ...', inject([CargaPjsService], (service: CargaPjsService) => {
    expect(service).toBeTruthy();
  }));
});
