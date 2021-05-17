import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // Emits an event by binding the Recipe model to the event because the returning that is recipe model and its value
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // Recipe[] refering to the recipe model
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'a description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'
    ),
    new Recipe(
      'Another test recipe',
      'a description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  // Receive an event from recipe item, (recipe item compartment -> recipe list compartment)
  // then send recipeEl from for loop to the method onRecipeSelected to chooose the selected recipe (recipe list -> send to method for emits process)
  // then emits that data to recipe compartment (recipe list compartment -> recipe compartment)

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
