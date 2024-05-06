import { Component } from '@angular/core';
import { Cultura } from 'src/app/models/cultura';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  //PROPIEDAD PUBLICA (TIPO:ARRAY)
  public info: Cultura[];

  constructor() {
    this.info = [
      {
        id: "#00017",
        nombre: "nacho",
        edad: 18,
        raza:"madera",
        imagen: "https://razafolklorica.com/wp-content/uploads/2019/03/beneficios-de-mate-amargo.jpg",
        alt: "un mate"
      },
      {
        id: "#00235",
        nombre: "yonatan",
        edad: 23,
        raza:"hierro",
        imagen: "https://th.bing.com/th/id/R.3ad07f92f581fb78b474d78af0b9d9c6?rik=ZIxhYhrCzilvDQ&pid=ImgRaw&r=0",
        alt: "una pistola"
      },
      {
        id: "#00235",
        nombre: "yerba",
        edad: 23,
        raza:"yerbita",
        imagen: "https://th.bing.com/th/id/OIP.1QTN1IsD0CccahJnanVpbQHaE7?rs=1&pid=ImgDetMain",
        alt: "una pistola"
      }
    ]
  }

}
