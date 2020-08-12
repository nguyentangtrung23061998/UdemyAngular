import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;

  constructor(private recipeService:RecipeService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params)=>{
        this.id= +param['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
      }
    )
  }

  onEditRecipe(){
    // this.router.navigate(['edit'],{relativeTo:this.route});
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }

  // onAddToShoppingList(){
  //   this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  //   console.log(this.recipe.ingredients)
  // }
}
