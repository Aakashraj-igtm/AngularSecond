import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    PagenotfoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
