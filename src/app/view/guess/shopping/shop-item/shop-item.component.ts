
import { IShoppingProduct, IUser, IOrder } from './../../../../core/interface/index';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppFacades } from 'src/app/facades/app.facades';
import { Location } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ShopItemComponent implements OnInit  {

  quantity      :  number  = 0;
  detailProduct :  IShoppingProduct;
  default      ?: string ;
  price         :  number  = 0;

  user          :  IUser = {
    firstname : "",
    lastname  : "",
    email     : "",
    phone     : ""
  };

  order : IOrder = {
    user     : this.user,
    quantity : this.quantity,
    total    : this.price
  }

  isFoward  : boolean  = false;
  error     ?: string ;

  constructor(private route: ActivatedRoute,private router : Router,private appFacade :AppFacades , private Location : Location) {

    const extras :any  = this.router.getCurrentNavigation()?.extras.state;
    this.detailProduct = extras?.product;
    this.default       = extras?.product?.images?.image1;

  }



  ngOnInit(): void {

    if(!this.detailProduct?.title)
    return this.Location.back();

  }



  activeModal(modal:any){
    this.appFacade.openModal(modal)
  }


  closeModal(index:any){
    this.appFacade.closeModal(index)
  }

  generateTotalPriceForProduct(){
     this.price  = this.detailProduct.price * this.quantity;
     console.log(this.price)
  }


  submitRequestForm(){
    console.log(this.quantity);

    const x = [];

  }

  next(){

    if(!!this.user.firstname &&  !!this.user.lastname && !!this.user.email && !!this.user.phone){
      this.error = "";
      return this.isFoward = !this.isFoward
    }

    return this.error = "veuillez remplir le différents champs";

  }


}
