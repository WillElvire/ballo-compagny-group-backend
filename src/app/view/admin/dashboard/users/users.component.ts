import { Component, OnInit } from '@angular/core';
import { AppFacades } from 'src/app/facades/app.facades';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  roles : Required<{title : string , id : number}> [] = [];
  enableUserForm: boolean = false;
  user = {
    email: '',
    country: '',
    isActive: 0,
    firstname: '',
    lastname: '',
    password: '',
    role_id: 1,
    phone: '',
  };

  constructor(private appFacades: AppFacades) {}

  ngOnInit(): void {
   this.getUserList();
   this.getUserRole();
  }

  getUserList(){
    this.appFacades.getUserList().subscribe((response: any) => {
      this.users = response;
    });
  }

  getUserRole(){
    this.appFacades.getUserRole().subscribe((response : any)=>{
      this.roles = response.filter((element : any)=> element.title != 'user');
    })
  }
}
