import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterI } from 'src/app/interfaces/register.interface';
import { ResponseAuthI } from 'src/app/interfaces/response.auth.inteface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  //URL de conexion a la api-rest
  private url = 'https://pwa-nutricion.herokuapp.com/api/v1/';
  //private url = 'http://localhost:27017/api/v1/';
  //httpHeaders

  constructor(private http: HttpClient) {}

  registerUser(form: RegisterI): Observable<any> {
    // eslint-disable-next-line prefer-const
    let direccion = this.url + 'register';
    return this.http.post<ResponseAuthI>(direccion, form);
  }
}
