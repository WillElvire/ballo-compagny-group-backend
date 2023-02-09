import {
  IShoppingProduct,
  IUser,
  IOrder,
} from './../../../../core/interface/index';
import { Component,HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacades } from 'src/app/facades/app.facades';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent implements OnInit {
  detailProduct: IShoppingProduct;
  default!: string;
  price: number = 0;
  isLoad: boolean = false;


  user: IUser = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  };

  order: IOrder = {
    user: this.user,
    quantity: 0,
    total: 0,
  };

  isFoward: boolean = false;
  error?: string;

  size: { width: number; height: number } = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.size.width = window.innerWidth;
    this.size.height = window.innerHeight;
  }

  constructor(
    private router: Router,
    private appFacade: AppFacades,
    private Location: Location
  ) {
    const extras: any = this.router.getCurrentNavigation()?.extras.state;
    this.detailProduct = extras?.product;
    this.order.product = this.detailProduct?.idf;
    this.default = extras?.product?.images?.image1;
  }


  ngOnInit(): void {
    if (!this.detailProduct?.title) return this.Location.back();
  }

  activeModal(modal: any) {
    this.appFacade.openModal(modal);
  }

  closeModal(index: any) {
    this.appFacade.closeModal(index);
  }

  generateTotalPriceForProduct() {
    this.price = this.detailProduct.price * this.order.quantity;
    this.order.total = this.price;
  }

  submitRequestForm() {
    const emailVerification = this.appFacade.verifyIfEmail(
      this.order.user.email
    );

    if (emailVerification) {
      this.isLoad = true;
      return this.appFacade.addNewCommand(this.order).subscribe(
        (response: any) => {
          this.isLoad = false;
          this.closeModal("custom-modal-1");
          this.appFacade.alertSuccess(response.message);
        },
        (err) => {
          this.isLoad = false;
          return this.error = err.message;
        }
      );
    }
    this.isFoward = false;
    return (this.error = 'Veuillez renseiger une addresse  email valide');
  }

  next() {
    const verification = this.appFacade.verifyObj(this.user);
    if (verification.count == 0) {
      this.error = '';
      return (this.isFoward = !this.isFoward);
    }
    return (this.error = 'veuillez remplir les différents champs');
  }


}
