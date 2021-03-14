import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentTabComponent } from './assessment-tab/assessment-tab.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { JobAdComponent } from './job-ad/job-ad.component';
import { LoginTabComponent } from './login-tab/login-tab.component';
import { TakeAssessmentComponent } from './take-assessment/take-assessment.component';

const routes: Routes = [{
  path: 'login',
  component: LoginTabComponent
},
{ 
  path: 'jobs/ad',
  component: JobAdComponent

},
{ 
  path: 'candidate/profile',
component: CandidateProfileComponent

},
{
  path: 'assessment',
  component: AssessmentTabComponent
},{
  path:"quiz",
  component: TakeAssessmentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
