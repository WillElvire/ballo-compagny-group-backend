import { Injectable } from '@angular/core';

import { Query, applyTransaction } from '@datorama/akita';
import { UserStore } from './users.store';
import { UserState } from './user.state';
import { verifyObj } from 'src/app/services/data/verification.service';
import { user } from 'src/app/core/interface/user.states';




@Injectable()
export class UserQuery extends Query<UserState> {

  //user$   = this.select();
  isLoggedIn$ = this.select(state => !!state["user"]);
  selectUser$ = this.select('user');
  isLoading$  = this.selectLoading();;
  error$      = this.selectError();


  constructor(protected override store: UserStore) {
    super(store);
  }

  get isLoggedIn() {
    const user = this.getValue()["user"] ;
    return verifyObj(user).count == 0;
  }

  get user() {
    return this.getValue()["user"];
  }

  update(user : user) {
    return applyTransaction(()=>{
      this.store.update(user);
      this.store.setLoading(true);
    })
  }

  logout() {
    this.store.reset();
  }
}
