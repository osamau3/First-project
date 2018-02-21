import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChaged = new EventEmitter<Ingredient[]>();
  private ingredients : Ingredient[] =  [
    new Ingredient('Apples' , 5),
    new Ingredient('Tomatos' , 3)
  ];
  getIngredient(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChaged.emit(this.ingredients.slice());
  }
}
