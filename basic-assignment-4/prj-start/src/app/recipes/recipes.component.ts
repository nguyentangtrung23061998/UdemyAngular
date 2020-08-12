import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  // onRecipeSelect(data){
  //   this.selectedRecipe= data;
  // }
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    )
  }

}
