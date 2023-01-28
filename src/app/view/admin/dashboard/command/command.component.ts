import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {

  header  : string[]  = ["Numero commande", "Produit","Marque","Quantité","Prix Unitaire","Prix total","Date","Action"];
  buttons : string[]  = ["Voir plus","Livrer"];

  constructor() { }

  ngOnInit(): void {
  }

}
