import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgregarPastelComponent } from './componentes/agregar-pastel/agregar-pastel.component';
import { EditarPastelComponent } from './componentes/editar-pastel/editar-pastel.component';
import { ListarPastelComponent } from './componentes/listar-pastel/listar-pastel.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { ListarClienteComponent } from './componentes/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent,
    AgregarPastelComponent,
    EditarPastelComponent,
    ListarPastelComponent,
    AgregarClienteComponent,
    ListarClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
