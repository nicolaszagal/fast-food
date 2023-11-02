import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./cocinero/components/home/home.component";
import {FastfoodtableComponent} from "./cocinero/components/fastfoodtable/fastfoodtable.component";


const routes: Routes = [

  {path: 'home',  component: HomeComponent},
  {path: 'table', component: FastfoodtableComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
