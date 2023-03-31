
import { EntityState } from "@datorama/akita";
import { user } from "src/app/core/interface/user.states";

export interface UserState  extends EntityState<user, number> {

}


export function createInitialState(): UserState {
  return {
    user: {
      country : '',
      email : '',
      firstname : '',
      guid :'',
      id : 0,
      lastname : '',
      phone : '',
      role_id : 0,
      isActive : 1
    }
  };
}


export function defaultUserState() : user {
  return {
    user: {
     country : '',
     email : '',
     firstname : '',
     guid :'',
     id : 0,
     lastname : '',
     phone : '',
     role_id : 0,
     isActive : 1

    }
  }
}
