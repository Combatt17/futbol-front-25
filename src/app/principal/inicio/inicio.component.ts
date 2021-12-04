import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.traerEquipos()
  }

  traerEquipos(){
    this.equipoService.obtenerEquipos().subscribe(equipos =>{
      console.log(equipos)
    })
  }

}
