/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContenedorCasasComponent } from './contenedor-casas.component';

describe('ContenedorCasasComponent', () => {
  let component: ContenedorCasasComponent;
  let fixture: ComponentFixture<ContenedorCasasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorCasasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
