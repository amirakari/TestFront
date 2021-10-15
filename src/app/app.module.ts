import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { NgQrScannerModule } from 'angular2-qrscanner';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './utilisateur/login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import {APP_BASE_HREF} from '@angular/common';
import {LoginGuard} from './guard/login.guard';
import {UserGuard} from './guard/user.guard';
import {LoginInterceptorProvider} from './interceptors/login.interceptor';
import {HttpComponent} from './http/http.component';


@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    LoginComponent,
    AcceuilComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    NgQrScannerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [{provide: APP_BASE_HREF , useValue: '/'},
    LoginGuard, UserGuard, LoginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
