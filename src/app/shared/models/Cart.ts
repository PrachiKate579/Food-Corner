import { CartItem } from "./cartItem";

export class Cart{
    items:CartItem[] = [];
    constructor(){
        
       this.totalPrice;
     }

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice = totalPrice + item.price;
            
        });
        return totalPrice;
    }

}