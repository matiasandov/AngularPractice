//esto es state management
import { Injectable } from '@angular/core';
//debes importar clase Recipe de .model para que sea posible el array
import { Recipe } from './recipe.model';
//al poner root se indica que se podrá ocupar en cualquier parte de la app
//por lo que si los datos cambian en un algún componente, cambiarán en todos
//en cuanto a datos me refiero a el spaguetti o al schpritznel 
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  //este es un array de tipo Recipe que es el que se importo arriba
  //este array se referencia en el *ngFor en el html
  private recipes: Recipe [] = [{
    id: 'r1',
    title: 'Schitnitzel',
    imageUrl: 'https://static.onecms.io/wp-content/uploads/sites/21/2018/04/24/hot-cakes-esponjosos-estilo-americano.jpg-2000.jpg',
    ingredients: ['papatatas',' harina']
  },
  {
    id: 'r2',
    title: 'Spaguetti',
    imageUrl: 'https://t1.rg.ltmcdn.com/es/images/4/7/4/img_spaguetti_con_pimientos_31474_orig.jpg',
    ingredients: ['carne',' pasta']
  }
]
  constructor() { }

  //metodo para regresar el array original de recipes
  getAllRecipes(){
    //el operador de 3 puntos es para indicar que se regresará todo lo
    //que se extrae todo lo de this.recipes y se pone en este array
    return [...this.recipes]
  }

  //devolver la receta buscada por su ida
  getRecipe(recipeId: string){
    //dentro del array recipes, para cada objeto tipo recipe
    return {
      //al agregarle los ... y encerrar el return en {} estás indicando que todas 
      //las propiedades del objeto encontrado se agregarán a un nuevo objeto que será el que se devolverá
      ...this.recipes.find( recipe =>{
      //buscara si su id es igual al ingresado en el parametro
      //creo que el operador === es como
      return recipe.id === recipeId;
    }) };

  }
}
