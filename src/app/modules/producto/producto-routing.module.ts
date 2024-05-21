import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
//

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"alimentacion",component:AlimentacionComponent
  },
  {
    path:"indumentaria",component:IndumentariaComponent
  },
  //
  //
  //
  //
  
  {

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
