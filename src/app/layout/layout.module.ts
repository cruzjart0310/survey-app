import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonComponent } from './components/button/button.component';
import { AuthorizeComponent } from '../modules/security/authorize/authorize.component';



@NgModule({
	declarations: [
		LandingPageComponent,
		MenuComponent,
		AuthorizeComponent,
		ButtonComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule
	],
	exports: [
		LandingPageComponent,
		MenuComponent,
		AuthorizeComponent,
	],
	providers: [],
	bootstrap: []
})
export class LayoutModule { }
