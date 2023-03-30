import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './view/guess/landing/landing.component';

const routes: Routes = [
  {
    path : "accueil",
    component : LandingComponent
  },
  {
    path : "",
    redirectTo : "accueil",
    pathMatch  : 'full'
  },
  {
    path : "v1",
    loadChildren : ()=> import('./modules/auth.module').then(m =>m.AuthModule)
  },
  {
    path : 'dashboard',
    loadChildren  : ()=> import('./modules/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path : "boutique",
    loadChildren : ()=> import('./modules/shopping.module').then(m => m.ShoppingModule)
  },
  {
    path : '**',
    loadComponent : ()=> import('./view/guess/notfound/notfound.component').then(c => c.NotfoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
