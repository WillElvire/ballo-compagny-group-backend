import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { NavbarComponent } from "../components/tools/navbar/navbar.component";
import { TuiButtonModule } from "@taiga-ui/core";
import { CommonModule } from "@angular/common";
import { ShoppingCardComponent } from '../components/widgets/shopping-item/shopping-item.component';
import {TuiInputModule, TuiIslandModule} from '@taiga-ui/kit';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";
import { BackButtonComponent } from '../components/shared/back-button/back-button.component';
import { OrderFormComponent } from '../components/modals/order-form/order-form.component';

@NgModule({
  declarations : [NavbarComponent , ShoppingCardComponent, BackButtonComponent,OrderFormComponent,],
  entryComponents : [],
  providers : [],
  imports : [
    CommonModule,
    TuiButtonModule,
    RouterModule,
    TuiIslandModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: "rgba(0,0,0,0.1)",
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff",
    }),
  ],
  exports : [NavbarComponent,ShoppingCardComponent,BackButtonComponent,OrderFormComponent,]
})

export class ComponentModule {

}
