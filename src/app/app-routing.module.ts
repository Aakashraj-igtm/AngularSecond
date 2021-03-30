import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component';

import { HeaderComponentComponent } from './header-component/header-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
const routes: Routes = [
  {path :'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponentComponent},
    {path:'signup',component:SignupComponentComponent},
    {path:'profile',component:ProfileComponentComponent},
    {path:'adminHome',component:AdminHomePageComponent},
    {path:'**',component:PagenotfoundComponentComponent}
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
