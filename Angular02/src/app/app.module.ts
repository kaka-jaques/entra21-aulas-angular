import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebappComponent } from './webapp/webapp.component';
import { PaginaComponent } from './pagina/pagina.component';
import { OutraPaginaComponent } from './outra-pagina/outra-pagina.component';
import { PropertComponent } from './propert/propert.component';
import { EventComponent } from './event/event.component';
import { ReviewComponent } from './review/review.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WebappComponent,
    PaginaComponent,
    OutraPaginaComponent,
    PropertComponent,
    EventComponent,
    ReviewComponent,
    MaoDuplaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Import para Mão Dupla
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
