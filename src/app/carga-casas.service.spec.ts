/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CargaCasasService } from './carga-casas.service';

describe('CargaCasasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargaCasasService]
    });
  });

  it('should ...', inject([CargaCasasService], (service: CargaCasasService) => {
    expect(service).toBeTruthy();
  }));
});
