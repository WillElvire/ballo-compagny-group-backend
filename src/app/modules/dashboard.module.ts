import { IconsProviderModule } from './../icons-provider.module';
import {
  TuiBadgeModule,
  TuiInputModule,
  TuiIslandModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommandComponent } from '../view/admin/dashboard/command/command.component';
import { IndexComponent } from '../view/admin/dashboard/index/index.component';
import { DashboardRouting } from '../view/admin/dashboard/routes/dashboard.routing';
import { ParametreComponent } from '../view/admin/dashboard/parametre/parametre.component';
import { HistoryComponent } from '../view/admin/dashboard/history/history.component';
import { ProductComponent } from '../view/admin/dashboard/product/product.component';
import { ReportingComponent } from '../view/admin/dashboard/reporting/reporting.component';
import { TuiLoaderModule } from '@taiga-ui/core';
import { ComponentModule } from './components.module';
import { CategorieComponent } from '../view/admin/dashboard/categorie/categorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../view/admin/dashboard/detail/detail.component';
import { UsersComponent } from '../view/admin/dashboard/users/users.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [
    CommandComponent,
    IndexComponent,
    ParametreComponent,
    HistoryComponent,
    ProductComponent,
    ReportingComponent,
    CategorieComponent,
    DetailComponent,
    UsersComponent,
  ],
  imports: [
    DashboardRouting,
    TuiInputModule,
    TuiIslandModule,
    ComponentModule,
    TuiToggleModule,
    FormsModule,
    CommonModule,
    NzButtonModule,
    ReactiveFormsModule,
    TuiLoaderModule,
    TuiBadgeModule,
    NzLayoutModule,
    NzMenuModule,
    NzSpinModule,
    IconsProviderModule,

  ],
  exports: [CommandComponent, IndexComponent],
  entryComponents: [],
})
export class DashboardModule {}
