import { NgModule } from "@angular/core";
import { NavbarComponent } from "../components/tools/navbar/navbar.component";
import { BrowserModule } from "@angular/platform-browser";
import { TuiButtonModule } from "@taiga-ui/core";


@NgModule({
  declarations : [NavbarComponent],
  entryComponents : [],
  providers : [],
  imports : [
    BrowserModule,
    TuiButtonModule,
  ],
  exports : [NavbarComponent]
})

export class ComponentModule {

}
