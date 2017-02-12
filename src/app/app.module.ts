import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ContenedorInicialComponent } from './contenedor-inicial/contenedor-inicial.component';
import { Routes, RouterModule } from '@angular/router';
import { ContenedorLibrosComponent } from './contenedor-libros/contenedor-libros.component';
import { ContenedorCasasComponent } from './contenedor-casas/contenedor-casas.component';
import { ContenedorPjsComponent } from './contenedor-pjs/contenedor-pjs.component';
import { PieComponent } from './pie/pie.component';
import { OrdenaLibrosPipe } from './ordena-libros.pipe';
import { DatosLibroComponent } from './datos-libro/datos-libro.component';

const rutas: Routes = [
    { path: '', component: ContenedorInicialComponent },
    { path: 'home', component: ContenedorInicialComponent },
    { path: 'libros', component: ContenedorLibrosComponent },
    { path: 'casas', component: ContenedorCasasComponent },
    { path: 'personajes', component: ContenedorPjsComponent },
];

export const enrutamiento = RouterModule.forRoot(rutas);

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ContenedorInicialComponent,
    ContenedorLibrosComponent,
    ContenedorCasasComponent,
    ContenedorPjsComponent,
    PieComponent,
    OrdenaLibrosPipe,
    DatosLibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	enrutamiento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
