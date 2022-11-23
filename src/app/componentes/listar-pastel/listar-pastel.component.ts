import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/serviciopastel/crud.service';

@Component({
  selector: 'app-listar-pastel',
  templateUrl: './listar-pastel.component.html',
  styleUrls: ['./listar-pastel.component.css']
})
export class ListarPastelComponent implements OnInit {
  Pastels:any;

  constructor(
    private CrudService:CrudService
  ) { }

  ngOnInit(): void {
    this.CrudService.ObtenerPastels().subscribe(respuesta=>{
      console.log(respuesta);
      this.Pastels=respuesta;
    });
  }
  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Deseas borrar el registro?")){
    this.CrudService.BorrarPastel(id).subscribe((respuesta)=>{      
      this.Pastels.splice(iControl,1);
    });
  }
  }

}
