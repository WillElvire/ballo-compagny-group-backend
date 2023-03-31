import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, take, Subscription } from 'rxjs';
import { AppFacades } from 'src/app/facades/app.facades';
import { userStrict } from 'src/app/services/auth';

@Injectable({
  providedIn: 'root',
})
export class StaffRoleGuard implements CanActivate , OnDestroy  {
  user !: userStrict ;
  subscription  =  new Subscription();

  constructor(private appFacades: AppFacades, private router: Router) {
   this.subscription = this.appFacades.getUser().subscribe((user)=> this.user = user);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {


    if (this.user.role_id === 1) return true;
    this.router.navigate(['/dashboard/commandes']);
    return  false;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
