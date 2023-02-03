import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp-filho',
  templateUrl: './comp-filho.component.html',
  styleUrls: ['./comp-filho.component.css']
})
export class CompFilhoComponent {
  @Input() sobrenome = "";
  @Output() mostraNome = new EventEmitter();

  nome = "";
}
