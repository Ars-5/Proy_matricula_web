import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
    // ... tu código para validar y procesar el formulario ...

    // Mostrar la alerta de registro exitoso
    Swal.fire({
      title: '¡Examen completado!',
      text: 'Tu examen ha sido completado con éxito',
      icon: 'success',
      timer: 15000, // Muestra la alerta durante 3 segundos
      showConfirmButton: true,
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirigir después de hacer clic en el botón OK
        // this.router.navigate(['/login']);
      }
    });
  }


}
