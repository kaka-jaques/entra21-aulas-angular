import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebappComponent } from './webapp/webapp.component';
import { PaginaComponent } from "./pagina/pagina.component";
import { OutraPaginaComponent } from "./outra-pagina/outra-pagina.component";

const routes: Routes = [
  { path: 'webapp', component: WebappComponent },
  { path: 'pagina', component: PaginaComponent},
  { path: 'outra', component: OutraPaginaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
