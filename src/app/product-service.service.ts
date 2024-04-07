// product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productOfTheDay = [{id:"0", name: 'Product 0', price: 100, image: 'https://via.placeholder.com/150', description: 'description of product 0'}]

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

  product_Trending = [
    {id:"15", name: 'Product 15', price: 100, image: 'https://via.placeholder.com/150', description: 'description of product 15'},
    {id:"16", name: 'Product 16', price: 200, image: 'https://via.placeholder.com/150', description: 'description of product 16'},
    {id:"17", name: 'Product 17', price: 300, image: 'https://via.placeholder.com/150', description: 'description of product 17'},
    {id:"18", name: 'Product 18', price: 400, image: 'https://via.placeholder.com/150', description: 'description of product 18'},
    {id:"19", name: 'Product 19', price: 500, image: 'https://via.placeholder.com/150', description: 'description of product 19'},
    {id:"20", name: 'Product 20', price: 600, image: 'https://via.placeholder.com/150', description: 'description of product 20'},
    {id:"21", name: 'Product 21', price: 700, image: 'https://via.placeholder.com/150', description: 'description of product 21'},
    {id:"22", name: 'Product 22', price: 800, image: 'https://via.placeholder.com/150', description: 'description of product 22'},
    {id:"23", name: 'Product 23', price: 900, image: 'https://via.placeholder.com/150', description: 'description of product 23'},
    {id:"24", name: 'Product 24', price: 1000, image: 'https://via.placeholder.com/150', description: 'description of product 24'},
    {id:"25", name: 'Product 25', price: 1100, image: 'https://via.placeholder.com/150', description: 'description of product 25'},
    {id:"26", name: 'Product 26', price: 1200, image: 'https://via.placeholder.com/150', description: 'description of product 26'},
    {id:"27", name: 'Product 27', price: 1300, image: 'https://via.placeholder.com/150', description: 'description of product 27'},
    {id:"28", name: 'Product 28', price: 1400, image: 'https://via.placeholder.com/150', description: 'description of product 28'},
  ];
  getProductByIdPopular(id: string) {
    return this.product_Popular.find(product => product.id === id);
  }
  getProductByIdTrending(id: string) {
    return this.product_Trending.find(product => product.id === id);
  }
}