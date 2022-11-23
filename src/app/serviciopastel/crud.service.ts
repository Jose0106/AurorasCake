import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pastel } from './Pastel';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API2: string='http://localhost/pasteles/';

  constructor(private clienteHttp:HttpClient) { }

  AgregarPastel(datosPastel:Pastel):Observable<any>{
    return this.clienteHttp.post(this.API2+"?insertar=1",datosPastel);
  }
  ObtenerPastels(){
    return this.clienteHttp.get(this.API2);
 }
 BorrarPastel(id:any):Observable<any>{
   return this.clienteHttp.get(this.API2+"?borrar="+id);
 }
 ObtenerPastel(id:any):Observable<any>{
   return this.clienteHttp.get(this.API2+"?consultar="+id);
 }
 EditarPastel(id:any,datosEmpleado:any):Observable<any>{
   return this.clienteHttp.post(this.API2+"?actualizar="+id,datosEmpleado);
 }

}
