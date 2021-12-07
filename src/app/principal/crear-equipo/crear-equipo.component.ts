import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

  equipoForm!: FormGroup;
  constructor(private equipoService: EquipoService, 
    private fb: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.equipoForm= this.fb.group({
      id: [''],
      nombre: ['']
    })
  }


  agregar(){
    this.equipoService.añadirEquipo(this.equipoForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.estado=="true"){
   this.router.navigateByUrl("equipos")
      }else{
        alert("Ha ocurrido un error")
      }
    })
  }

}
