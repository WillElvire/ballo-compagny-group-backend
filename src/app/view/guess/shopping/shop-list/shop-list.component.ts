import { IShoppingProduct } from 'src/app/core/interface';
import { Component, OnInit } from '@angular/core';
import { fakeProducts } from 'src/app/moocks';
import { FormControl } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

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

  pieces = [
   "capo",
   "frein"
  ];

  marques  = [
    `Suziki`,
    `Madza`,
  ];



  constructor() { }

  ngOnInit(): void {


  }

}
