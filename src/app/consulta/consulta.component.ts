import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent implements OnInit {
  // Propiedad para almacenar los datos
  data: any[] = []; // Asegúrate de que los datos estén correctamente inicializados
  dni: number = 75151515;
  // Propiedades para almacenar los hashes
  fichaInscripcionHash: string | null = null;
  constanciaExamenHash: string | null = null;
  reporteExamenHash: string | null = null;
  constanciaIngresoHash: string | null = null;
  resultadoConsulta: string = '';
  hashToConsult: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // ... Inicialización de otras propiedades y carga de datos ...
    // Obtener los hashes según el tipo de dato
    // this.fichaInscripcionHash = this.obtenerHash("fichaInscripcion");
    // this.constanciaExamenHash = this.obtenerHash("constanciaExamen");
    // this.reporteExamenHash = this.obtenerHash("reporteExamen");
    // this.constanciaIngresoHash = this.obtenerHash("constanciaIngreso");
  }

  obtenerHash(tipoHash: string): void {
    this.http
      .get('http://localhost:8008/state')
      .pipe(
        map((response: any) => {
          const data = response.data;
          let address: string | null = null;
          console.log(this.dni);
          // Filtrar el array de datos para encontrar la dirección basada en la nomenclatura deseada
          if (tipoHash === 'Ficha de Inscripción') {
            address =
              data.find((item: any) => item.data.includes(`DNI/${this.dni}`))
                ?.address || null;
          } else if (tipoHash === 'Constancia de Examen') {
            // Lógica similar para otros tipos de hash
          } else if (tipoHash === 'Reporte de Examen') {
            // Lógica similar para otros tipos de hash
          } else if (tipoHash === 'Constancia de Ingreso') {
            // Lógica similar para otros tipos de hash
          }

          return address;
        })
      )
      .subscribe((hashAddress: string | null) => {
        if (hashAddress) {
          // Hash encontrado, puedes mostrarlo o realizar otras acciones aquí
          console.log(`Dirección de ${tipoHash}: ${hashAddress}`);
        } else {
          // Hash no encontrado
          console.log(`No se encontró ${tipoHash}`);
        }
      });
  }

  consultarBloque(): void {
    const hashInput = (document.getElementById('hash') as HTMLInputElement) ?.value;
    this.http.get('http://localhost:8008/state').subscribe((response: any) => {
      const dataArray = response.data;
      const bloqueEncontrado = dataArray.find(
        (bloque: any) => bloque.address === hashInput
      );
      if (bloqueEncontrado) {
        // Verificar si el "data" contiene el DNI deseado
        const dataParts = bloqueEncontrado.data.split('/');
        const dniPart = dataParts[0];
        const numSlashes = dataParts.length - 1;
        const datos1 = dataParts[1];
        const datos2 = dataParts[2];
        const datos3 = dataParts[3] === 'APR' ? 'Aprobado' : dataParts[3]
        === 'DES' ? 'Desaprobado' : dataParts[3];
        if (this.dni.toString() === dniPart.toString()) {
          // El hash existe y contiene el DNI deseado
          if (numSlashes >= 3) {
            this.resultadoConsulta =
              'Hash encontrado, DNI coincide \n\nEl resultado de tu examen es: ' +
              datos2 +
              '\nTu estado es: ' +
              datos3 +
              '\n\nEl bloque completo integro es: ' +
              bloqueEncontrado.data;
          } else {
            // Separar datos1 en partes de número y letra
            const partes = [];
            for (let i = 0; i < datos1.length; i += 2) {
              const numero = 'Pregunta Nro ' + datos1[i];
              const letra = ' Opcion ' + datos1[i + 1];
              partes.push(numero + letra);
            }
            // Crear una cadena de respuestas separadas por saltos de línea
            const respuestas = partes.join('\n');

            this.resultadoConsulta =
              'Hash encontrado, DNI coincide \n\nLas respuestas de tu examen fueron: \n' +
              respuestas +
              '\n\nEl bloque completo integro es: ' +
              bloqueEncontrado.data;
          }
          console.log('dni del postulante: ' + this.dni);
          console.log('dni del bloque: ' + dniPart);
        } else {
          // El hash existe pero no contiene el DNI deseado
          this.resultadoConsulta =
            'Hash encontrado pero DNI no coincide; Usted no es propietario del HASH consultado.';
          console.log('dni del postulante: ' + this.dni);
          console.log('dni del bloque: ' + dniPart);
        }
      } else {
        // El hash no existe en la cadena de Sawtooth
        this.resultadoConsulta = 'Hash no existe en la cadena de bloques.';
      }
    });
  }

  imprimir() {
    // Llama a la función obtenerHash para obtener los hashes y realizar la impresión
    const fichaInscripcionAddress = this.obtenerHash('fichaInscripcion');
    const constanciaExamenAddress = this.obtenerHash('constanciaExamen');
    const reporteExamenAddress = this.obtenerHash('reporteExamen');
    const constanciaIngresoAddress = this.obtenerHash('constanciaIngreso');

    // Aquí puedes realizar la lógica de impresión o cualquier otra acción que desees
    // Puedes usar los valores de las direcciones obtenidas en tu lógica de impresión
    console.log('Dirección de Ficha de Inscripción:', fichaInscripcionAddress);
    console.log('Dirección de Constancia de Examen:', constanciaExamenAddress);
    console.log('Dirección de Reporte de Examen:', reporteExamenAddress);
    console.log(
      'Dirección de Constancia de Ingreso:',
      constanciaIngresoAddress
    );

    // Ejemplo de una acción de impresión ficticia
    // this.realizarAccionDeImpresion(fichaInscripcionAddress, constanciaExamenAddress, reporteExamenAddress, constanciaIngresoAddress);
  }
}
