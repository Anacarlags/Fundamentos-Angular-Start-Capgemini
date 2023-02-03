import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.css']
})
export class ServiceOneComponent {

  nome = "";

 constructor(private logger: LoggerService) {}

  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} Foi Adicionado`)
  }
}
