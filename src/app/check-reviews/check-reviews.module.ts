import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckReviewsPageRoutingModule } from './check-reviews-routing.module';

import { CheckReviewsPage } from './check-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckReviewsPageRoutingModule
  ],
  declarations: [CheckReviewsPage]
})
export class CheckReviewsPageModule {}
