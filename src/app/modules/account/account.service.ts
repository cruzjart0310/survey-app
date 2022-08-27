import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponseDto } from './models/login-response-dto';
import { UserAuthenticationDto } from './models/user-authentication-dto';
import { UserRegistrationDto } from './models/user-registration-dto';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	private apiUrl = environment.apiUrl + '/account';

	constructor(private http: HttpClient) {

	}

	public create(userRegistration: UserRegistrationDto): Observable<UserRegistrationDto> {
		return this.http.post<UserRegistrationDto>(`${this.apiUrl}/create`, userRegistration);
	}

	public login(userAuthenticationDto: UserAuthenticationDto): Observable<LoginResponseDto> {
		return this.http.post<LoginResponseDto>(`${this.apiUrl}/login`, userAuthenticationDto);
	}
}
