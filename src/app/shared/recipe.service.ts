import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'Description test 1', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
      [
        new Ingredient('fish', 1),
        new Ingredient('beard', 5)
      ]),
    new Recipe('A test recipe 2', 'Description test 2', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
      [
        new Ingredient('meat', 2),
        new Ingredient('fresh firze', 12)
      ]
    )
  ];

  constructor() { }
  getRecipes() {
    return this.recipes.slice();
  }
  getselectedRecipe(recipe: Recipe) {
    return this.recipeSelected.emit(recipe);
  }
}
