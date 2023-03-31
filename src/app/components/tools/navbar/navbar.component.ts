import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { AppFacades } from 'src/app/facades/app.facades';
import { userStrict } from 'src/app/services/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user !: userStrict ;
  pageY: number = 0;
  @Input() fixable: boolean = true;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.pageY = window.pageYOffset;
  }
  constructor(private appFacades : AppFacades) { }

  ngOnInit(): void {
    this.appFacades.getUser().pipe(take(1)).subscribe((user)=>{
      this.user = user;
      console.log("user",this.user);
    });

  }



}
