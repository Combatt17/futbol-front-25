import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Representa localhost:8080
  baseURL= environment.baseURL;


  constructor(private http: HttpClient) { }
/**
 * Cuando inciamos sesion debemos suministrar los datos del formulario
 * Esos datos deben ser enviado por la petición (Username y password)
 */
  entrar(dato: any){
    return this.http.post(`${this.baseURL}/api/usuarios/login`,dato)
    .pipe(
      tap((data: any) =>{
        if(data.mensaje=="Accedió correctamente"){
          localStorage.setItem("token",data.token)
        }
      }),
      map(res=>res)
    )
  }
  
}
