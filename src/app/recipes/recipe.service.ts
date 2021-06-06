import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // This will emits an event when the service and this property is called
  recipeSelected = new EventEmitter<Recipe>();

  // Make it private so that it cant be access directly from outside
  private recipes: Recipe[] = [
    new Recipe(
      'Nasi Lemak Bosskur',
      'Nasi Lemak berserta kriuk-kriuk ikan bilis yang enak',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
      [
        new Ingredient('Nasi', 1),
        new Ingredient('Telur Rebus', 2),
        new Ingredient('Ikan Bilis Kriuk', 30),
        new Ingredient('Sambal', 1),
      ]
    ),
    new Recipe(
      'Bakso Cik Bosskur',
      'Bakso yang diimport khas daripada kayangan',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
      [
        new Ingredient('Mee', 2),
        new Ingredient('MeatBall', 6),
        new Ingredient('Kuah', 1),
      ]
      ),
  ];
  constructor(private shoppingService: ShoppingListService) {}

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// where start and end represent the index of items in that array.
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this will pass the ingredient array to the shoppingservice
    this.shoppingService.addIngredients(ingredients);
  }
}
