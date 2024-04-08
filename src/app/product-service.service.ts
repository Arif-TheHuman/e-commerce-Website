// product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  reviews = [
    { productName: 'Korean Stir Fried Noodles', rating: 4, comment: 'Great product!' },
    { productName: 'Hamburg Bento Set', rating: 3, comment: 'Average product.' },
    { productName: 'Salmon Teriyaki Bento', rating: 5, comment: 'Excellent product!'},
    { productName: 'Osaka Style Bento', rating: 2, comment: 'Poor product.' },
  ];

  productOfTheDay = [{id:"0", name: 'Evolved Nori Bento', price: 5, image: '../assets/img/productOfTheDay.jpg', description: 'description of product 0', stock: 10, rating: 5}]

  product_Popular = [
    {id:"1", name: 'Korean Stir Fried Noodles', price: 2, image: '../assets/img/food.jpg', description: 'description of product 1', stock: 2, rating: 3},
    {id:"2", name: 'Hamburg Bento Set', price: 2, image: '../assets/img/food1.jpg', description: 'description of product 2', stock: 1, rating: 3},
    {id:"3", name: 'Salmon Teriyaki Bento', price: 4, image: '../assets/img/food2.jpg', description: 'description of product 3', stock: 1, rating: 3},
    {id:"4", name: 'Osaka Style Bento', price: 2, image: '../assets/img/food3.jpg', description: 'description of product 4', stock: 1, rating: 3},
    {id:"5", name: 'Fish And Sides Bento', price: 2, image: '../assets/img/food4.jpg', description: 'description of product 5', stock: 1, rating: 3},
    {id:"6", name: 'Egg Breakfast Bento', price: 3, image: '../assets/img/food5.webp', description: 'description of product 6', stock: 1, rating: 3},
    {id:"7", name: 'Chicken Fried Rice', price: 1, image: '../assets/img/food6.jpg', description: 'description of product 7', stock: 1, rating: 3},
    {id:"8", name: 'Curry Spiced Chicken', price: 2, image: '../assets/img/food7.jpg', description: 'description of product 8', stock: 1, rating: 3},
    {id:"9", name: 'Food Mixes Bento', price: 2, image: '../assets/img/food8.jpg', description: 'description of product 9', stock: 1, rating: 3},
    {id:"10", name: 'Salmon Breakfast Bento', price: 4, image: '../assets/img/food9.jpg', description: 'description of product 10', stock: 1, rating: 3},
    {id:"11", name: 'Japanese Bento Box', price: 3, image: '../assets/img/food10.jpg', description: 'description of product 11', stock: 1, rating: 3},
    {id:"12", name: 'Fried Ketchup Noodles', price: 1, image: '../assets/img/food11.jpg', description: 'description of product 12', stock: 1, rating: 3},
    {id:"13", name: 'Yakiniku Bento Set', price: 3, image: '../assets/img/food12.jpg', description: 'description of product 13', stock: 1, rating: 3},
  ];

  product_Trending = [
    {id:"14", name: 'Axolotl Squishy Toy', price: 20, image: '../assets/img/item.jpg', description: 'description of product 14', stock: 1, rating: 3},
    {id:"15", name: 'Cat In The Box Game', price: 10, image: '../assets/img/item1.jpg', description: 'description of product 15', stock: 1, rating: 3},
    {id:"16", name: 'Curious Minds Books', price: 15, image: '../assets/img/item2.jpg', description: 'description of product 16', stock: 1, rating: 3},
    {id:"17", name: 'Wall-E Remote Controlled', price: 15, image: '../assets/img/item3.webp', description: 'description of product 17', stock: 1, rating: 3},
    {id:"18", name: 'Octo Reversible Plushie', price: 15, image: '../assets/img/item4.jpg', description: 'description of product 18', stock: 1, rating: 3},
    {id:"19", name: 'Turtle Reversible Plushie', price: 15, image: '../assets/img/item5.jpg', description: 'description of product 19', stock: 1, rating: 3},
    {id:"20", name: 'Emotion Support Fries', price: 5, image: '../assets/img/item6.jpg', description: 'description of product 20', stock: 1, rating: 3},
    {id:"21", name: 'Pentax Bridge Camera', price: 40, image: '../assets/img/item7.jpg', description: 'description of product 21', stock: 1, rating: 3},
    {id:"22", name: 'Round Kors Watch', price: 50, image: '../assets/img/item8.jpg', description: 'description of product 22', stock: 1, rating: 3},
    {id:"23", name: 'Acoustic Guitar Pick', price: 4, image: '../assets/img/item9.jpg', description: 'description of product 23', stock: 1, rating: 3},
    {id:"24", name: 'Moon Night Light', price: 10, image: '../assets/img/item10.webp', description: 'description of product 24', stock: 1, rating: 3},
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