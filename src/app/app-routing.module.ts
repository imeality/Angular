import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

import { EnvironmentComponent } from './environment/environment.component';
import { InnovationComponent } from './innovation/innovation.component';
import { CommunityComponent } from './community/community.component';
import { CallComponent } from './call/call.component';
import { TryComponent } from './try/try.component';
import { LoginComponent } from './login/login.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { PageAddComponent } from './page-add/page-add.component';
import { PageGetComponent } from './page-get/page-get.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'environment', component: EnvironmentComponent},
  {path: 'innovation', component: InnovationComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'call', component: CallComponent},
  {path: 'trys', component: TryComponent},
  {path: 'pageadd', component: PageAddComponent},
  {path: 'pageedit', component: PageEditComponent},
  {path: 'pageget', component: PageGetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
