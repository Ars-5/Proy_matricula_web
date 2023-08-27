import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  sidebarCollapsed = false;
  labelsVisible = true;
  constructor() { }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.labelsVisible = !this.labelsVisible;
  }


  ngOnInit(): void {
  }

  submitExam() {
    // Lógica para evaluar las respuestas del examen
    // y mostrar resultados
  }

  sidebarOptions = [
    { route: '/home', label: 'Home', iconClass: 'fa fa-home' },
    { route: '/examen', label: 'Examen', iconClass: 'fa fa-search' },
    { route: '/consulta', label: 'Consultas', iconClass: 'fa fa-rocket' }
    // Otras opciones de navegación
  ];
}
