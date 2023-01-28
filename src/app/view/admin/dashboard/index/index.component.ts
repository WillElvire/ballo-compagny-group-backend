import { Component, OnInit } from '@angular/core';
import { UserQuery } from 'src/app/store/users/user.query';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private userQuery : UserQuery) { }

  ngOnInit(): void {
    this.userQuery.allUser$.subscribe((response)=>{
      console.log(response);
    });
  }

}
