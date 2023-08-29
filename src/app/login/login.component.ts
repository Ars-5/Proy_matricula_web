import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormBuilder y FormGroup
import { LoginI } from 'src/app/interfaces/login.interface';
import { ResponseAuthI } from 'src/app/interfaces/response.auth.inteface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorStatus = false;
  errorMjs = '';

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    // private login: LoginService,
    // private router: Router,
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkTokenLocalStorage();
  }

  checkTokenLocalStorage() {
    if (localStorage.getItem('token')) {
      //this.router.navigate(['home']);
    }
  }

  onLogin(form: LoginI) {
    // this.login.loginByEmail(form).subscribe((data) => {
    //   // eslint-disable-next-line prefer-const
    //   let dataResponseAuth: ResponseAuthI = data;
    //   console.log(dataResponseAuth);
    //   if (dataResponseAuth.auth) {
    //     localStorage.setItem('token', dataResponseAuth.token);
    //     console.log(localStorage.getItem('token'));
    //     this.router.navigate(['home']);
    //   } else {
    //     this.errorStatus = true;
    //     this.errorMjs = dataResponseAuth.message;
    //   }
    // });
  }
}
