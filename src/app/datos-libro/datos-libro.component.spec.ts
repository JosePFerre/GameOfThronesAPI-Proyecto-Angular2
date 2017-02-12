/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatosLibroComponent } from './datos-libro.component';

describe('DatosLibroComponent', () => {
  let component: DatosLibroComponent;
  let fixture: ComponentFixture<DatosLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
