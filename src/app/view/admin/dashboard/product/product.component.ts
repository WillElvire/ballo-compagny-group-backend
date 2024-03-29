import { AppFacades } from 'src/app/facades/app.facades';
import { IMarque, IProduct, IProductFullInfo } from 'src/app/core/interface';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';


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
  files = [];
  confirm : boolean = false;
  isSpinning : boolean = true;
  marques: Omit<IMarque, 'isActive'>[] = [];
  fileUrl : string = "";

  product: Omit<IProduct, 'guid'> = {
    description: '',
    title: '',
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
  }

  getMarque() {
    this.AppFacades.getMarques().subscribe((response: any) => {
      this.marques = response.data;
    });
  }


  onFileSelected(event : any) {
    const file: File = event.target.files[0];

    this.AppFacades.addImages(file).then((response : {result : boolean , url :string})=>{
      this.confirm = response.result as boolean;

      this.fileUrl = response.url;
    }).catch(
      (err)=>{

        this.confirm = false;
      }
    );
    return;
  }

  addNewProduct() {
    const log = this.AppFacades.verifyObj(this.product);
    if (log.count > 0) return this.addError(log.index as number[]);

    this.product["fileUrl"] = this.fileUrl;

    this.AppFacades.addNewProduct(this.product).subscribe((response: any) => {
      this.successMessage = response.message;

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
      title: '',
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
        this.isSpinning = false;
        this.datas = response as IProductFullInfo[];
        this.isLoaded = false;

      },
      (err) => {
         this.isLoaded = false;
         this.isSpinning = false;
      }
    );
  }

  productEvent(event: boolean) {
    if (event) {
      this.loadProducts();
    }
  }
}
