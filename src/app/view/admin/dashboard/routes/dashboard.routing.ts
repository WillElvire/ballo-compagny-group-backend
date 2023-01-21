import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "../index/index.component";
import { CommandComponent } from "../command/command.component";
import { AdminLayoutComponent } from "src/app/layouts/admin-layout/admin-layout.component";
import { ProductComponent } from "../product/product.component";
import { HistoryComponent } from "../history/history.component";
import { ParametreComponent } from "../parametre/parametre.component";

const routes  : Routes = [
  {
    path :'v1',
    component : AdminLayoutComponent,
    children : [
      {
        path : 'home',
        component : IndexComponent
      },
      {
        path : 'commandes',
        component : CommandComponent
      },
      {
        path : 'products',
        component : ProductComponent
      },
      {
        path : 'history',
        component : HistoryComponent
      },
      {
        path : 'parametre',
        component :  ParametreComponent
      },
      {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full'
      }
    ]
  }

]

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class DashboardRouting {

}
