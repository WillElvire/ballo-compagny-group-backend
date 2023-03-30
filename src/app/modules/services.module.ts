
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ModalService } from '../services/modals/jw-modal';
import { AppFacades } from '../facades/app.facades';
import { AlertService } from '../utils/alert';
import { VerificationService } from '../services/data/verification.service';
import { StorageService } from '../services/storage';
import { CookieStorageService } from '../services/storage/cookie';
import { UserAuthentificationService } from '../services/auth';
import { NotificationService } from '../core/helpers/notification.service';
import { MessageService } from '../core/helpers/message.service';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMessageServiceModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations : [

  ],
  imports : [
    CommonModule,
    NzNotificationModule,
    NzMessageServiceModule,
  ],
  providers : [
    ModalService,
    AlertService,
    VerificationService,
    StorageService,
    CookieStorageService,
    UserAuthentificationService,
    NotificationService,
    MessageService,
    AppFacades,

  ],
  entryComponents : []
})
export class ServiceModule {

}
