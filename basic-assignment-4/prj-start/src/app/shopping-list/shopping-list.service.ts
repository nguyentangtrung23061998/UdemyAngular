import { Ingredient } from "../shared/ingredient.modal";
import { EventEmitter, Output, Injectable, OnInit } from "@angular/core";

@Injectable()
export class ShoppingListService implements OnInit {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getShoppingList() {
        return this.ingredients.slice();
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
        console.log(this.ingredients);
    }

    ngOnInit(){

    }
}