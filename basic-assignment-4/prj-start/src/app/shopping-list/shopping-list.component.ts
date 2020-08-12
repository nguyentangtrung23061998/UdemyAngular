import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients=[];
  constructor(private shoppingListService:ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = ingredients;
      }
    )
  }

}
