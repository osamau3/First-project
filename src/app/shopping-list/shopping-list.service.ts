import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientChaged = new Subject<Ingredient[]>();
  private ingredients : Ingredient[] =  [
    new Ingredient('Apples' , 5),
    new Ingredient('Tomatos' , 3)
  ];
  getIngredient(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChaged.next(this.ingredients.slice());
  }
}
