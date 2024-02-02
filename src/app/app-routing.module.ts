import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListeComponent } from './liste/liste.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/add' ,pathMatch:'full' },
  {path:'add' ,component:AjoutComponent},
  {path:'list', component:ListeComponent},

  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
