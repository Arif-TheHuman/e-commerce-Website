import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChildren('startScroll') startScroll!: QueryList<ElementRef>;

  constructor(private productService: ProductService, private router: Router, public cartService: CartService) {}

  get productOfTheDay() {
    return this.productService.productOfTheDay;
  }

  get product_Popular() {
    return this.productService.product_Popular;
  }

  get Product_Trending() {
    return this.productService.product_Trending;
  }

  ngAfterViewInit() {
    this.startScroll.forEach((item) => {
      item.nativeElement.scrollLeft = 0;
    });
  }

  openProductDetails(product: any, section: string) {
    this.router.navigate(['/product-detail', product.id, section]);
  }
}