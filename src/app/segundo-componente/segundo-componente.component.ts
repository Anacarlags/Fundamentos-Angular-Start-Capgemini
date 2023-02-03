import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
 @Input() nome = "";
 @Input() sobrenome = "";

 dataNascimento = "1991-05-17"
}
