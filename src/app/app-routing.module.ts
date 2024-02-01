import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  {path:'add' ,component:AjoutComponent},
  {path:'list', component:ListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
