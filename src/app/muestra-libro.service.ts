import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class MuestraLibroService {
libro:any;

  constructor() { 
  }
	
	guardaLibro(libro){
		return this.libro = libro;
	}

}
