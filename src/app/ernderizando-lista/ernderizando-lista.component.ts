import { Component } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-ernderizando-lista',
  templateUrl: './ernderizando-lista.component.html',
  styleUrls: ['./ernderizando-lista.component.css']
})
export class ErnderizandoListaComponent {
  celulares: Celular[] = [
    {id:1, nome: "Celular XL", desc: "Celular Grande", esgotado: false },
    {id:2, nome: "Moto E7 Plus", esgotado: false },
    {id:3, nome: "SamSung M30", desc: "Quatro Cameras", esgotado: true }
  ]

}
