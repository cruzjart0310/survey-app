import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponseDto } from '../models/login-response-dto';
import { UserAuthenticationDto } from '../models/user-authentication-dto';
import { UserRegistrationDto } from '../models/user-registration-dto';

const init: any = {
	id: '',
	name: ''
}

@Injectable({
	providedIn: 'root'
})
export class SecurityService {

	private city$ = new BehaviorSubject<any>(init);

	private apiUrl = environment.apiUrl + '/account';
	private readonly tokenKey = 'token';
	private readonly expirationkey = 'expiration';
	private readonly roleKey = "role";

	constructor(private http: HttpClient) { }

	get selectedCity$(): Observable<any> {
		return this.city$.asObservable();
	}

	setCity(city: any): void {
		this.city$.next(city);
	}

	public create(userRegistration: UserRegistrationDto): Observable<UserRegistrationDto> {
		return this.http.post<UserRegistrationDto>(`${this.apiUrl}/create`, userRegistration);
	}

	public login(userAuthenticationDto: UserAuthenticationDto): Observable<LoginResponseDto> {
		return this.http.post<LoginResponseDto>(`${this.apiUrl}/login`, userAuthenticationDto);
	}

	public logOut() {
		return this.http.post(`${this.apiUrl}/LogOut`, null);
	}

	public isLogged(): boolean {
		const token = localStorage.getItem(this.tokenKey);
		if (!token) {
			return false;
		}

		const expiration = localStorage.getItem(this.expirationkey);
		const expirationDate = new Date(`${expiration}`);
		if (expirationDate <= new Date()) {
			this.removeToken();
			return false;
		}
		return true;
	}

	public getRol(): string {
		const rol = this.getFieldJWT(this.roleKey);
		return rol;
	}

	public getFieldJWT(field: string): string {
		const token = localStorage.getItem(this.tokenKey);
		if (!token) {
			return '';
		}
		var tokenData = JSON.parse(atob(token.split('.')[1]));
		return tokenData[field];
	}

	public saveToken(response: LoginResponseDto) {
		localStorage.setItem(this.tokenKey, response.token);
		localStorage.setItem(this.expirationkey, response.expiration.toString());
	}

	public removeToken() {
		localStorage.removeItem(this.tokenKey);
		localStorage.removeItem(this.expirationkey);
	}

	public getToken() {
		return localStorage.getItem(this.tokenKey);
	}
}
