import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NonNumericDirective } from './directives/non-numeric.directive';
import { PhonePipe } from './pipes/phone.pipe';


@NgModule({
	declarations: [
		NonNumericDirective,
		PhonePipe
	],
	imports: [
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [],
	exports: [
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	bootstrap: []
})
export class SharedModule { }
