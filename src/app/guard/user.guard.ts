import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Utilisateur} from '../Model/Utilisateur';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate{
  user: Utilisateur;
  status: boolean;
  constructor( ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (this.status);
  }
}
