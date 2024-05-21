import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciarsesionComponent } from './pages/iniciarsesion/iniciarsesion.component';

const routes: Routes = [
  {
    path:"registro",component:RegistroComponent
  },
  {
    path:"iniciar-sesion",component:IniciarsesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
