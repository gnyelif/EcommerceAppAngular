import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path:'create' , component: CreateComponent  },
  { path:"list", component:ListComponent},
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



