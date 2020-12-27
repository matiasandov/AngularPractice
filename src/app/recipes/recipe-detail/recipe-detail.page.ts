import { Component, OnInit } from '@angular/core';
//este es un objeto de angular para ocupar el metodo de .activatedRoute.paramMap
//también se importo route para que al borrar algún dado elemento, 
//la ruta te direccione a la pagina principal, esto se ocupa en onDeleteRecipe
import { ActivatedRoute, Router } from '@angular/router';
//importamos servicio
import {RecipesService} from '../recipes.service';
//importamos clase recipe también porque se ocupará en el array
import {Recipe} from '../recipe.model';

//importamos alertController
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})

export class RecipeDetailPage implements OnInit {
// se importa el servicio tambien para llamar la funcion de dar getRecipe y guardarlo en 
//en el atributo de la clase loadedRecipe: Recipe
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    //también se importo route para que al borrar algún dado elemento, la ruta te direccione a la pagina principal, esto se ocupa en onDeleteRecipe
    private router: Router,
    private alertCtrl: AlertController) 
    
    { }

  //lo que llames del get de paramMap debe ser igual a lo que pusiste en el path de app.routing
  ngOnInit() {
    //.activatedRoute.paramMap es un observable para recibir los parametros que se recibiran de una ruta
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        //si no se encuentran en los parametros el recipeId se redirecciona a la pagina inicial
        this.router.navigate(['/recipes']);
        return;
      }
      //else, se llama al path = 'recipeId' en app-routing
      const recipeId = paramMap.get('recipeId');
      //usando el const de arriba, se llama el getter que definimos en el servicio
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    } );
  }
//listener de html que se enviara a la oage prinicpal 
onDeleteRecipe() {
  this.alertCtrl
    .create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            //primero se llama a la función para borrar la receta (componente recipe-detail) del listener de html
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            //ya que se borró, la pagina te redireccionará hacia /recipes o sea la pag principal
            this.router.navigate(['/recipes']);
          }
        }
      ]
    })
    .then(alertEl => {
      alertEl.present();
    });
}
}

