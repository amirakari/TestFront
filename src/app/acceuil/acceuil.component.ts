import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AcceuilService} from './acceuil.service';
import {Url} from '../Model/Url';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  @Input() urls: Url[];
  constructor(private formBuilder: FormBuilder,
              private userService: AcceuilService,
              private router: Router, ) { }

  ngOnInit(): void {
    this.userService.getUrl().subscribe(
      (boutique) => { this.urls = boutique;
         },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
  }
  addUtilisateur(formulaire: NgForm){
    this.userService.addUrl(formulaire.value).subscribe(
      (response) => {
        console.log(formulaire);
        this.router.navigate(['acceuil']);
      },
      (error) => {
      }
    );
  }
  update(id){
        this.userService.updatetilisateur(id , null).subscribe(
          (response) => {
          },
          (error) => {
            console.log(error);
          }
        );
  }
}
