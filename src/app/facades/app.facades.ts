
import { Injectable } from '@angular/core';
import { ModalService } from '../services/modals/jw-modal';
import { AlertService } from '../utils/alert';
import { VerificationService } from '../services/data/verification.service';
import { StorageService } from '../services/storage';

@Injectable()
export class AppFacades {

  constructor(
    private modalService : ModalService ,
    private alertService : AlertService ,
    private verificationService : VerificationService,
    private storageService : StorageService
  ){

  }

  //modal service
  openModal(id: string) {
    return this.modalService.open(id);
  }
  closeModal(id: string) {
    return this.modalService.close(id);
  }

  // alert service
  alertError(message : string ){
    return this.alertService.setMessage(message).error();
  }
  alertSuccess(message : string ){
    return this.alertService.setMessage(message).success();
  }
  alertWarning(message : string ){
    return this.alertService.setMessage(message).warning();
  }
  alertInfo(message : string ){
    return this.alertService.setMessage(message).info();
  }
  //verify fields service
  verifyIfEmail(email:string) {
    return this.verificationService.verifyIfEmail(email);
  }
  verifyObj(obj : {}) {
    return this.verificationService.verifyObj(obj);
  }
  verifyField(field  : string) {
    return this.verificationService.verifyField(field);
  }
  verifyFieldLength(field :string , size : number){
    return this.verificationService.verifyFieldLength(field , size);
  }
  // storage

  get(key : string )  {
    return this.storageService.get(key);
  }

  set(key :string , value : string) {
    this.storageService.set(key,value);
  }


}
