import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonComponent } from './components/button/button.component';
import { AuthorizeComponent } from '../modules/account/security/authorize/authorize.component';
import { ComponentChildAComponent } from './components/landing-page/component-child-a/component-child-a.component';
import { ComponentChildBComponent } from './components/landing-page/component-child-b/component-child-b.component';
import { ComponentGranddaughterAComponent } from './components/landing-page/component-granddaughter-a/component-granddaughter-a.component';
import { ComponentGranddaughterBComponent } from './components/landing-page/component-granddaughter-b/component-granddaughter-b.component';
import { ComponentEventBindingComponent } from './components/landing-page/component-event-binding/component-event-binding.component';
import { ComponentInputDecoratorComponent } from './components/landing-page/component-input-decorator/component-input-decorator.component';

@NgModule({
	declarations: [
		LandingPageComponent,
		MenuComponent,
		AuthorizeComponent,
		ButtonComponent,
		ComponentChildAComponent,
		ComponentChildBComponent,
		ComponentGranddaughterAComponent,
		ComponentGranddaughterBComponent,
		ComponentEventBindingComponent,
  ComponentInputDecoratorComponent

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
