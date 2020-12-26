import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   //borras los corchetes que había para home y sólo dejas estos dos
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    //children son las rutas a las que irá este obtjeto
    children: [
      {
        path: '',
        loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule)
      },
      {
        //aqui estás indicando que cuando le piques a un recipe id, se direccionará
        //a la pagina creada de recipe-detail
        path: ':recipeId',
        loadChildren:
          './recipes/recipe-detail/recipe-detail.module#RecipeDetailPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

