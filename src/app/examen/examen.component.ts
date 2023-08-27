import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  sidebarCollapsed = false;
  constructor() { }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  ngOnInit(): void {
  }
  sidebarOptions = [
    { route: '/home', label: 'Home', iconClass: 'fa fa-home' },
    { route: '/examen', label: 'Examen', iconClass: 'fa fa-search' },
    { route: '/consulta', label: 'Consultas', iconClass: 'fa fa-rocket' }
    // Otras opciones de navegación
  ];
}
