import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'; //Permite hacer las peticiones HTTP
import { ReactiveFormsModule } from '@angular/forms'; //Formularios rectivos


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { InicioComponent } from './principal/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    RegistrarComponent,
    InicioComponent
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
