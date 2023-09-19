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

    this.http.get('http://localhost:8008/state').subscribe((response: any) => {
      // Asegúrate de acceder al array dentro de response.data
      const dataArray = response.data;

      const resultados = dataArray.reduce((acc: any, item: any) => {
        const data = item.data;
        // Supongo que los datos en "data" están en el formato "nombre/valor"
        const datosSeparados = data.split('/');
        const dataNombre = datosSeparados[0];
        const dataValor = datosSeparados[1];

        // Verificar si el nombre coincide con uno de los campos
        if (dataNombre === 'DNI' && dataValor === datosPersonales.DNI) {
          acc.dniCoincide = true;
        }
        if (dataNombre === 'inst' && dataValor === datosPersonales.inst) {
          acc.instCoincide = true;
        }

        return acc;
      }, { dniCoincide: false, instCoincide: false });

      if (resultados.dniCoincide && resultados.instCoincide) {
        console.log('El DNI y el inst introducidos coinciden con la blockchain');
      } else if (resultados.dniCoincide) {
        console.log('El DNI introducido coincide con la blockchain, pero el inst no.');
      } else if (resultados.instCoincide) {
        console.log('El inst introducido coincide con la blockchain, pero el DNI no.');
      } else {
        console.log('Ni el DNI ni el inst introducidos coinciden con la blockchain.');
      }

      console.log('DNI de la blockchain:',
      resultados.dniCoincide ? datosPersonales.DNI : 'No coincide');
      console.log('inst de la blockchain:',
      resultados.instCoincide ? datosPersonales.inst : 'No coincide');
    });
  }


  validacionSimilitudSoloDNI() {
    const dniIntroducido: string = this.datosPersonales.DNI; // Especifica el tipo de dato como string

  this.http.get('http://localhost:8008/state').subscribe((response: any) => {
    const dataArray = response.data;

    const dniBlockchain: string[] = dataArray
      .map((item: any) => {
        const data = item.data;
        const datosSeparados = data.split('/');
        const dataNombre = datosSeparados[0];
        const dataValor = datosSeparados[1];
        if (dataNombre === 'DNI') {
          return dataValor; // Extraemos el DNI de la blockchain
        }
        return null;
      })
      .filter((dni: null) => dni !== null) as string[]; // Filtramos los valores nulos y especificamos el tipo

    const coincidenciaDNI = dniBlockchain.includes(dniIntroducido);

    if (coincidenciaDNI) {
      console.log('El DNI introducido coincide con el DNI de la blockchain');
    } else {
      console.log('El DNI introducido no coincide con el DNI de la blockchain');
    }

    console.log('DNI de la blockchain:', dniBlockchain);
    console.log('DNI introducido:', dniIntroducido);
  });
}

validacionSimilitudForm() {
  const datosPersonales = this.datosPersonales;

  this.http.get('http://localhost:8008/state').subscribe((response: any) => {
    const dataArray = response.data;
    const resultados = dataArray.reduce((acc: any, item: any) => {
      const data = item.data;
      const datosSeparados = data.split('/');
      const dataNombre = datosSeparados[0];
      const dataValor = datosSeparados[1];

      // Verificar si el nombre coincide con uno de los campos
      if (dataNombre === 'DNI' && dataValor === datosPersonales.DNI) {
        acc.dniCoincide = true;
      }
      if (dataNombre === 'inst' && dataValor === datosPersonales.inst) {
        acc.instCoincide = true;
      }
      if (dataNombre === 'faculty' && dataValor === datosPersonales.faculty) {
        acc.facultyCoincide = true;
      }
      if (dataNombre === 'modality' && dataValor === "admisionw==") {
        acc.modalityCoincide = true;
      }

      return acc;
    }, { dniCoincide: false, instCoincide: false, facultyCoincide: false, modalityCoincide: false });

    const mensajes: string[] = [];

    if (resultados.dniCoincide) {
      mensajes.push('El DNI consultado coincide con la blockchain');
    } else {
      mensajes.push('El DNI consultado no coincide con la blockchain');
    }

    if (resultados.instCoincide) {
      mensajes.push('El inst. consultado coincide con la blockchain');
    } else {
      mensajes.push('El inst. consultado no coincide con la blockchain');
    }

    if (resultados.facultyCoincide) {
      mensajes.push('La especialidad consultada coincide con la blockchain');
    } else {
      mensajes.push('La especialidad consultada no coincide con la blockchain');
    }

    if (resultados.modalityCoincide) {
      mensajes.push('La modalidad consultada coincide con la blockchain');
    } else {
      mensajes.push('La modalidad consultada no coincide con la blockchain');
    }

    mensajes.forEach((mensaje) => console.log(mensaje));
  });
}


}
