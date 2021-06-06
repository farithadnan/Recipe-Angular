import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list', 
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  // Will call the service that we want to inject to this component
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    // This will get the copied of the original array
    // then it will be assign to this component array
    this.ingredients = this.shoppingListService.getIngredients();

    // This will get/subcribe to the change
    // whenever user added a new product
    // and the latest data will be display to the list
    this.shoppingListService.ingredientChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
