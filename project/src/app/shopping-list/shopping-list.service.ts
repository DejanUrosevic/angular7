import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingrediantChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 3)
      ];

    getIngrediants() {
        return this.ingredients.slice();
    }

    onAddedIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingrediantChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingrediantChanged.next(this.ingredients.slice());
    }
}