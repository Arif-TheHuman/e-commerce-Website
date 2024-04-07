import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id') ?? '';
    const section = this.route.snapshot.paramMap.get('section') ?? '';
    
    if (section === 'popular') {
      this.product = this.productService.getProductByIdPopular(productId);
    } else if (section === 'trending') {
      this.product = this.productService.getProductByIdTrending(productId);
    } else if (section === 'productOfTheDay') {
      this.product = this.productService.productOfTheDay.find(product => product.id === productId);
    }
  }
}