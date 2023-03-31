import { ChangeDetectionStrategy, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { IShoppingProduct, IUser } from 'src/app/core/interface';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss'],
  //changeDetection : ChangeDetectionStrategy.OnPush
})
export class ShoppingDetailComponent implements OnInit  , AfterViewInit, OnChanges{

  @Input() user ?:IUser ;
  @Input() detailProduct ?: IShoppingProduct;
  @Input() quantity?: number ;
  @Input() price ?: number;


  constructor() {

  }


  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

}
