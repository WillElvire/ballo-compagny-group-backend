
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ModalService } from '../services/modals/jw-modal';
import { AppFacades } from '../facades/app.facades';


@NgModule({
  declarations : [

  ],
  imports : [
    CommonModule
  ],
  providers : [
    ModalService,
    AppFacades,
  ],
  entryComponents : []
})
export class ServiceModule {

}
