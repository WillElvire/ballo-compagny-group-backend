import { Location } from '@angular/common';
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take, Subscription } from 'rxjs';
import { AppFacades } from 'src/app/facades/app.facades';
import { userStrict } from 'src/app/services/auth';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate , OnDestroy {

  user !:userStrict;
  subscription = new Subscription();

  constructor(private appFacades : AppFacades , private router : Router,private location : Location){
   this.subscription = this.appFacades.getUser().subscribe((user)=> this.user = user);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!!this.user.firstname) {
        return true;
      }
      //this.appFacades.alertError("Vous devez vous connecter !");
      this.location.back()
      return false;

  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
