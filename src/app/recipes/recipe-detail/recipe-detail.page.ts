import { Component, OnInit } from '@angular/core';
//este es un objeto de angular para ocupar el metodo de .activatedRoute.paramMap
import { ActivatedRoute } from '@angular/router';
//importamos servicio
import {RecipesService} from '../recipes.service';
//importamos clase recipe también porque se ocupará en el array
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})

export class RecipeDetailPage implements OnInit {
// se importa el servicio tambien para llamar la funcion de dar getRecipe y guardarlo en 
//en el atributo de la clase loadedRecipe: Recipe
  loadedRecipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService) { }

  //lo que llames del get de paramMap debe ser igual a lo que pusiste en el path de app.routing
  ngOnInit() {
    //.activatedRoute.paramMap es un observable para recibir los parametros que se recibiran de una ruta
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        //si no se encuentran en los parametros el recipeId se redirecciona
        return;
      }
      //else, se llama al path = 'recipeId' en app-routing
      const recipeId = paramMap.get('recipeId');
      //usando el const de arriba, se llama el getter que definimos en el servicio
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    } );
  }

}
