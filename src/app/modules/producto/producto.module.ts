import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';








@NgModule({
  declarations: [
    ProductoComponent,
    AlimentacionComponent,
    IndumentariaComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,

  ],
  exports:[
    ProductoComponent,
    AlimentacionComponent,
    IndumentariaComponent
  ]
})
export class ProductoModule { }
