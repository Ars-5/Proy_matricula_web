import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-admision',
  templateUrl: './info-admision.component.html',
  styleUrls: ['./info-admision.component.css']
})
export class InfoAdmisionComponent implements OnInit {
  datosPersonales: any = {};
  datosPadres: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  guardarDatosPersonales() {
    // Lógica para guardar datos personales aquí
    this.validacionSimilitud();
  }

  guardarDatosPadres() {
    // Lógica para guardar datos de los padres aquí
  }

  validacionSimilitud() {
    const datosPersonales = this.datosPersonales;

    this.http.get('URL_DE_TU_API').subscribe((response: any) => {
      // Response contendrá una lista de objetos con la estructura "data"

      const coincidencias = response.filter((item: any) => {
        const data = item.data;
        const datosSeparados = data.split('/'); // Dividimos por el separador "/"
        const dataNombre = datosSeparados[0]; // Obtenemos el nombre
        const dataValor = datosSeparados[1]; // Obtenemos el valor

        // Verificar si el nombre coincide con uno de los campos
        return (
          (dataNombre === 'name' && dataValor === datosPersonales.name) ||
          (dataNombre === 'DNI' && dataValor === datosPersonales.DNI) ||
          (dataNombre === 'modality' && dataValor === datosPersonales.modality) ||
          (dataNombre === 'inst' && dataValor === datosPersonales.inst) ||
          (dataNombre === 'career' && dataValor === datosPersonales.career)
        );
      });

      if (coincidencias.length === 5) {
        // Todos los campos coinciden, puedes realizar acciones adicionales aquí
        console.log('Todos los datos son iguales');
      } else {
        // Al menos un campo no coincide
        console.log('Algunos datos no son iguales');
      }
    });
  }



}
