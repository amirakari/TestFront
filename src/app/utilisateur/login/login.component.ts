import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  message = '';
  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
  }
  login(credentials){
    this.loginService.login(credentials).subscribe(
      (response) => {
        localStorage.setItem('token', response.access_token);
        this.message = '';
        this.router.navigate(['acceuil']);
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'ces informations ne correspond à aucun compte';
        console.log(this.errorMessage);
      }
    );
  }
}
