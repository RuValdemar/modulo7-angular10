import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosListadoComponent } from './usuarios-listado/usuarios-listado.component';
import { UsuariosDetalleComponent } from './usuarios-detalle/usuarios-detalle.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosListadoComponent,
    UsuariosDetalleComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
