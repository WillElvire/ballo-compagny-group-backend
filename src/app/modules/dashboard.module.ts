import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { NgModule } from "@angular/core";
import { CommandComponent } from "../view/admin/dashboard/command/command.component";
import { IndexComponent } from "../view/admin/dashboard/index/index.component";
import { DashboardRouting } from "../view/admin/dashboard/routes/dashboard.routing";
import { ParametreComponent } from '../view/admin/dashboard/parametre/parametre.component';
import { HistoryComponent } from '../view/admin/dashboard/history/history.component';
import { ProductComponent } from '../view/admin/dashboard/product/product.component';
import { ReportingComponent } from '../view/admin/dashboard/reporting/reporting.component';
import { TuiButtonModule } from "@taiga-ui/core";
import { ComponentModule } from './components.module';

@NgModule({
  declarations : [CommandComponent,IndexComponent, ParametreComponent, HistoryComponent, ProductComponent, ReportingComponent],
  imports : [DashboardRouting, TuiButtonModule,TuiInputModule , TuiIslandModule , ComponentModule],
  exports : [CommandComponent,IndexComponent],
  entryComponents  : []
})
export class  DashboardModule {
}

