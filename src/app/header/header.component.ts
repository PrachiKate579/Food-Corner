import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   cart!:Cart;
  
  
  constructor(private cartService:CartService,private authservice:AuthserviceService){}
  ngOnInit(): void {
   
  this.cart = this.cartService.getCart();
    
  }

  logout(){
    this.authservice.logout();
  }
  
}
