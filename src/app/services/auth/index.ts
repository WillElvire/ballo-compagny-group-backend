import { IUser } from "src/app/core/interface";
import { StorageService } from "../storage";
import { Injectable } from "@angular/core";
const  USER : string = "user";

@Injectable()
export class UserAuthentificationService {

  user !: IUser;
  constructor(private storageService : StorageService){
    this.loadUserData()
  }

  isLoggedIn() {
    return !!this.user
  }

  getUser() {
    return this.user;
  }

  logout(){
    this.storageService.delete(USER);
  }
  loadUserData() {
    this.storageService.get(USER).subscribe((response)=>{
      this.user = response as IUser;
    })
  }
}
