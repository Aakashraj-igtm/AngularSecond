import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component';

import { HeaderComponentComponent } from './header-component/header-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
const routes: Routes = [
  {path :'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponentComponent},
    {path:'signup',component:SignupComponentComponent},
    {path:'**',component:PagenotfoundComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
