import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe : Recipe;
  id : number;
  constructor(private router : Router , private recipeService : RecipeService , private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (param : Params) => {
        this.id = +param['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
    }
  );
  }
  onEditRecipe(){
    this.router.navigate(['edit'] , { relativeTo: this.route});
  }

}
