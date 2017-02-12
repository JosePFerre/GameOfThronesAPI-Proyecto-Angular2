import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class CargaPjsService {
private listaPjs:Subject<any> = new Subject <any>();
  constructor(private ajax: Http) { }
	
	pidePjs(pag){
	let p = pag.toString();	this.ajax.get('http://www.anapioficeandfire.com/api/characters?page='+p+'&pageSize=3').map(respuesta => respuesta.json()).subscribe(personaje => { this.anadirPj(personaje)});
		}
	
	
	anadirPj(personaje){
		this.listaPjs.next(personaje);
	}
	
	devuelvePjs(){
		return this.listaPjs.asObservable();
	}	
}
