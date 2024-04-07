// product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product_Popular = [
    {id:"1", name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150', description: 'description of product 1'},
    {id:"2", name: 'Product 2', price: 200, image: 'https://via.placeholder.com/150', description: 'description of product 2'},
    {id:"3", name: 'Product 3', price: 300, image: 'https://via.placeholder.com/150', description: 'description of product 3'},
    {id:"4", name: 'Product 4', price: 400, image: 'https://via.placeholder.com/150', description: 'description of product 4'},
    {id:"5", name: 'Product 5', price: 500, image: 'https://via.placeholder.com/150', description: 'description of product 5'},
    {id:"6", name: 'Product 6', price: 600, image: 'https://via.placeholder.com/150', description: 'description of product 6'},
    {id:"7", name: 'Product 7', price: 700, image: 'https://via.placeholder.com/150', description: 'description of product 7'},
    {id:"8", name: 'Product 8', price: 800, image: 'https://via.placeholder.com/150', description: 'description of product 8'},
    {id:"9", name: 'Product 9', price: 900, image: 'https://via.placeholder.com/150', description: 'description of product 9'},
    {id:"10", name: 'Product 10', price: 1000, image: 'https://via.placeholder.com/150', description: 'description of product 10'},
    {id:"11", name: 'Product 11', price: 1100, image: 'https://via.placeholder.com/150', description: 'description of product 11'},
    {id:"12", name: 'Product 12', price: 1200, image: 'https://via.placeholder.com/150', description: 'description of product 12'},
    {id:"13", name: 'Product 13', price: 1300, image: 'https://via.placeholder.com/150', description: 'description of product 13'},
    {id:"14", name: 'Product 14', price: 1400, image: 'https://via.placeholder.com/150', description: 'description of product 14'},

  ];
  getProductById(id: string) {
    return this.product_Popular.find(product => product.id === id);
  }
}