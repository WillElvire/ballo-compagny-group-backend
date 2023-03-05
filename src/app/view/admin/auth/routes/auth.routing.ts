import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from '../login/login.component';


const routes :  Routes = [
  {
    path : '',
    children : [
      {
        path:'login',
        component : LoginComponent
      },
      {
        path : 'register',
        component : LoginComponent
      },
      {
        path : '**',
        loadComponent : ()=> import('../../../guess/notfound/notfound.component').then(c => c.NotfoundComponent)
      },
      {
        path:'',
        redirectTo : 'login',
        pathMatch : 'full'
      }
    ]
  }

]

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class AuthRoutingModule {

}
