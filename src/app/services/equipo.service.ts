import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
 
  baseURL= environment.baseURL;

  constructor(private http: HttpClient) { }

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
  get headers(){
    return {headers: {"Authorization": this.getToken()} }
  }

  /**
   * Se debe enviar por la cabecera de la petición el token
   */
  obtenerEquipos(){
    return this.http.get(`${this.baseURL}/api/equipos`, this.headers)
  }


}
