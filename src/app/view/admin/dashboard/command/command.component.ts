import { Component, OnInit } from '@angular/core';
import { IFullCommandDetail } from 'src/app/core/interface';
import { AppFacades } from 'src/app/facades/app.facades';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {

  header  : string[]  = ["Identifiant", "nom et prenom client","email","telephone","Date","Statut","Action"];
  buttons : string[]  = ["Voir plus","Livrer"];
  commandes  : IFullCommandDetail [] = [];
  constructor(private appFacades : AppFacades) { }

  ngOnInit(): void {
   this.getCommandes();
  }

  getCommandes() {
    this.appFacades.getCommand().subscribe((response)=>{
      this.commandes = response as IFullCommandDetail []
    })
  }

}
