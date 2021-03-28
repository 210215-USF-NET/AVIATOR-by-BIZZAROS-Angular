import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AddFileComponent } from './components/add-file/add-file.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ScriptComponent } from './components/script/script.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { GetPilotsComponent } from './components/get-pilots/get-pilots.component';

@NgModule({
    declarations: [
    AppComponent,
    AddFileComponent,
    AboutPageComponent,
    AuthButtonComponent,
    EditUserComponent,
    GetPilotsComponent,
    NavMenuComponent,
    UserInfoComponent,
    ScriptComponent,


    

    ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AuthModule.forRoot(
    {
    domain: 'dev-v1e9x4pd.us.auth0.com',
    clientId: 'wFTwy1aWZJ2FvknX2Sk8lE8S6Zw6908Y'
    }
    )
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
export class AppModule { }
=======
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetPilotsComponent } from './components/get-pilots/get-pilots.component';
import { HomeComponent } from './components/home/home.component';
import { ScriptComponent } from './components/script/script.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddFileComponent } from './components/add-file/add-file.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    NavMenuComponent,
    GetPilotsComponent,
    HomeComponent,
    ScriptComponent,
    UserInfoComponent,
    EditUserComponent,
    AddFileComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(
      {
        domain: 'dev-v1e9x4pd.us.auth0.com',
        clientId: 'wFTwy1aWZJ2FvknX2Sk8lE8S6Zw6908Y'
      }
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> main
