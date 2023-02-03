import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-pai',
  templateUrl: './comp-pai.component.html',
  styleUrls: ['./comp-pai.component.css']
})
export class CompPaiComponent {
   sobrenome = "De Lima";

   mostraNomeCompleto(nomeCompleto: any){
    alert(`O Nome Digitado é: ${nomeCompleto}`);
   }

}
