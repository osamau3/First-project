import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {
  ingredients : Ingredient[];
  subscribtion : Subscription;
  constructor(private slSerive  : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slSerive.getIngredient();
    this.subscribtion = this.slSerive.ingredientChaged
    .subscribe(
      (ingredient : Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }
}
