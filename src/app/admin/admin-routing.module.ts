import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {path:"", component:LandingComponent , children:[
    {path:"" , component:DashboardComponent},
    {path:"dashboard", component:DashboardComponent},
    {path:"users", component:UsersComponent},
    {path:"**" , component:DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
