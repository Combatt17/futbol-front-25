import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  //Defincion del formulario
  loginForm!: FormGroup;


  //Inyectar la construccion del formulario y el servicio del usuario
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  //Construir el formulario
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }
  
  //Se ejecuta cuando activamos el boton Ingresar
  entrar(){
    
    this.usuarioService.entrar(this.loginForm.value).subscribe((data:any) =>{
      console.log(data);
      if(data.mensaje=="Accedió correctamente"){
       this.router.navigateByUrl('inicio')
      }else{
        alert(data.mensaje)
      }
    })
  }
}
