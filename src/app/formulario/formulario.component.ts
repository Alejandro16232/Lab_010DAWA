import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  formularioInvalido: boolean = true;

  onSubmit() {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      const datosFormulario = `Nombre: ${this.nombre}, Email: ${this.email}`;
      const ventanaNueva = window.open('', 'Datos del Formulario', 'width=400,height=300');
      if (ventanaNueva) {
        const parrafo = ventanaNueva.document.createElement('p');
        parrafo.textContent = datosFormulario;
        ventanaNueva.document.body.appendChild(parrafo);
      } else {
        console.error('No se pudo abrir la nueva ventana');
      }
    }
  }

  validarFormulario() {
    this.formularioInvalido = !(this.nombre && this.email && this.validarFormatoCorreo());
  }

  validarFormatoCorreo(): boolean {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(this.email);
  }
}
