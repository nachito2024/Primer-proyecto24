import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
//RUTAS HIJAS DEL MODULO INICIO
const routes: Routes = [
  {
    path: "",component:InicioComponent
  },
  //carga perezosa-> RUTA AL MODULO
  //loadchildren: indica que sera ruta hija del modulo raiz
  //()=>:funcion flecha que importara la direccion del modulo
  //.then: promesa que nos dervolvera un valor resuelto o rechazado
  {
    path: "inicio",component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
