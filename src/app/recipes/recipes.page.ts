//importar destructor
import { Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from './recipe.model';
//debes obvio importar el servicio igual
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
//esta es una clase
export class RecipesPage implements OnInit, OnDestroy {
  //el array se inicializa abajo
  recipes: Recipe[];
 //se inyectará el servicio para recipes para obtener el array de recetas
 //recipesService es un atributo que hereda las propiedades de la clase del servicio
  constructor(private recipesService: RecipesService) { }

  //esto solo se ejecuta una vez en el stack
  ngOnInit() {
    //ngOnInit es la manera de inicializar tu clase con métodos
    this.recipes = this.recipesService.getAllRecipes();
  }

  //
  ionViewDidEnter(){
    console.log('view did enter');
    
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    console.log('se destruyo');
    
  }

}
