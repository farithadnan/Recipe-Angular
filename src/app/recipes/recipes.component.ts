import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
    // Declaring to the parent,
  // so that it can be inject to its component
  providers: [RecipeService]

})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // this will get the emit event from the service
    // subscribe, will detect if there's any change to the recipe
    // and then it will assign the emits selected recipe to the
    // selectedRecipeVariable
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
