import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ExamenComponent } from './examen/examen.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { InfoMatriculaComponent } from './info-matricula/info-matricula.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultaComponent,
    ExamenComponent,
    LoginComponent,
    SidebarComponent,
    RegisterComponent,
    InstruccionesComponent,
    InfoMatriculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
