import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/partidos.model';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-listar-equipos',
  templateUrl: './listar-equipos.component.html',
  styleUrls: ['./listar-equipos.component.css']
})
export class ListarEquiposComponent implements OnInit {

  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.traerEquipos()
  }

  traerEquipos(): void {
    this.equipoService.obtenerEquipos().subscribe((equipo: any) => {
     this.equipos = equipo;
     console.log(equipo)
    })
  }

}
