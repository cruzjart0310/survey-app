import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { DialogCreationComponent } from './surveys/dialog-creation/dialog-creation.component';
import { UsersComponent } from './users/users.component';
import { IndexSurveyComponent } from './surveys/index-survey/index-survey.component';
import { FormSurveyComponent } from './surveys/form-survey/form-survey.component';
import { HomeQuestionComponent } from './questions/home-question/home-question.component';
import { DetailsSurveyComponent } from './surveys/details-survey/details-survey.component';
import { CreationQuestionComponent } from './questions/creation-question/creation-question.component';
import { CreationAnswerComponent } from './answers/creation-answer/creation-answer.component';
import { HomeAnswerComponent } from './answers/home-answer/home-answer.component';
import { HomeUsersComponent } from './users/home-users/home-users.component';
import { HomeRolComponent } from './roles/home-rol/home-rol.component';
import { HomePermissionComponent } from './permissons/home-permission/home-permission.component';
import { HomeTeamComponent } from './teams/home-team/home-team.component';
import { EditSurveyComponent } from './surveys/edit-survey/edit-survey.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { PasswordForgotComponent } from './account/password-forgot/password-forgot.component';
import { PasswordChangeComponent } from './account/password-change/password-change.component';
import { SurveyAssingComponent } from './surveys/survey-assing/survey-assing.component';
import { FullNamePipe } from './surveys/pipes/full-name.pipe';
import { UploadComponent } from './questions/upload/upload.component';
import { DownloadComponent } from './questions/download/download.component';
import { FileManagerComponent } from './questions/file-manager/file-manager.component';
//import { SolveSurveryComponent } from './surveys/solve-survery/solve-survery.component';
// import { LayoutModule } from '../layout/layout.module';

@NgModule({
	declarations: [
		// UsersComponent,
		// IndexSurveyComponent,
		// FormSurveyComponent,
		// DialogCreationComponent
		//HomeQuestionComponent

		//DetailsSurveyComponent

		//SolveSurveryComponent

		//CreationQuestionComponent

		//     CreationAnswerComponent,
		//   HomeAnswerComponent

		//     HomeUsersComponent,
		//   HomeRolComponent,
		//   HomePermissionComponent,
		//   HomeTeamComponent

		// EditSurveyComponent

		// RegisterComponent

		// LoginComponent

		// PasswordForgotComponent

		// PasswordChangeComponent

		//   SurveyAssingComponent

		FullNamePipe,
		//   UploadComponent,
		//   DownloadComponent,
		//   FileManagerComponent,
		//AuthorizeComponent,
		// AuthorizeComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		// SharedModule,

		// LayoutModule,
	],
	exports: [
		// DialogCreationComponent,
		// UsersComponent,
		// IndexSurveyComponent,
		// FormSurveyComponent,
	],
	//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModulesModule { }
