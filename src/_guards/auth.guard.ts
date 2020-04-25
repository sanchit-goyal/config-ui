import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../_models/user';
import {Constants} from '../_models/constants';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try {
      const data = new User(JSON.parse(localStorage.getItem(Constants.USER)));
      if (data && data.id && data.userName && data.roles.length !== 0) {
        return true;
      }
    } catch (e) {
      return this.router.navigate(['/login']);
    }
    return true;
  }

}
