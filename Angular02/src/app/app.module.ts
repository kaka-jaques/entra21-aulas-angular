import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebappComponent } from './webapp/webapp.component';
import { PaginaComponent } from './pagina/pagina.component';
import { OutraPaginaComponent } from './outra-pagina/outra-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    WebappComponent,
    PaginaComponent,
    OutraPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
