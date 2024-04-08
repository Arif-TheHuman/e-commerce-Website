// product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  reviews = [
    { productName: 'Product 1', rating: 4, comment: 'Great product!' },
    { productName: 'Product 2', rating: 3, comment: 'Average product.' },
    { productName: 'Product 3', rating: 5, comment: 'Excellent product!'},
    { productName: 'Product 4', rating: 2, comment: 'Poor product.' },
  ];

  productOfTheDay = [{id:"0", name: 'Product 0', price: 100, image: '../assets/img/productOfTheDay.jpg', description: 'description of product 0', stock: 10, rating: 5}]

  product_Popular = [
    {id:"1", name: 'Product 1', price: 100, image: '../assets/img/food.jpg', description: 'description of product 1', stock: 2, rating: 3},
    {id:"2", name: 'Product 2', price: 200, image: '../assets/img/food1.jpg', description: 'description of product 2', stock: 1, rating: 3},
    {id:"3", name: 'Product 3', price: 300, image: '../assets/img/food2.jpg', description: 'description of product 3', stock: 1, rating: 3},
    {id:"4", name: 'Product 4', price: 400, image: '../assets/img/food3.jpg', description: 'description of product 4', stock: 1, rating: 3},
    {id:"5", name: 'Product 5', price: 500, image: '../assets/img/food4.jpg', description: 'description of product 5', stock: 1, rating: 3},
    {id:"6", name: 'Product 6', price: 600, image: '../assets/img/food5.webp', description: 'description of product 6', stock: 1, rating: 3},
    {id:"7", name: 'Product 7', price: 700, image: '../assets/img/food6.jpg', description: 'description of product 7', stock: 1, rating: 3},
    {id:"8", name: 'Product 8', price: 800, image: '../assets/img/food7.jpg', description: 'description of product 8', stock: 1, rating: 3},
    {id:"9", name: 'Product 9', price: 900, image: '../assets/img/food8.jpg', description: 'description of product 9', stock: 1, rating: 3},
    {id:"10", name: 'Product 10', price: 1000, image: '../assets/img/food9.jpg', description: 'description of product 10', stock: 1, rating: 3},
    {id:"11", name: 'Product 11', price: 1100, image: '../assets/img/food10.jpg', description: 'description of product 11', stock: 1, rating: 3},
    {id:"12", name: 'Product 12', price: 1200, image: '../assets/img/food11.jpg', description: 'description of product 12', stock: 1, rating: 3},
    {id:"13", name: 'Product 13', price: 1300, image: '../assets/img/food12.jpg', description: 'description of product 13', stock: 1, rating: 3},
  ];

  product_Trending = [
    {id:"14", name: 'Product 14', price: 1400, image: '../assets/img/item.jpg', description: 'description of product 14', stock: 1, rating: 3},
    {id:"15", name: 'Product 15', price: 100, image: '../assets/img/item1.jpg', description: 'description of product 15', stock: 1, rating: 3},
    {id:"16", name: 'Product 16', price: 200, image: '../assets/img/item2.jpg', description: 'description of product 16', stock: 1, rating: 3},
    {id:"17", name: 'Product 17', price: 300, image: '../assets/img/item3.webp', description: 'description of product 17', stock: 1, rating: 3},
    {id:"18", name: 'Product 18', price: 400, image: '../assets/img/item4.jpg', description: 'description of product 18', stock: 1, rating: 3},
    {id:"19", name: 'Product 19', price: 500, image: '../assets/img/item5.jpg', description: 'description of product 19', stock: 1, rating: 3},
    {id:"20", name: 'Product 20', price: 600, image: '../assets/img/item6.jpg', description: 'description of product 20', stock: 1, rating: 3},
    {id:"21", name: 'Product 21', price: 700, image: '../assets/img/item7.jpg', description: 'description of product 21', stock: 1, rating: 3},
    {id:"22", name: 'Product 22', price: 800, image: '../assets/img/item8.jpg', description: 'description of product 22', stock: 1, rating: 3},
    {id:"23", name: 'Product 23', price: 900, image: '../assets/img/item9.jpg', description: 'description of product 23', stock: 1, rating: 3},
    {id:"24", name: 'Product 24', price: 1000, image: '../assets/img/item10.webp', description: 'description of product 24', stock: 1, rating: 3},
  ];
  getProductByIdPopular(id: string) {
    return this.product_Popular.find(product => product.id === id);
  }
  getProductByIdTrending(id: string) {
    return this.product_Trending.find(product => product.id === id);
  }
  updateProduct(updatedProduct: any) {
    // Find the product in the product list
    const productIndex = this.product_Popular.findIndex(product => product.id === updatedProduct.id);

    // Update the product details
    if (productIndex !== -1) {
      this.product_Popular[productIndex] = updatedProduct;
    }
  }
}