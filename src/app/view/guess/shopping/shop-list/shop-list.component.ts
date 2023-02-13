import { IProductFullInfo } from 'src/app/core/interface';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppFacades } from 'src/app/facades/app.facades';
import { HttpRequestType } from 'src/app/core/enum';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  piece = new FormControl();
  marque = new FormControl();
  searchmarque = new FormControl();
  products: IProductFullInfo[] = [];
  pieces: string[] = [];
  marques: string[] = ['All'];

  constructor(
    private appFacades: AppFacades,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getMarques();
    this.loadProducts();
  }

  getCategories() {
    const httpRequest = {
      body: {},
      isEnc: false,
      url: '/categorie/gets',
      method: HttpRequestType.GET,
    };
    this.appFacades.request(httpRequest).subscribe((response: any) => {
      response.data.map((element: any) => {
        this.pieces.push(element.name);
      });
    });
  }

  getMarques() {
    const httpRequest = {
      body: {},
      isEnc: false,
      url: '/marque/gets',
      method: HttpRequestType.GET,
    };
    this.appFacades.request(httpRequest).subscribe((response: any) => {
      response.data.map((element: any) => {
        this.marques.push(element.name);
      });
    });
  }

  loadProducts() {
    this.appFacades.loadProducts().subscribe((response)=>{
      this.products =  response as IProductFullInfo[];
    });
  }

  filterElementByMarque(event: any) {
    console.log(event);
  }

  openModal(name: string) {
    this.appFacades.openModal(name);
  }

  closeModal(name: string) {
    this.appFacades.closeModal(name);
  }
}
