import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { TuiBadgeModule, TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ShoppingRoutingModule } from "../view/guess/shopping/routes/shopping.routes";
import { ShopListComponent } from "../view/guess/shopping/shop-list/shop-list.component";
import { ShopItemComponent } from "../view/guess/shopping/shop-item/shop-item.component";
import { ShopOrderComponent } from "../view/guess/shopping/shop-order/shop-order.component";
import { ComponentModule } from "./components.module";
import {TuiButtonModule, TuiDataListModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TuiInputCountModule} from '@taiga-ui/kit';
import { ServiceModule } from './services.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations : [
    ShopListComponent,
    ShopItemComponent,
    ShopOrderComponent,
  ],
  imports : [
    ShoppingRoutingModule ,
    ComponentModule,
    CommonModule,
    TuiInputModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiInputCountModule,
    TuiIslandModule,
    TuiNotificationModule,
    TuiBadgeModule,
    ServiceModule,
    NzSpinModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzSelectModule
  ],
  providers : [],
  entryComponents : []
})
export class ShoppingModule {

}
