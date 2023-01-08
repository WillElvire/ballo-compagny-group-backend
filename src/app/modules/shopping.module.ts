import { NgModule } from "@angular/core";
import { ShoppingRoutingModule } from "../view/guess/shopping/routes/shopping.routes";
import { ShopListComponent } from "../view/guess/shopping/shop-list/shop-list.component";
import { ShopItemComponent } from "../view/guess/shopping/shop-item/shop-item.component";
import { ShopOrderComponent } from "../view/guess/shopping/shop-order/shop-order.component";
import { ShoppingItemComponent } from "../components/widgets/shopping-item/shopping-item.component";

@NgModule({
  declarations : [
    ShopListComponent,
    ShopItemComponent,
    ShopOrderComponent,
    ShoppingItemComponent,
  ],
  imports : [ShoppingRoutingModule],
  providers : [],
  entryComponents : []
})
export class ShoppingModule {

}
