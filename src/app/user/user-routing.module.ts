import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path:"", component:LandingComponent , children:[
    {path:"", component:DashboardComponent},
    {path:"dashboard" ,component:DashboardComponent},
    {path:"posts" , component:PostsComponent},
    {path:"**" , component:DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
