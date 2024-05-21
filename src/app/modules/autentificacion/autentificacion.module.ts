import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//ARCHIVOS DE RUTAS HIJAS
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
//VISTAS DE AUTENTIFICACION
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciarsesionComponent } from './pages/iniciarsesion/iniciarsesion.component';


@NgModule({
  declarations: [
    RegistroComponent,
    IniciarsesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ],
  exports: [
    RegistroComponent,
    IniciarsesionComponent,

  ]
})
export class AutentificacionModule { }
