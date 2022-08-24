import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebappComponent } from './webapp/webapp.component';
import { PaginaComponent } from "./pagina/pagina.component";
import { OutraPaginaComponent } from "./outra-pagina/outra-pagina.component";
import { PropertComponent } from "./propert/propert.component";
import { EventComponent } from './event/event.component';
import { ReviewComponent } from './review/review.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';

const routes: Routes = [
  { path: 'webapp', component: WebappComponent },
  { path: 'pagina', component: PaginaComponent},
  { path: 'outra', component: OutraPaginaComponent},
  { path: 'propert', component: PropertComponent},
  { path: 'event', component: EventComponent},
  { path: 'review', component: ReviewComponent},
  { path: 'mao-dupla', component: MaoDuplaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
