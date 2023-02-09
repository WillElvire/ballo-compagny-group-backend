import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFullCommandDetail } from 'src/app/core/interface';
import { AppFacades } from 'src/app/facades/app.facades';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  guid : string = "";
  detailCommand  ?: IFullCommandDetail ;

  constructor(private router : ActivatedRoute,private appFacade : AppFacades) {
    const extras: any = this.router.params.subscribe((response :any)=>{
      this.guid = response?.guid;
    });

  }

  ngOnInit(): void {
    this.appFacade.getCommandUsingGuid(this.guid).subscribe((response :any)=>{
      this.detailCommand  = response[0] as IFullCommandDetail;
    })

  }

}
