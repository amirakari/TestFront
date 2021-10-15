import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  link = environment.http + '/utilisateur/login';
  constructor(private http: HttpClient,
              private router: Router) { }
  login(credentials): Observable<any>{
    return  this.http.post(this.link, credentials);
  }
}
