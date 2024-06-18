import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaPage } from './pesquisa.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesquisaPageRoutingModule {}
