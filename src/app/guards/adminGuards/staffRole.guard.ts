import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, take } from 'rxjs';
import { AppFacades } from 'src/app/facades/app.facades';

@Injectable({
  providedIn: 'root',
})
export class StaffRoleGuard implements CanActivate {
  user : any ;
  constructor(private appFacades: AppFacades, private router: Router) {
   this.appFacades.getUser().pipe(take(1)).subscribe((user)=> this.user);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.user.role_id == 1) return true;
    return this.router.navigate(['/dashboard/commandes']);
  }
}
