import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[];
  constructor(private slSerive  : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slSerive.getIngredient();
    this.slSerive.ingredientChaged
    .subscribe(
      (ingredient : Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }
}
