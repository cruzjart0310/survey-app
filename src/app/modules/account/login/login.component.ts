import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponseDto } from '../models/login-response-dto';
import { UserAuthenticationDto } from '../models/user-authentication-dto';
import { SecurityService } from '../security/security.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	hide = true;
	formLogin = new FormGroup({});
	dataFormLogin: UserAuthenticationDto = { email: '', password: '', clientUri: '' }

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private service: SecurityService) {

		this.formLogin = this.formBuilder.group({
			email: ['', {
				validators: [Validators.required, Validators.minLength(3)],
			}]
			,
			password: ['', {
				validators: [Validators.required, Validators.minLength(3)],
			}],
		});
	}

	ngOnInit(): void {
	}

	//Events
	login() {
		let data = this.formLogin.value;

		this.service.login(data)
			.subscribe({
				next: (response: any) => {
					console.log(response);
					this.service.saveToken(response);
					this.router.navigate(['/']);
				},
				error: (error: any) => {
					console.error(error);
				},
				complete: () => console.info('completed')
			});
	}
}
