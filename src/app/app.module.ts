import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'; //Permite hacer las peticiones HTTP
import { ReactiveFormsModule } from '@angular/forms'; //Formularios rectivos


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { InicioComponent } from './principal/inicio/inicio.component';
import { NavComponent } from './shared/nav/nav.component';
import { CrearPartidoComponent } from './principal/crear-partido/crear-partido.component';
import { CrearEquipoComponent } from './principal/crear-equipo/crear-equipo.component';
import { ListarEquiposComponent } from './principal/listar-equipos/listar-equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    RegistrarComponent,
    InicioComponent,
    NavComponent,
    CrearPartidoComponent,
    CrearEquipoComponent,
    ListarEquiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,// Cliente http
    ReactiveFormsModule //Formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
