import { NgModule } from '@angular/core';
import { ShopOrderComponent } from '../shop-order/shop-order.component';
import { ShopItemComponent } from './../shop-item/shop-item.component';
import { ShopListComponent } from './../shop-list/shop-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {
    path  : "list",
    component  : ShopListComponent
  },
  {
    path : "item",
    component : ShopItemComponent
  },
  {
    path : "order",
    component : ShopOrderComponent
  },
  {
    path:"",
    pathMatch : "full",
    redirectTo : "list"
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
