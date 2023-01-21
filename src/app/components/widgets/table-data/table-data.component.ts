import { IShoppingProduct } from 'src/app/core/interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

  @Input() headers !: string[];
  @Input() datas    : any[]    = [];
  @Input() buttons  : string[] = ["modifier","supprimer"]
  @Input() type : string       = 'product';
  category : string  = "";

  constructor() { }

  ngOnInit(): void {
  }

  getCategorie(event : string) {
    this.category  = event;
  }

}
