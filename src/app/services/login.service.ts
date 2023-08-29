import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginI } from 'src/app/interfaces/login.interface';
import { ResponseAuthI } from 'src/app/interfaces/response.auth.inteface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //URL de conexion a la api-rest
  private url = 'https://pwa-nutricion.herokuapp.com/api/v1/';
  //httpHeaders

  constructor(private http: HttpClient) {}

  loginByEmail(form: LoginI): Observable<ResponseAuthI> {
    // eslint-disable-next-line prefer-const
    let direccion = this.url+ 'login';
    return this.http.post<ResponseAuthI>(direccion,form);
  }
  /**
   * Obtiene listado de productos de la APIREST
   */
}
