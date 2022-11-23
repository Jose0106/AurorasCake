import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;

  elID:any;

  constructor(
       private acttivateRoute:ActivatedRoute,
       private CrudService:CrudService,
       public formulario:FormBuilder,
       private ruteador:Router
  ) {
    this.elID=this.acttivateRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.CrudService.ObtenerEmpleado(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDeEmpleados.setValue({
          nombre:respuesta[0]['nombre'],
          correo:respuesta[0]['correo']
        });
      }
    );
       this.formularioDeEmpleados=this.formulario.group(
         {
          nombre:[''],
          correo:['']
       }       
       );

   }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeEmpleados.value);
    this.CrudService.EditarEmpleado(this.elID,this.formularioDeEmpleados.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-empleado');
    
    });
  }

}
