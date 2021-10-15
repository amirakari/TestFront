import { Injectable } from '@angular/core';
import {Utilisateur} from '../Model/Utilisateur';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Url} from '../Model/Url';

@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  private urls: Url[];
  link = environment.http + '/url';
  constructor(
    private http: HttpClient
  ) {
  }
  addUrl(url: URL): Observable<any>{
      return  this.http.post(this.link, url);
  }
  getUrl(): Observable<Url[]>{
    return this.http.get<Url[]>(this.link);
  }
  updatetilisateur(id: number, url: Url): Observable<any>{
    const link1 = this.link + `/${id}`;
    return  this.http.patch(link1, url);
  }
}
