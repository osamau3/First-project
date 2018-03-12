import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit , OnDestroy {
  recipes: Recipe[];
  subscription : Subscription;
  constructor(private route: Router, private activeRoute: ActivatedRoute, private RecipeServie: RecipeService) { }

  ngOnInit() {
    this.subscription = this.RecipeServie.recipesChanged
    .subscribe((recipe : Recipe[]) =>{
      this.recipes = recipe;
    })
    this.recipes = this.RecipeServie.getRecipes();

  }
  onNewRecipe() {
    this.route.navigate(['new'], { relativeTo: this.activeRoute });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

