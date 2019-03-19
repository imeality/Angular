import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnvironmentComponent } from './environment/environment.component';
import { InnovationComponent } from './innovation/innovation.component';
import { CallComponent } from './call/call.component';
import { CommunityComponent } from './community/community.component';
import { AboutComponent } from './about/about.component';
import { ContributionComponent } from './contribution/contribution.component';
import { AskComponent } from './ask/ask.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'environment', component: EnvironmentComponent},
  {path: 'innovation', component: InnovationComponent},
  {path: 'call', component: CallComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contribution', component: ContributionComponent},
  {path: 'ask', component: AskComponent},
  {path: 'nav', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
