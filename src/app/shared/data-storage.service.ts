import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { RecipeService } from "./recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class dataStorageService {
    constructor(private http: Http, private recipe: RecipeService) {
    }
    storeRecipe() {
        return this.http.put('https://ng-recipe-book-158ed.firebaseio.com/recipes.json', this.recipe.getRecipes());
    }
    getRecipes() {
        this.http.get('https://ng-recipe-book-158ed.firebaseio.com/recipes.json')
            .map(
                (response: Response) => {
                    const recipe: Recipe[] = response.json();
                    for (let recipes of recipe) {
                        if (!recipe['ingredients']) {
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipe;
                }
            )
            .subscribe(
                (recipe: Recipe[]) => {
                    this.recipe.setRecipes(recipe);
                }
            )
    }
}