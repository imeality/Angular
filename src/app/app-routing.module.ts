import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EnvironmentComponent } from './environment/environment.component';
import { InnovationComponent } from './innovation/innovation.component';
import { CommunityComponent } from './community/community.component';
import { CallComponent } from './call/call.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'environment', component: EnvironmentComponent},
  {path: 'innovation', component: InnovationComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'call', component: CallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
