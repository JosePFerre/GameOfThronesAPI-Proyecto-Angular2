import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class CargaCasasService {
private listaCasas:Subject<any> = new Subject <any>();
  constructor(private ajax: Http) { 
  }

	pideCasas(pag){
	let p = pag.toString();	this.ajax.get('http://www.anapioficeandfire.com/api/houses?page='+p+'&pageSize=2').map(respuesta => respuesta.json()).subscribe(casa => { this.anadirCasa(casa)});
		}
	
	
	anadirCasa(casa){
		this.listaCasas.next(casa);
	}
	
	devuelveCasas(){
		return this.listaCasas.asObservable();
	}	

}