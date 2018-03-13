import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  index : number;
  private recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'Description test 1', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
      [
        new Ingredient('fish', 1),
        new Ingredient('beard', 5)
      ]),
    new Recipe('A test recipe 2', 'Description test 2', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg',
      [
        new Ingredient('meat', 2),
        new Ingredient('fresh firze', 12)
      ]
    )
  ];

  constructor() { }
  setRecipes(recipes : Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index) {
    return this.recipes[index];
  }
  addRecipe(recipe : Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index : number , recipe : Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index : number){
    this.recipes.splice(index , 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
