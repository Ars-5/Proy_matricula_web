import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-admision',
  templateUrl: './info-admision.component.html',
  styleUrls: ['./info-admision.component.css']
})
export class InfoAdmisionComponent implements OnInit {
  datosPersonales: any = {};
  datosPadres: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  guardarDatosPersonales() {
    // Lógica para guardar datos personales aquí
  }

  guardarDatosPadres() {
    // Lógica para guardar datos de los padres aquí
  }


}
