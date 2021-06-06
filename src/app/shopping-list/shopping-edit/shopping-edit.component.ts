import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,

} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // Using local reference method @viewChild to get the value from an input directly without sending thru method
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;

  // ingredientAdded = new EventEmitter<{ name: string; amount: number }>(); -> without ingredient model


  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  // Method that execute when click add button

  onAddItem() {
    // this will get the value from an input using @viewchild local ref method
    // then it also emits the input with created event @Output() to the shopping-list compartment

    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    // Refer Ingredient model when adding input and assign to property
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
