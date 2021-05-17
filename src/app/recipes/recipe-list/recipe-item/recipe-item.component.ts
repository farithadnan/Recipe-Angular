import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // Make recipe bindable to the outside compartment
  // recipe has inherit skeleton property from Recipe model.
  @Input() recipe: Recipe;

  // Event emitter for when user click the link box of recipe item
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  // Emit user click and pass to recipe list to handle before passing to recipe compartment
  onSelected() {
    this.recipeSelected.emit();
  }
}
