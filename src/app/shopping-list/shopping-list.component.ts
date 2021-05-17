import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  ngOnInit(): void {}

  // Receive the input data from the shopping-edit
  // then pass the data to the ingredient array
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
