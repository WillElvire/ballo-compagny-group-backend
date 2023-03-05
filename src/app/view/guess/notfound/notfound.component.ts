import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentModule } from 'src/app/modules/components.module';

@Component({
  selector: 'app-notfound',
  standalone : true,
  imports : [CommonModule,ComponentModule,RouterModule],
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
