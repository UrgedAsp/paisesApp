import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent{

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[]= []

  constructor(private PaisService: PaisService) { }

  getClaseCss(region: string): string{
    return (region == this.regionActiva) ? 'btn btn-outline-primary me-2 mt-2 mb-4 btn-grad2': 'btn btn-primary me-2 mt-2 mb-4 btn-grad'
  }

  activarRegion(region: string){
    if(region === this.regionActiva){return}

    this.regionActiva = region;
    this.paises= [];
    
    this.PaisService.buscarRegion(region).subscribe(paises=>{
      this.paises = paises;
    },(err=>{
      this.paises = [];
    }))
  }

  

}
