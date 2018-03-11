import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientChaged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients : Ingredient[] =  [
    new Ingredient('Apples' , 5),
    new Ingredient('Tomatos' , 3)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  getIngredient(index : number){
    return this.ingredients[index];
  }
  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChaged.next(this.ingredients.slice());
  }
  updateIngredient(index : number , newIngredient : Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientChaged.next(this.ingredients.slice());
  }
  deleteIngredient(index : number){
    this.ingredients.splice(index , 1);
    this.ingredientChaged.next(this.ingredients.slice());
  }
}
