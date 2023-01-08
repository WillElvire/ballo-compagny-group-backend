import { IShoppingProduct } from './../../../../core/interface/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { AppFacades } from 'src/app/facades/app.facades';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  detailProduct : IShoppingProduct;
  default ?:string ;

  constructor(private route: ActivatedRoute,private router : Router,private appFacade :AppFacades) {
    const extras :any = this.router.getCurrentNavigation()?.extras.state;
    this.detailProduct = extras?.product;
    this.default = extras?.product?.images?.image1;
  }

  ngOnInit(): void {

  }

  setImage(index :string){

    if(index == "2") {
      this.detailProduct.images.image1 = this.detailProduct.images?.image2;
    }

    if(index == "3") {
      this.detailProduct.images.image1 = this.detailProduct.images?.image3;
    }

    if(index == "1") {
      this.detailProduct.images.image1 = this.default;
    }

  }

  activeModal(modal:any){
    this.appFacade.openModal(modal)
  }


  closeModal(index:any){
    this.appFacade.closeModal(index)
  }

}
