import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CargaLibrosService } from '../carga-libros.service';
import { MuestraLibroService } from '../muestra-libro.service';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';
import { OrdenaLibrosPipe } from '../ordena-libros.pipe';
import { DatosLibroComponent } from '../datos-libro/datos-libro.component';

@Component({
  selector: 'app-contenedor-libros',
  templateUrl: './contenedor-libros.component.html',
  styleUrls: ['./contenedor-libros.component.css'],
	providers: [CargaLibrosService, MuestraLibroService]
})
export class ContenedorLibrosComponent implements OnInit {
libros:any;
portadas:string[];
muestraDatos:boolean;
  constructor(private carga_libros: CargaLibrosService, private muestra_libro: MuestraLibroService) { 
  	this.libros = [];
	this.portadas = ['../../img/libro1.jpg', '../../img/libro2.jpg', '../../img/libro3.jpg', '../../img/libro4.jpg', '../../img/libro5.jpg'];
	this.muestraDatos = false;
  }

	detalleLibro(libro){
		if(!this.muestraDatos){
			this.muestraDatos = true;
		}
		this.muestra_libro.guardaLibro(this.libros[libro]);
	}
	
  ngOnInit() {
	  this.carga_libros.pideLibros();
	  this.carga_libros.devuelveLibros().subscribe(libros => {this.libros = libros});
  }

}
