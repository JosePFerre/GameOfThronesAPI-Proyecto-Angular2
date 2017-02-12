/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CargaLibrosService } from './carga-libros.service';

describe('CargaLibrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargaLibrosService]
    });
  });

  it('should ...', inject([CargaLibrosService], (service: CargaLibrosService) => {
    expect(service).toBeTruthy();
  }));
});
