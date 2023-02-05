import { AppFacades } from 'src/app/facades/app.facades';
import { IMarque, IProduct, IProductFullInfo } from 'src/app/core/interface';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TuiFileLike } from '@taiga-ui/kit';
import { maxFilesLength } from 'src/app/services/functions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  datas: IProductFullInfo[] = [];
  successMessage = '';
  isLoaded: boolean = true;
  enableProductForm: boolean = false;
  readonly control = new FormControl([], [maxFilesLength(3)]);
  rejectedFiles: readonly TuiFileLike[] = [];
  marques: Omit<IMarque, 'isActive'>[] = [];

  product: Omit<IProduct, 'guid'> = {
    description: '',
    titre: '',
    marque_id: '',
    quantity: 1,
    price: 0,
    dateLivraison: new Date(),
  };

  constructor(private AppFacades: AppFacades) {
    this.loadProducts();
  }
  ngOnInit(): void {
    this.getMarque();

    this.control.statusChanges.subscribe((response) => {
      console.info('STATUS', response);
      console.info('ERRORS', this.control.errors, '\n');
    });
  }

  onReject(files: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];
  }

  removeFile({ name }: File): void {
    this.control.setValue(
      this.control.value?.filter((current: File) => current.name !== name) ?? []
    );
  }

  clearRejected({ name }: TuiFileLike): void {
    this.rejectedFiles = this.rejectedFiles.filter(
      (rejected) => rejected.name !== name
    );
  }

  getMarque() {
    this.AppFacades.getMarques().subscribe((response: any) => {
      this.marques = response.data;
    });
  }

  addNewProduct() {
    const log = this.AppFacades.verifyObj(this.product);
    if (log.count > 0) return this.addError(log.index as number[]);

    this.AppFacades.addNewProduct(this.product).subscribe((response: any) => {
      this.successMessage = response.message;
      console.log(response);
      if (response.status == 200) {
        this.AppFacades.alertSuccess(this.successMessage);
        this.enableProductForm = false;
        this.resetFields();
        this.loadProducts();
      }
    });
  }

  resetFields() {
    this.product = {
      description: '',
      titre: '',
      marque_id: '',
      quantity: 1,
      price: 0,
      dateLivraison: new Date(),
    };
  }
  addError(index: number[]) {
    return index.forEach((element) => {
      this.AppFacades.alertError(
        `Veuillez renseigner ${Object.keys(this.product)[element]}`
      );
    });
  }

  loadProducts() {
    this.AppFacades.loadProducts().subscribe(
      (response) => {
        this.datas = response as IProductFullInfo[];
        this.isLoaded = false;
        console.log(this.datas);
      },
      (err) => (this.isLoaded = false)
    );
  }

  productEvent(event: boolean) {
    if (event) {
      this.loadProducts();
    }
  }
}
