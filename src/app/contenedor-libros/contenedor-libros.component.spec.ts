/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContenedorLibrosComponent } from './contenedor-libros.component';

describe('ContenedorLibrosComponent', () => {
  let component: ContenedorLibrosComponent;
  let fixture: ComponentFixture<ContenedorLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
