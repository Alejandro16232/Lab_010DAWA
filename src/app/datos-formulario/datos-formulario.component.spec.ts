import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosFormularioComponent } from './datos-formulario.component';

describe('DatosFormularioComponent', () => {
  let component: DatosFormularioComponent;
  let fixture: ComponentFixture<DatosFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosFormularioComponent]
    });
    fixture = TestBed.createComponent(DatosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
