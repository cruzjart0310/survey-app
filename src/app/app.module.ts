import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { UsersComponent } from './modules/users/users.component';
import { IndexSurveyComponent } from './modules/surveys/index-survey/index-survey.component';
import { FormSurveyComponent } from './modules/surveys/form-survey/form-survey.component';
import { DialogCreationComponent } from './modules/surveys/dialog-creation/dialog-creation.component';
import { HomeQuestionComponent } from './modules/questions/home-question/home-question.component';
import { DetailsSurveyComponent } from './modules/surveys/details-survey/details-survey.component';
import { SolveSurveryComponent } from './modules/surveys/solve-survery/solve-survery.component';
import { CreationQuestionComponent } from './modules/questions/creation-question/creation-question.component';
import { HomeAnswerComponent } from './modules/answers/home-answer/home-answer.component';
import { CreationAnswerComponent } from './modules/answers/creation-answer/creation-answer.component';
import { HomeUsersComponent } from './modules/users/home-users/home-users.component';
import { HomeRolComponent } from './modules/roles/home-rol/home-rol.component';
import { HomePermissionComponent } from './modules/permissons/home-permission/home-permission.component';
import { HomeTeamComponent } from './modules/teams/home-team/home-team.component';
import { EditSurveyComponent } from './modules/surveys/edit-survey/edit-survey.component';
import { RegisterComponent } from './modules/account/register/register.component';
import { LoginComponent } from './modules/account/login/login.component';
import { PasswordForgotComponent } from './modules/account/password-forgot/password-forgot.component';
import { PasswordChangeComponent } from './modules/account/password-change/password-change.component';
import { SurveyAssingComponent } from './modules/surveys/survey-assing/survey-assing.component';
import { FullNamePipe } from './modules/surveys/pipes/full-name.pipe';

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		IndexSurveyComponent,
		FormSurveyComponent,
		EditSurveyComponent,
		DialogCreationComponent,
		DetailsSurveyComponent,
		SolveSurveryComponent,
		SurveyAssingComponent,

		HomeQuestionComponent,
		CreationQuestionComponent,
		HomeAnswerComponent,
		CreationAnswerComponent,

		HomeUsersComponent,
		HomeRolComponent,
		HomePermissionComponent,
		HomeTeamComponent,

		RegisterComponent,
		LoginComponent,
		PasswordForgotComponent,
		PasswordChangeComponent,

		FullNamePipe
	],
	imports: [
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		LayoutModule,
		SharedModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
