import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.component.html',
  styleUrls: ['./service-two.component.css']
})
export class ServiceTwoComponent {

  produto = "";

  constructor(public logger: LoggerService){

  }

  adicionarProduto(){
   this.logger.logar(`O Produto ${this.produto} Foi Adicionado!`)
  }

}
