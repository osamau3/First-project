import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private route: Router, private activeRoute: ActivatedRoute, private RecipeServie: RecipeService) { }

  ngOnInit() {
    this.recipes = this.RecipeServie.getRecipes();
  }
  onNewRecipe() {
    this.route.navigate(['new'], { relativeTo: this.activeRoute });
  }

}

