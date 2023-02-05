import { Component, OnInit } from '@angular/core';
import { AppFacades } from 'src/app/facades/app.facades';
import { UserQuery } from 'src/app/store/users/user.query';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  report : Required<{currentStock : number , dailyBooking : number , weeklyBooking : number}> = {
    currentStock  : 0,
    dailyBooking  : 0,
    weeklyBooking : 0
  }

  constructor(private userQuery : UserQuery,private appFacades  : AppFacades) { }

  ngOnInit(): void {
    this.getUserLoggedIn();
    this.getReport();
  }

  getUserLoggedIn() {
    this.userQuery.allUser$.subscribe((response)=>{
      console.log(response);
    });
  }

  getReport() {
    this.appFacades.getStockProduct().subscribe((response : any)=> {
      console.log(response)
      response.map((element : {quantity : string})=> {
          console.log(element.quantity)
          this.report.currentStock = this.report.currentStock + Number.parseInt(element.quantity)
      })
    });
  }

}
