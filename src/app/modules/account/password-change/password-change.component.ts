import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-password-change',
	templateUrl: './password-change.component.html',
	styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit {
	hide: boolean = true;
	formPasswordChange = new FormGroup({});

	constructor(private formBuilder: FormBuilder) {
		this.formPasswordChange = this.formBuilder.group({
			password: ['', {
				validators: [Validators.required, Validators.minLength(3)],
			}],
			confirmPassword: ['', {
				validators: [Validators.required, Validators.minLength(3)],
			}]
		});
	}

	ngOnInit(): void {
	}

	//Events
	send(): void { }

}
