import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
