import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-password-forgot',
	templateUrl: './password-forgot.component.html',
	styleUrls: ['./password-forgot.component.scss']
})
export class PasswordForgotComponent implements OnInit {

	formPasswordFogot = new FormGroup({});
	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.formPasswordFogot = this.formBuilder.group({
			email: ['', {
				validators: [Validators.required, Validators.minLength(3)],
			}]
		});
	}
}
