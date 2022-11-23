import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { AgregarPastelComponent } from './componentes/agregar-pastel/agregar-pastel.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { EditarPastelComponent } from './componentes/editar-pastel/editar-pastel.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { ListarPastelComponent } from './componentes/listar-pastel/listar-pastel.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { ListarClienteComponent } from './componentes/listar-cliente/listar-cliente.component';






const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'listar-empleado'},
  {path: 'agregar-empleado', component:AgregarEmpleadoComponent},
  {path: 'agregar-pastel', component:AgregarPastelComponent},
  {path: 'listar-empleado', component:ListarEmpleadoComponent},
  {path: 'listar-pastel', component:ListarPastelComponent},
  {path: 'editar-empleado/:id', component:EditarEmpleadoComponent},
  {path: 'editar-pastel/:id', component:EditarPastelComponent},
  {path: 'agregar-cliente', component:AgregarClienteComponent},
  {path: 'listar-cliente', component:ListarClienteComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
