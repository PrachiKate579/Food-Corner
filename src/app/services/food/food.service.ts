import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
   

  constructor() { }
  getAllFoodsByTag(tag:string):Foods[]{
  
    return tag == "All"?this.getAll():this.getAll().filter(food => food.tags?.includes(tag));
  
   
  }

  getAll():Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 10,
        cookTime: '15 - 20',
        favourite: true,
        origins: ['Italian'],
        star: 4.5,
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],

      },
      {
        id: 2,
        name: 'Cheese Burger',
        price: 9,
        cookTime: '10 - 15',
        favourite: true,
        origins: [ 'American'],
        star: 4,
        imageUrl: '/assets/images/burger.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],

      },
      {
        id: 3,
        name: 'MeatBalls',
        price: 10,
        cookTime: '15 - 20',
        favourite: true,
        origins: ['Persian'],
        star: 3.5,
        imageUrl: '/assets/images/Meatballs.jpg',
        tags: ['HomeFood', 'MeatBalls', 'Lunch'],

      },
      {
        id: 4,
        name: 'Pasta',
        price: 9,
        cookTime: '15 - 20',
        favourite: true,
        origins: ['Italian'],
        star: 4.5,
        imageUrl: '/assets/images/pasta.jpg',
        tags: ['FastFood', 'Pasta', 'Lunch'],

      },
      {
        id: 5,
        name: 'Noodles',
        price: 10,
        cookTime: '10 - 15',
        favourite: true,
        origins: ['Chinese'],
        star: 4,
        imageUrl: '/assets/images/noodles.jpg',
        tags: ['FastFood', 'Noodles', 'Lunch'],

      },
      {
        id: 6,
        name: 'Soup',
        price: 9,
        cookTime: '10 - 25',
        favourite: true,
        origins: ['Indian'],
        star: 3.5,
        imageUrl: '/assets/images/soup.jpg',
        tags: ['Healthy', 'Soup', 'Lunch'],

      },
      {
        id: 7,
        name: 'Sizzler',
        price: 10,
        cookTime: '15 - 20',
        favourite: true,
        origins: [ 'Italian'],
        star: 4.5,
        imageUrl: '/assets/images/sizzler.jpg',
        tags: [ 'Sizzler', 'Lunch'],

      },
      {
        id: 8,
        name: 'Brownie With Icecream',
        price: 10,
        cookTime: '15 - 20',
        favourite: true,
        origins: ['Dessert'],
        star: 4.5,
        imageUrl: '/assets/images/brownie.jpg',
        tags: ['Dessert', 'Brownie', 'Lunch'],

      }


    ]
  }
 
  getAllTag():Tag[]{
  return [
    {name:'All',count:8},
    {name:'Pizza',count:1},
    {name:'Dessert',count:1},
    {name:'Soup',count:1},
    {name:'FastFood',count:4},
    {name:'Sizzler',count:1},
    {name:'HomeFood',count:1},
    

  ]

  }
 
  getFoodById(id:number):Foods{
    console.log("inside getfoodbyid")
 return this.getAll().find(food => food.id == id)!
  }
}
