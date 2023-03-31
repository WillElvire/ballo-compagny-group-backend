import { user } from 'src/app/core/interface/user.states';
import { Injectable } from '@angular/core';
import { UserState, createInitialState } from './user.state';
import { Store, StoreConfig } from '@datorama/akita';
import { UserService, userStrict } from 'src/app/services/auth';
import { StorageService } from 'src/app/services/storage';




@Injectable({
  providedIn : 'root'
})
@StoreConfig({ name: 'User' })
export class UserStore extends Store<UserState> {
  constructor() {
    super(defaultUserService.getInstance().getUser());
  }
}



export class userStateAdapter   {
  user$ !: user;
  constructor(private user : userStrict) {
    this.user = user;
  }

}


@Injectable({
  providedIn : 'root'
})
class defaultUserService {

  private static INSTANCE :defaultUserService;
  private constructor(private userService : UserService){

  }

  public static  getInstance() : defaultUserService
  {
    if(defaultUserService.INSTANCE == null) return new defaultUserService(new UserService(new StorageService()));
    return defaultUserService.INSTANCE;
  }

  getUser() {
    return (!!this.userService.user ) ? new userStateAdapter(this.userService.user) : createInitialState();
  }
}
