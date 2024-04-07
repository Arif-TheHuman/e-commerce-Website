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
    this.product = this.productService.getProductById(productId);
  }
}