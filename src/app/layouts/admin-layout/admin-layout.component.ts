import { Component, OnInit } from '@angular/core';
import { AfterViewInit , ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacades } from 'src/app/facades/app.facades';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  providers : [AppFacades]
})
export class AdminLayoutComponent implements OnInit {

  @ViewChild("sideBar",{static:false}) sideBar ?: ElementRef;
  color ?: string;

  constructor(private router  : Router  , private appFacades : AppFacades , private Render : Renderer2){

  }
  logout() {
    this.router.navigate(["/v1/login"]);
  }

  ngOnInit(): void {
    this.appFacades.get('preference').subscribe((response :any )=>{
      this.color = JSON.parse(response).color;
    })
  }

  ngAfterViewInit(): void {
    this.Render.setStyle(this.sideBar?.nativeElement,'background',!!this.color ? this.color : "black")
  }

}
