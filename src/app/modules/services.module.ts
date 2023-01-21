
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ModalService } from '../services/modals/jw-modal';
import { AppFacades } from '../facades/app.facades';
import { AlertService } from '../utils/alert';
import { VerificationService } from '../services/data/verification.service';
import { StorageService } from '../services/storage';


@NgModule({
  declarations : [

  ],
  imports : [
    CommonModule
  ],
  providers : [
    ModalService,
    AlertService,
    VerificationService,
    StorageService,
    AppFacades,

  ],
  entryComponents : []
})
export class ServiceModule {

}
