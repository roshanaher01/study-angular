import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.molel';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe []=[
    new Recipe('test Vange','Test vange is testy','http://kamalkitchen.com/wp-content/uploads/2014/07/bharli-vangi.jpg' ),
    new Recipe('test Methi','Test methi is very testy','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKX4kMsbHR0r3q9Rl5-b1vUxnZtEWxBuD7uZc_YpstFsHBfhGX' )
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes);    
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
