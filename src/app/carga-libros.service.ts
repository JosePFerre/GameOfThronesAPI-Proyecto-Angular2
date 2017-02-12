import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class CargaLibrosService {
private listaLibros:Subject<any> = new Subject <any>();
id_libros:string[];
lista:any;
  constructor(private ajax: Http) {
	  this.id_libros = ['1','2','3','5','8'];
	  this.lista = [];
  }
	
	pideLibros(){
		for (let i=0;i<this.id_libros.length;i++){	this.ajax.get('http://www.anapioficeandfire.com/api/books/'+ this.id_libros[i]).map(respuesta => respuesta.json()).subscribe(libro => { this.anadirLibro(libro)});
		}
	}
	
	anadirLibro(libro){
		this.lista.push(libro);
		this.listaLibros.next(this.lista);
	}
	
	devuelveLibros(){
		return this.listaLibros.asObservable();
	}
}
