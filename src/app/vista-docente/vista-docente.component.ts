import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vista-docente',
  templateUrl: './vista-docente.component.html',
  styleUrls: ['./vista-docente.component.css']
})
export class VistaDocenteComponent implements OnInit {

  examResults: string = '';
  faculty: string ="HUM";
  dnidoc: string ="32888112";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  consultarExamenes(): void {
    this.http.get('http://localhost:8008/state').subscribe((response: any) => {
      const dataArray = response.data;

      // Etapa 1: Buscar al docente
      const docenteEncontrado = dataArray.find((bloque: any) => {
        const dataParts = bloque.data.split('/');
        const dnidocente = dataParts[0];
        const facultad = dataParts[1];
        return (
          dnidocente === this.dnidoc && // La primera parte debe ser igual al DNI del docente
          this.faculty === facultad  // La segunda parte debe ser igual a la facultad del docente
          );
      });

      if (docenteEncontrado) {
        // Etapa 2: Si se encontró al docente, buscar y mostrar exámenes válidos
        const examenesEncontrados = dataArray.filter((bloque: any) => {
          const dataParts = bloque.data.split('/');
          const facultad = dataParts[1];
          return (
            dataParts.length >= 4 && // Debe haber 4 o más partes separadas por '/'
            facultad === this.faculty
          );
        });

        if (examenesEncontrados.length > 0) {
          // Se encontraron exámenes válidos
          const resultados = examenesEncontrados.map((examen: any) => {
            const dataParts = examen.data.split('/');
            const dni = dataParts[0];
            const facultad = dataParts[1] === 'ING' ? 'Ingenieria' : dataParts[1]
            === 'HUM' ? 'Humanidades' : dataParts[1]
            === 'COM' ? 'Comunicaciones' : dataParts[1];
            const especialidad = dataParts[2] === 'SIS' ? 'Ing. de Sistemas' : dataParts[1]
            === 'PSI' ? 'Psicologia' : dataParts[2]
            === 'MEC' ? 'Ing. Mecatronica' : dataParts[2];
            const nota = parseInt(dataParts[3]);
            return `DNI: ${dni}, \n   FACULTAD: ${facultad}, \n   ESPECIALIDAD: ${especialidad}, \n   NOTA: ${nota}`;
          });

          this.examResults = resultados.join('\n'); // Unir los resultados en un solo string separados por saltos de línea
        } else {
          // No se encontraron exámenes válidos
          this.examResults = `No se encontraron exámenes válidos en la cadena de bloques para la facultad ${this.faculty}.`;
        }
      } else {
        // No se encontró al docente
        this.examResults = 'La facultad no coincide con la esperada';
      }
    });
  }





}
