import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from './is-admin.guard';
import { LandingPageComponent } from './layout/components/landing-page/landing-page.component';
import { LoginComponent } from './modules/account/login/login.component';
import { PasswordChangeComponent } from './modules/account/password-change/password-change.component';
import { PasswordForgotComponent } from './modules/account/password-forgot/password-forgot.component';
import { RegisterComponent } from './modules/account/register/register.component';
import { HomeAnswerComponent } from './modules/answers/home-answer/home-answer.component';
import { HomePermissionComponent } from './modules/permissons/home-permission/home-permission.component';
import { HomeQuestionComponent } from './modules/questions/home-question/home-question.component';
import { HomeRolComponent } from './modules/roles/home-rol/home-rol.component';
import { DetailsSurveyComponent } from './modules/surveys/details-survey/details-survey.component';
import { EditSurveyComponent } from './modules/surveys/edit-survey/edit-survey.component';
import { IndexSurveyComponent } from './modules/surveys/index-survey/index-survey.component';
import { SolveSurveryComponent } from './modules/surveys/solve-survery/solve-survery.component';
import { SurveyAssingComponent } from './modules/surveys/survey-assing/survey-assing.component';
import { HomeTeamComponent } from './modules/teams/home-team/home-team.component';
import { HomeUsersComponent } from './modules/users/home-users/home-users.component';


const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{ path: 'surveys', component: IndexSurveyComponent, canActivate: [IsAdminGuard] },
	{ path: 'surveys/details/:id', component: DetailsSurveyComponent, canActivate: [IsAdminGuard] },
	{ path: 'surveys/:id/solve', component: SolveSurveryComponent, canActivate: [IsAdminGuard] },
	{ path: 'surveys/:id/assing', component: SurveyAssingComponent, canActivate: [IsAdminGuard] },
	{ path: 'surveys/edit/:id', component: EditSurveyComponent, canActivate: [IsAdminGuard] },
	{ path: 'questions', component: HomeQuestionComponent, canActivate: [IsAdminGuard] },
	{ path: 'answers', component: HomeAnswerComponent, canActivate: [IsAdminGuard] },
	{ path: 'users', component: HomeUsersComponent, canActivate: [IsAdminGuard] },
	{ path: 'roles', component: HomeRolComponent, canActivate: [IsAdminGuard] },
	{ path: 'permissions', component: HomePermissionComponent, canActivate: [IsAdminGuard] },
	{ path: 'teams', component: HomeTeamComponent, canActivate: [IsAdminGuard] },

	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'password-forgot', component: PasswordForgotComponent },
	{ path: 'password-change', component: PasswordChangeComponent },
	{ path: '**', redirectTo: '404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
