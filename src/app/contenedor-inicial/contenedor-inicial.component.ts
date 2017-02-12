import { Component, OnInit } from '@angular/core';
import { CargaLibrosService } from '../carga-libros.service';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Component({
  selector: 'app-contenedor-inicial',
  templateUrl: './contenedor-inicial.component.html',
  styleUrls: ['./contenedor-inicial.component.css']
})

export class ContenedorInicialComponent implements OnInit {

constructor() {

  }

  ngOnInit() {

	}

}
