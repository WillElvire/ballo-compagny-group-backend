import { Component, Input, OnInit } from '@angular/core';
import { IShoppingProduct } from 'src/app/core/interface';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input() shoppingItemData?: IShoppingProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
