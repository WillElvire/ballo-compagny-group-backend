import { IFullUser} from "src/app/core/interface";
import { StorageService } from "../storage";
import { Injectable } from "@angular/core";
import { user } from "src/app/core/interface/user.states";
const  USER : string = "user";

export type userStrict = Omit<IFullUser,'password'>;

@Injectable()
export class UserService {

  private u !: userStrict;
  constructor(private storageService : StorageService){
    this.u = JSON.parse(this.storageService.get(USER)) as userStrict;
  }

  get user() : userStrict{
    return this.u as userStrict;
  }
}
