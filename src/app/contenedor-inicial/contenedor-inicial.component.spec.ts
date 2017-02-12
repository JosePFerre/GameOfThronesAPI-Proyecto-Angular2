/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContenedorInicialComponent } from './contenedor-inicial.component';

describe('ContenedorInicialComponent', () => {
  let component: ContenedorInicialComponent;
  let fixture: ComponentFixture<ContenedorInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
