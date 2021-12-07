import { Component, OnInit } from '@angular/core';
import { Partidos } from 'src/app/models/partidos.model';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  partidos: Partidos[] = [];

  constructor(private partidoService: PartidosService) { }

  ngOnInit(): void {
    this.traerpartidos()
  }

  traerpartidos(){
    this.partidoService.obtenerPartidos().subscribe((partidos:any) =>{
      console.log(partidos)
      this.partidos=partidos;
    })
  }

}
