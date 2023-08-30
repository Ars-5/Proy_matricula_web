import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormBuilder y FormGroup
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup; // Declarar el FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required],
      celular: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      terminos: [false, Validators.requiredTrue]
    });
  }

  goBack() {
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
  }

  submitRegistrationForm() {
    // ... tu código para validar y procesar el formulario ...

    // Mostrar la alerta de registro exitoso
    Swal.fire({
      title: '¡Registro exitoso!',
      text: 'Tu registro ha sido completado con éxito',
      icon: 'success',
      timer: 15000, // Muestra la alerta durante 3 segundos
      showConfirmButton: true,
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirigir después de hacer clic en el botón OK
        this.router.navigate(['/login']);
      }
    });
  }


}
