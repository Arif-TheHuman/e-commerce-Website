import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckReviewsPage } from './check-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: CheckReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckReviewsPageRoutingModule {}
