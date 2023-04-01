import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"", pathMatch:"full", loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path:"admin", canActivate:[AdminGuard],loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"user",  canActivate:[UserGuard],loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
