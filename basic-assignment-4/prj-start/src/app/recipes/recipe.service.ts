import { Recipe } from "./recipe.modal";
import { EventEmitter, Output, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.modal";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService : ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe('A new Test Recipe',
                    'This is simply a test', 
                    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/7/22/3/FNM090116_Grilled-Steak-and-Greek-Corn-Salad_s4x3.jpg.rend.hgtvcom.966.725.suffix/1469255050835.jpeg',
                    [
                        new Ingredient('Meat', 1),
                        new Ingredient('French Fries',20)
                    ]),
        new Recipe('A new Test Recipe1', 
                    'This is simply a test', 
                    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/7/22/3/FNM090116_Grilled-Steak-and-Greek-Corn-Salad_s4x3.jpg.rend.hgtvcom.966.725.suffix/1469255050835.jpeg',
                    [
                        new Ingredient('Buff', 1),
                        new Ingredient('banana',20)  
                    ])
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}