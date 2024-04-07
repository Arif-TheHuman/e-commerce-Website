import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductChangePageRoutingModule } from './product-change-routing.module';

import { ProductChangePage } from './product-change.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductChangePageRoutingModule
  ],
  declarations: [ProductChangePage]
})
export class ProductChangePageModule {}
