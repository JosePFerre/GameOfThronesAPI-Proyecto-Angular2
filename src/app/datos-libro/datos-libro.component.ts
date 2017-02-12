import { Component, OnInit, Input } from '@angular/core';
import { MuestraLibroService } from '../muestra-libro.service';


@Component({
  selector: 'app-datos-libro',
  templateUrl: './datos-libro.component.html',
  styleUrls: ['./datos-libro.component.css']
})
export class DatosLibroComponent implements OnInit {
libro:any;
portadas:string[];
id:any;
name_ESP:string;
fecha:any;
  constructor(private muestra_libro: MuestraLibroService) { 
	  this.portadas = ['../../img/libro1.jpg', '../../img/libro2.jpg', '../../img/libro3.jpg', '../../img/libro4.jpg', '../../img/libro5.jpg'];
	 this.libro = this.muestra_libro.libro;
	this.id = this.asigna_id();
	this.name_ESP = this.asigna_nombre();
	this.fecha = this.libro.released.substring(0,10);
  }
	
	asigna_id(){
		if(this.libro.name == 'A Game of Thrones'){
			return 0;
		}else if(this.libro.name == 'A Clash of Kings'){
			return 1;
		}else if(this.libro.name == 'A Storm of Swords'){
			return 2;
		}else if(this.libro.name == 'A Feast for Crows'){
			return 3;
		}else if(this.libro.name == 'A Dance with Dragons'){
			return 4;
		}
	}	

	asigna_nombre(){
		if(this.id == 0){
			return 'Juego de Tronos';
		}else if(this.id == 1){
			return 'Choque de reyes';
		}else if(this.id == 2){
			return 'Tormenta de Espadas';
		}else if(this.id == 3){
			return 'Festin de Cuervos';
		}else if(this.id == 4){
			return 'Danza de Dragones';
		}
	}
	
  ngOnInit() {

  }

}
