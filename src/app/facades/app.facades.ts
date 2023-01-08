
import { Injectable } from '@angular/core';
import { ModalService } from '../services/modals/jw-modal';



@Injectable()

export class AppFacades {



  constructor( private modalService : ModalService){

  }


  openModal(id: string) {
    return this.modalService.open(id);
  }

  closeModal(id: string) {
    return this.modalService.close(id);
  }



}
