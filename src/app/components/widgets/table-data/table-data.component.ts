import { IMarque, IProduct, IProductFullInfo } from 'src/app/core/interface';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppFacades } from 'src/app/facades/app.facades';
import { take } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { uid } from 'chart.js/dist/helpers/helpers.core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDataComponent implements OnInit {
  @Input() headers!: string[];
  @Input() datas: any[] = [];
  @Input() buttons: string[] = ['modifier', 'supprimer'];
  @Input() type: string = 'command';
  @Input() filter: boolean = true;
  @Output() updateEvent = new EventEmitter<boolean>();

  updateData: IProductFullInfo = {
    title: '',
    quantity: 0,
    price: 0,
  };
  category: string = '';
  marques: Omit<IMarque, 'id' | 'isActive'>[] = [];
  p: number = 1;

  constructor(public appFacades: AppFacades, private modal: NzModalService) {}

  ngOnInit(): void {
    this.getMarques();
  }

  getCategorie(event: string) {
    this.category = event;
  }

  createControl(value: number | string) {
    return new FormControl(value == '1' || value == 1 ? true : false);
  }

  changeUserStatus(isActive: number, guid: string) {
    this.appFacades
      .updateUserStatus({ isActive: isActive == 1 ? 0 : 1, guid })
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          console.log(response);
          this.updateEvent.emit(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getMarques() {
    this.appFacades
      .getMarques()
      .pipe(take(1))
      .subscribe((response: any) => {
        response.data.forEach((element: any) =>
          this.marques.push(element.name)
        );
        console.log(this.marques);
      });
  }

  deleteUser(guid: string) {
    console.log(guid);
    this.appFacades
      .deleteUser(guid)
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          console.log(response);
          this.updateEvent.emit(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  openModal(id: string, data: any) {
    this.appFacades.openModal(id);
    this.updateData = data;
  }

  delete(guid: string) {
    this.appFacades
      .deleteProduct(guid)
      .pipe(take(1))
      .subscribe({
        next: (response: any) => {
          this.appFacades.alertSuccess(response.message);
          this.updateEvent.emit(true);
        },
        error: (err: any) => {
          this.appFacades.alertError(err.message);
          console.log(err);
        },
        complete: () => {},
      });
  }


  showDeleteConfirm(guid : string , type : string = "product"): void {
    this.modal.confirm({
      nzTitle: 'Voulez vous vraiment supprimer?',
      nzContent: '<b style="color: red;">Cette action est irreversible</b>',
      nzOkText: 'Oui',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {this.doTheCorrectDeleteAction(guid, type)},
      nzCancelText: 'non',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  doTheCorrectDeleteAction(guid : string ,type : string) {
    switch(type) {
      case 'product' :
       return this.delete(guid);
      case 'user' :
        return this.deleteUser(guid)
    }
  }

  update() {
    this.appFacades.updateProduct(this.updateData).subscribe((response :any) => {
      if(!!response) {
        this.appFacades.alertSuccess(response.message);
        this.updateEvent.emit(true);
        this.appFacades.closeModal("updateForm");
      }

      console.log(response);
    });
    console.log(this.updateData);
  }
}
