import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './view/guess/landing/landing.component';

const routes: Routes = [
  {
    path : "Landing",
    component : LandingComponent
  },
  {
    path : "",
    redirectTo : "Landing",
    pathMatch  : 'full'
  },
  {
    path : "Shop",
    loadChildren : ()=> import('./modules/shopping.module').then(m => m.ShoppingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
