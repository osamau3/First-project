import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('A test recipe 1' , 'Description test 1', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('A test recipe 2' , 'Description test 2', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected( recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
