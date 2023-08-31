import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ExamenComponent } from './examen/examen.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { InfoMatriculaComponent } from './info-matricula/info-matricula.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'examen', component: ExamenComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'sideb', component: SidebarComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'guia', component: InstruccionesComponent },
  { path: 'info', component: InfoMatriculaComponent },
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
