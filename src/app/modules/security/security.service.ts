import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SecurityService {

	constructor() { }

	isLogged(): boolean {
		return false;
	}

	getRol(): string {
		return '';
	}
}
