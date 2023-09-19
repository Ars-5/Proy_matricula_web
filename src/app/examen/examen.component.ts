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
  fechaActual: string;

  constructor() {
    //fecha actual
    const today = new Date();

    // Obtiene el año, mes y día (yy/MM/dd)
    const year = today.getFullYear().toString().slice(-2); // Obtiene los últimos dos dígitos del año
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // Agrega un cero inicial al mes si es necesario
    const day = ('0' + today.getDate()).slice(-2); // Agrega un cero inicial al día si es necesario

    // Formatea la fecha
    this.fechaActual = `${day}/${month}/${year}`;
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.labelsVisible = !this.labelsVisible;
  }


  ngOnInit(): void {
  }


  submitExam(){
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
