import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductChangePage } from './product-change.page';

const routes: Routes = [
  {
    path: '',
    component: ProductChangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductChangePageRoutingModule {}
