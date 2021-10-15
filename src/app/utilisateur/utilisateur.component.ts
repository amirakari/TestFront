import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  Message = '';
  errorMessage1 = '';
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router, ) { }

  ngOnInit(): void {
  }
  addUtilisateur(formulaire: NgForm){
    this.userService.addUtilisateur(formulaire.value).subscribe(
      (response) => {
        console.log(formulaire);
        this.router.navigate(['']);
      },
      (error) => {
        this.errorMessage1 = 'probléme de création du compte . vérifier les champs';
        console.log(error);
      }
    );

  }
}
