import { IShoppingProduct } from 'src/app/core/interface';
import { Component, OnInit } from '@angular/core';
import { fakeProducts } from 'src/app/moocks';
import { FormControl } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { AppFacades } from 'src/app/facades/app.facades';
import { HttpRequestType } from 'src/app/core/enum';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopListComponent implements OnInit {


  piece  = new FormControl();
  marque = new FormControl();
  products : IShoppingProduct[] = fakeProducts;
  pieces  : string[] = [] ;
  marques : string[] = [];

  constructor(private appFacades : AppFacades) { }

  ngOnInit(): void {
    this.getCategories();
    this.getMarques();
  }

  getCategories() {
    const httpRequest = {body  : {},isEnc : false,url : '/categorie/gets',method : HttpRequestType.GET}
    this.appFacades.request(httpRequest)
    .subscribe((response : any)=>{
      response.data.map((element : any)=>{
          this.pieces.push(element.name);
      })
    })
  }

  getMarques() {
    const httpRequest = {body  : {},isEnc : false,url : '/marque/gets',method : HttpRequestType.GET};
    this.appFacades.request(httpRequest)
    .subscribe((response :any)=>{
      response.data.map((element : any)=>{
        this.marques.push(element.name);
      })
    })
  }

}
