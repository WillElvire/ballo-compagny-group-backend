import { IShoppingProduct } from 'src/app/core/interface';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

  @Input() headers !: string[];
  @Input() datas    : any[]    = [];
  @Input() buttons  : string[] = ["modifier","supprimer"]
  @Input() type : string       = 'command';
  @Input() filter : boolean    = true;

  category : string  = "";

  constructor() { }

  ngOnInit(): void {
  }

  getCategorie(event : string) {
    this.category  = event;
  }

  createControl(value: number | string){
    return new FormControl(value == '1' || value == 1 ? true  : false);
  }
}
