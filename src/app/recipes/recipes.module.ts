import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//agregue esta linea de abajo para que funcione los de routes de abajo
import{ Routes, RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';

import { RecipeItemComponent } from './recipe-item/recipe-item.component';


//esto tambien lo agregue para hacer una ruta hacia la pagina principal 
const routes: Routes = [
  {
  path: '',
  component: RecipesPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule
  ],
  //aquí deben ir los componentes que quieras usar
  declarations: [RecipesPage, RecipeItemComponent]
})
export class RecipesPageModule {}
