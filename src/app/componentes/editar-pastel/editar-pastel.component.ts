import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/serviciopastel/crud.service';

@Component({
  selector: 'app-editar-pastel',
  templateUrl: './editar-pastel.component.html',
  styleUrls: ['./editar-pastel.component.css']
})
export class EditarPastelComponent implements OnInit {
  formularioDePasteles:FormGroup;

  elID:any;

  constructor(
    private acttivateRoute:ActivatedRoute,
    private CrudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router

  ) { 
    this.elID=this.acttivateRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.CrudService.ObtenerPastel(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDePasteles.setValue({
          nombre:respuesta[0]['nombre'],
          precio:respuesta[0]['precio'],
          personas:respuesta[0]['personas'],
          descripcion:respuesta[0]['descripcion'],
          imagen:respuesta[0]['imagen']

        });
      }
    );
       this.formularioDePasteles=this.formulario.group(
         {
          nombre:[''],
          precio:[''],
          personas:[''],
          descripcion:[''],
          imagen:['']
       }       
       );


  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDePasteles.value);
    this.CrudService.EditarPastel(this.elID,this.formularioDePasteles.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-pastel');
    
    });
  }

}
