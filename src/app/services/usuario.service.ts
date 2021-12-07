import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import {environment} from '../../environments/environment'
import { Usuario } from '../models/partidos.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Representa localhost:8080
  baseURL= environment.baseURL;

  
  private usuario!: Usuario;

  get Usuario() {
    return this.usuario;
  }

  constructor(private http: HttpClient) { }

   /**
   * Método que construye la cabecera de la petición http, y envia los datos del token
   */
    get headers(){
      return {headers: {"Content-Type": "application/json"} }
    }


/**
 * Cuando inciamos sesion debemos suministrar los datos del formulario
 * Esos datos deben ser enviado por la petición (Username y password)
 */
  entrar(dato: any){
    return this.http.post(`${this.baseURL}/api/usuarios/login`,dato,this.headers)
    .pipe(
      tap((data: any) =>{
        if(data.mensaje=="Accedió correctamente"){
          localStorage.setItem("token",data.token)
          this.usuario=data
        }
      }),
      map(res=>res)
    )
  }

  /**
   * Obtiene el valor del token que se encuentra almacenado dentro del localStorage,
   * si el localStorage no contiene el valor buscado se devuelve un string vacio 
   */
   getToken(){
    return localStorage.getItem("token") || '';
  }

  /**
   * Método que construye la cabecera de la petición http, y envia los datos del token
   */
  get headersToken(){
    return {headers: {"Authorization": this.getToken()} }
  }


  verificarToken():Observable<boolean>{
    return this.http.get(`${this.baseURL}/api/verificar`,this.headersToken)
    .pipe(
      map((res:any)=>{
        console.log(res)
          return res.ok
      }),
      catchError(err => of(false)) //Capture error ----> false
      )

  }
  
}
