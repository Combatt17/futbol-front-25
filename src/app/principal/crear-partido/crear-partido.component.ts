import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Equipo, Usuario } from 'src/app/models/partidos.model';
import { EquipoService } from 'src/app/services/equipo.service';
import { PartidosService } from 'src/app/services/partidos.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-partido',
  templateUrl: './crear-partido.component.html',
  styleUrls: ['./crear-partido.component.css']
})
export class CrearPartidoComponent implements OnInit {

  equipos: Equipo[] = [];//Todos los equipos registrados



  equipoLocal!: Equipo; //Contiene la información del equipo 
  equipoVisitante!: Equipo;//Contiene la información del equipo 


  usuario: Usuario = this.usuarioService.Usuario;// Contiene la información de usuario

  partidoForm!: FormGroup;// Formulario JSON


  constructor(private equipoService: EquipoService,
    private usuarioService: UsuarioService,
    private partidoService: PartidosService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.partidoForm = this.fb.group({
      usuario: [this.usuario],
      local: [this.equipoLocal],
      visitante: [this.equipoVisitante],
      fecha: [''],
      goleslocal: [''],
      golesvisitante: [''],
    })
    this.traerEquipos()
  }

  traerEquipos(): void {
    this.equipoService.obtenerEquipos().subscribe((equipos: any) => {
      this.equipos = equipos;
    })
  }

  agregar() {

    this.equipos.forEach((element:any) => {
      if(this.partidoForm.controls['local'].value==element.id){
        this.equipoLocal=element
        
        this.partidoForm.controls['local'].setValue(element)
       
      }

      if(this.partidoForm.controls['visitante'].value==element.id){
        this.equipoVisitante=element
        this.partidoForm.controls['visitante'].setValue(element)

      }
      
    });

    console.log(this.partidoForm.value)
     this.partidoService.agregarPartido(this.partidoForm.value).subscribe(data=>{
       console.log(data)
     })

  }

}
