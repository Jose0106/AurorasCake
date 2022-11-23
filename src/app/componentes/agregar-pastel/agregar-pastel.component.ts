import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/serviciopastel/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-pastel',
  templateUrl: './agregar-pastel.component.html',
  styleUrls: ['./agregar-pastel.component.css']
})
export class AgregarPastelComponent implements OnInit {
  formularioDePasteles:FormGroup;


  constructor(
    public formulario:FormBuilder,
    private CrudService:CrudService,
    private ruteador:Router

  ) {
    this.formularioDePasteles=this.formulario.group({
      nombre:[''],
      precio:[''],
      personas:[''],
      descripcion:[''],
      imagen:['']
    });
   }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log("Me presionaste");
    console.log(this.formularioDePasteles.value);

    this.CrudService.AgregarPastel(this.formularioDePasteles.value).subscribe();

    this.ruteador.navigateByUrl('/listar-pastel');
  }

}
