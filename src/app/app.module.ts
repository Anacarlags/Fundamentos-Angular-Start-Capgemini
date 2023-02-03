import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componente } from './meuscomponentes/componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiPipe } from './multi.pipe';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { ErnderizandoListaComponent } from './ernderizando-lista/ernderizando-lista.component';
import { CompPaiComponent } from './comp-pai/comp-pai.component';
import { CompFilhoComponent } from './comp-filho/comp-filho.component';
import { ServiceOneComponent } from './service-one/service-one.component';
import { ServiceTwoComponent } from './service-two/service-two.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    componente,
    SegundoComponenteComponent,
    MultiPipe,
    TwoWayDataBindingComponent,
    ErnderizandoListaComponent,
    CompPaiComponent,
    CompFilhoComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    CicloDeVidaComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
