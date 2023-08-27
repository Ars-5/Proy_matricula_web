import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sidebarOptions = [
    { route: '/home', label: 'Home', iconClass: 'fa fa-home' },
    { route: '/examen', label: 'Examen', iconClass: 'fa fa-search' },
    { route: '/consulta', label: 'Consultas', iconClass: 'fa fa-rocket' }
    // Otras opciones de navegación
  ];
}
