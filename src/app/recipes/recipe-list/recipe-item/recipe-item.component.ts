import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // Make recipe bindable to the outside compartment
  // recipe has inherit skeleton property from Recipe model.
  @Input() recipe: Recipe;


  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  // Emit user click and pass to recipe list to handle before passing to recipe compartment
  onSelected() {
    // This will pass/emit the data that user have input/choose in the template
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
