import { TuiInputModule, TuiIslandModule, TuiToggleModule } from '@taiga-ui/kit';
import { NgModule } from "@angular/core";
import { CommandComponent } from "../view/admin/dashboard/command/command.component";
import { IndexComponent } from "../view/admin/dashboard/index/index.component";
import { DashboardRouting } from "../view/admin/dashboard/routes/dashboard.routing";
import { ParametreComponent } from '../view/admin/dashboard/parametre/parametre.component';
import { HistoryComponent } from '../view/admin/dashboard/history/history.component';
import { ProductComponent } from '../view/admin/dashboard/product/product.component';
import { ReportingComponent } from '../view/admin/dashboard/reporting/reporting.component';
import { TuiButtonModule, TuiLoaderModule } from "@taiga-ui/core";
import { ComponentModule } from './components.module';
import { CategorieComponent } from '../view/admin/dashboard/categorie/categorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TuiInputFilesModule} from '@taiga-ui/kit'

@NgModule({
  declarations : [CommandComponent,IndexComponent, ParametreComponent, HistoryComponent, ProductComponent, ReportingComponent, CategorieComponent],
  imports : [DashboardRouting, TuiButtonModule,TuiInputModule , TuiIslandModule , ComponentModule , TuiToggleModule , FormsModule, CommonModule,TuiInputFilesModule,ReactiveFormsModule,TuiLoaderModule],
  exports : [CommandComponent,IndexComponent],
  entryComponents  : []
})
export class  DashboardModule {
}

