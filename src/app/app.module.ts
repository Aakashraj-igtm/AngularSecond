import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { Header2ComponentComponent } from './header2-component/header2-component.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    PagenotfoundComponentComponent,
    ProfileComponentComponent,
    Header2ComponentComponent,
    AdminHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
