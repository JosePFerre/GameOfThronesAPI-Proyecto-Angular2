/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MuestraLibroService } from './muestra-libro.service';

describe('MuestraLibroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuestraLibroService]
    });
  });

  it('should ...', inject([MuestraLibroService], (service: MuestraLibroService) => {
    expect(service).toBeTruthy();
  }));
});
