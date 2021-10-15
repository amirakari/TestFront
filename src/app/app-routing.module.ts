import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {LoginComponent} from './utilisateur/login/login.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
const Routes: Routes = [
  {path: '', component:  UtilisateurComponent},
  {path: 'login', component:  LoginComponent},
  {path: 'acceuil', component:  AcceuilComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
