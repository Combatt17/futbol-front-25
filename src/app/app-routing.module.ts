import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ValidarTokenGuard } from './guards/validar-token.guard';


import { CrearEquipoComponent } from './principal/crear-equipo/crear-equipo.component';
import { CrearPartidoComponent } from './principal/crear-partido/crear-partido.component';
import { InicioComponent } from './principal/inicio/inicio.component';
import { ListarEquiposComponent } from './principal/listar-equipos/listar-equipos.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';

const routes: Routes = [
  {
    path:'',
    component: EntrarComponent
  },
  {
    path:'inicio',
    component: InicioComponent,
    canActivate: [ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'equipos',
    component: ListarEquiposComponent,
    canActivate: [ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'new-equipo',
    component: CrearEquipoComponent,
    canActivate: [ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'new-partido',
    component: CrearPartidoComponent,
    canActivate: [ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'registrar',
    component: RegistrarComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
