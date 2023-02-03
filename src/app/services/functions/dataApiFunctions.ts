import { Injectable } from '@angular/core';
import { HttpRequestType } from 'src/app/core/enum';
import { Http } from '../api';
import { IProduct } from 'src/app/core/interface';

@Injectable({
  providedIn : 'root'
})
export class InteralFunction {

  constructor(private appFacades : Http){

  }

  getCategories() {
    const httpRequest = {body  : {},isEnc : false,url : '/categorie/gets',method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest)
  }

  getMarques() {
    const httpRequest = {body  : {},isEnc : false,url : '/marque/gets',method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest)
  }


  addNewProduct(product : Omit<IProduct,'guid'>){
    const httpRequest = {body  : product,isEnc : false,url : '/product/add',method : HttpRequestType.POST};
    return this.appFacades.request(httpRequest)
  }

  loadProducts(){
    const httpRequest = {body  : {},isEnc : false,url : '/product/gets',method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest)
  }


}
