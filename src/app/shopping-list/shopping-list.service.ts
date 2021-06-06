import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  // This emitter used to catch the latest added ingredient
  // So that the new ingredient will then be preview to the template
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  // slice() will copy from the original array
  // This will not affect the original one
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);

    // below will update the choosen ingredient event and emitted
    // to the needed component
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  // This method is use to preview the selected ingredient
  // From the recipe page/component
  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    // not suitable lots of event and make the app slow
    // }

    // (...) this will spread an array into an array
    // then able to store/push to another array
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
