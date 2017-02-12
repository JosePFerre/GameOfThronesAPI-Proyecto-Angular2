import { Component, OnInit } from '@angular/core';
import { CargaCasasService } from '../carga-casas.service';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Component({
  selector: 'app-contenedor-casas',
  templateUrl: './contenedor-casas.component.html',
  styleUrls: ['./contenedor-casas.component.css'],
	providers: [CargaCasasService]
})
export class ContenedorCasasComponent implements OnInit {
pagina:number;
casas:any;
  constructor(private carga_casas: CargaCasasService) { 
  	this.pagina = 1;
	this.casas = [];
  }

	pag_siguiente(){
		this.pagina++;
		this.carga_casas.pideCasas(this.pagina);
		this.carga_casas.devuelveCasas().subscribe(casas => {this.casas = casas;console.log(this.casas) });
	}	

	pag_anterior(){
		this.pagina--;
		this.carga_casas.pideCasas(this.pagina);
		this.carga_casas.devuelveCasas().subscribe(casas => {this.casas = casas;console.log(this.casas) });
	}
	
  ngOnInit() {
	 this.carga_casas.pideCasas(this.pagina);
	 this.carga_casas.devuelveCasas().subscribe(casas => {this.casas = casas});
  }

}
