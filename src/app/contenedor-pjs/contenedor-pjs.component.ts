import { Component, OnInit } from '@angular/core';
import { CargaPjsService } from '../carga-pjs.service';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Component({
  selector: 'app-contenedor-pjs',
  templateUrl: './contenedor-pjs.component.html',
  styleUrls: ['./contenedor-pjs.component.css'],
	providers: [CargaPjsService]
})
export class ContenedorPjsComponent implements OnInit {
pagina:number;
pjs:any;
  constructor(private carga_pjs: CargaPjsService) { 
    this.pagina = 1;
	this.pjs = [];
  }
	
	pag_siguiente(){
		this.pagina++;
		this.carga_pjs.pidePjs(this.pagina);
		this.carga_pjs.devuelvePjs().subscribe(pjs => {this.pjs = pjs;console.log(this.pjs) });
	}	

	pag_anterior(){
		this.pagina--;
		this.carga_pjs.pidePjs(this.pagina);
		this.carga_pjs.devuelvePjs().subscribe(pjs => {this.pjs = pjs;console.log(this.pjs) });
	}

  ngOnInit() {
	 this.carga_pjs.pidePjs(this.pagina);
	 this.carga_pjs.devuelvePjs().subscribe(pjs => {this.pjs = pjs;console.log(this.pjs) });
  }

}
