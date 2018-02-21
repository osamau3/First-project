import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] ;
  constructor(private RecipeServie : RecipeService) { }

  ngOnInit() {
    this.recipes = this.RecipeServie.getRecipes();
  }
}
