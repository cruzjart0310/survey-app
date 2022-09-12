import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../security.service';

@Injectable({
	providedIn: 'root'
})
export class IsUserGuard implements CanActivate {

	constructor(
		private router: Router,
		private securityService: SecurityService) {

	}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		if (this.securityService.getRol() === 'user') {
			return true;
		}

		this.router.navigate(['/login'])
		return false;
	}

}
