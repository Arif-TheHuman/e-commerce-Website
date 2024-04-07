import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartPage } from './cart/cart.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { ProductChangePage } from './product-change/product-change.page';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'product-detail/:id/:section',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'cart',
    component: CartPage
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'performance',
    loadChildren: () => import('./performance/performance.module').then( m => m.PerformancePageModule)
  },
  {
    path: 'product-change',
    loadChildren: () => import('./product-change/product-change.module').then( m => m.ProductChangePageModule)
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },
  {
    path: 'product-change/:id',
    component: ProductChangePage
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
