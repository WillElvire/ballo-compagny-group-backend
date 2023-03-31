import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { CommandComponent } from '../command/command.component';
import { AdminLayoutComponent } from 'src/app/layouts/admin-layout/admin-layout.component';
import { ProductComponent } from '../product/product.component';
import { HistoryComponent } from '../history/history.component';
import { ParametreComponent } from '../parametre/parametre.component';
import { CategorieComponent } from '../categorie/categorie.component';
import { DetailComponent } from '../detail/detail.component';
import { ReportingComponent } from '../reporting/reporting.component';
import { AccessGuard } from 'src/app/guards/adminGuards/access.guard';
import { UsersComponent } from '../users/users.component';
import { StaffRoleGuard } from 'src/app/guards/adminGuards/staffRole.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AccessGuard],
    children: [
      {
        path: 'home',
        component: IndexComponent,
        canActivate: [StaffRoleGuard],
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'commandes',
        component: CommandComponent,
      },
      {
        path: 'products',
        component: ProductComponent,
      },
      {
        path: 'categorie',
        component: CategorieComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
      {
        path: 'detail/command/:guid',
        component: DetailComponent,
      },
      {
        path: 'parametre',
        component: ParametreComponent,
      },
      {
        path: 'reporting',
        component: ReportingComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRouting {}
