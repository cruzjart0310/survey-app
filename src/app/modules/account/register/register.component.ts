import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { UserRegistrationDto } from '../models/user-registration-dto';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	hide = true;
	dataRegister: UserRegistrationDto = { firstName: '', lastName: '', email: '', password: '', passwordConfirm: '', clientURI: '' };
	formRegister = new FormGroup({});

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private service: AccountService) {

		this.formRegister = this.formBuilder.group({
			name: ['', {
				validators: [Validators.required, Validators.minLength(5)],
			}]
			,
			firstName: ['', {
				validators: [Validators.required, Validators.minLength(5)],
			}]
			,
			lastName: ['', {
				validators: [Validators.required, Validators.minLength(5)],
			}]
			,
			email: ['', {
				validators: [Validators.required, Validators.minLength(3)],
			}]
			,
			password: ['', {
				validators: [Validators.required, Validators.minLength(3)],
			}],
			passwordConfirm: ['', {
				validators: [Validators.required, Validators.minLength(3)],
			}]
		});
	}

	ngOnInit(): void {
	}

	//Events
	register() {
		debugger
		let data = this.formRegister.value;
		this.service.create(data)
			.subscribe(
				{
					next: (response: any) => {
						this.router.navigate(['/login']);
					},
					error: (error: any) => {
						console.error(error);
					},
					complete: () => console.info('completed')
				}
			);
	}
}
